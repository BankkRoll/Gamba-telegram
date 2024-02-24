// src/index.ts

import TelegramBot, { SendMessageOptions } from "node-telegram-bot-api";
import poolsConfig, { PoolConfig } from "./pools";

import { Connection } from "@solana/web3.js";
import { GambaProvider } from "gamba-core-v2";
import { GameSettledEvent } from "../types";

const config = {
  // Add your Solana RPC URL, can be obtained from https://dev.helius.xyz
  solanaRpcUrl: "<SOLANA_RPC_URL>",
  // Add your Telegram bot token, can be obtained from @BotFather
  botToken: "<TELEGRAM_BOT_TOKEN>",
  // Add your Telegram chat ID, can be obtained from @getmyid
  chatId: "<TELEGRAM_CHAT_ID>",
};

const web3Connection = new Connection(config.solanaRpcUrl, "confirmed");
const bot = new TelegramBot(config.botToken, { polling: false });
const gambaProvider = new GambaProvider(web3Connection, {
  commitment: "confirmed",
} as any);

gambaProvider.gambaProgram.addEventListener(
  "GameSettled",
  (data: GameSettledEvent, slot: number, signature: string) => {
    const shortUser = `${data.user.toString().slice(0, 6)}...${data.user
      .toString()
      .slice(-6)}`;
    const formatMultiplier = (bps: number) => `${(bps / 100).toFixed(2)}%`;
    const metadataInfo = data.metadata
      ? data.metadata.split(":").slice(1).join(":").trim().replace(/-/g, "\\-")
      : "N/A";

    const tokenMint = data.tokenMint;

    const poolConfig:
      | { name: string; symbol: string; decimals: number; icon: string }
      | undefined = poolsConfig[tokenMint];

    if (poolConfig) {
      // Determine if it's a win based on payout
      const isWin = data.payout > 0;
      const resultEmoji = isWin ? "🟢" : "🔴";
      const resultText = isWin ? "WIN" : "LOSS";

      // Format the amount using the pool's decimals
      const formatAmount = (amount: bigint, decimals: number) => {
        const formattedAmount = Number(amount) / 10 ** decimals;
        return formattedAmount.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      };

      // Constructing the advanced message with MarkdownV2 formatting
      const message: string = [
        `*${resultEmoji} Game Settled ${resultText} ${resultEmoji}*`,
        `*User:* \`${shortUser}\``,
        `*Wager:* \`${formatAmount(data.wager, poolConfig.decimals)} ${
          poolConfig.symbol
        }\``,
        `*Payout:* \`${formatAmount(data.payout, poolConfig.decimals)} ${
          poolConfig.symbol
        }\``,
        `*Multiplier:* \`${formatMultiplier(data.multiplierBps)}\``,
        `*Time:* \`${new Date().toLocaleString()}\``,
        `*Metadata:* \`${metadataInfo}\``,
        "",
        "",
        "Built by [bankkroll](https://twitter.com/bankkroll_eth)",
      ].join("\n");

      const options: SendMessageOptions = {
        parse_mode: "MarkdownV2",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "View Transaction",
                url: `https://explorer.gamba.so/tx/${signature}`,
              },
            ],
          ],
        },
      };

      bot
        .sendMessage(config.chatId, message, options)
        .then(() => {
          console.log("Message sent to Telegram successfully.");
        })
        .catch((error: Error) => {
          console.error("Failed to send message to Telegram:", error);
        });
    } else {
      console.error(
        `Pool configuration not found for token mint: ${tokenMint}`
      );
    }
  }
);
