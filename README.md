# Telegram Bot Gamba

Listen for gamba events and send notifications to a Telegram chat using a Telegram bot.

![image](https://github.com/BankkRoll/Gamba-telegram/assets/106103625/8ae14dfd-2645-45f2-8378-2e8f865692c5)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm:

```
npm install
```

## Configuration

Before running the application, you need to configure the following parameters:

- `Solana RPC URL:` Add your Solana RPC URL, which can be obtained from [https://dev.helius.xyz](https://dev.helius.xyz).
- `Telegram Bot Token:` Add your Telegram bot token, which can be obtained from @BotFather.
- `Telegram Chat ID:` Add your Telegram chat ID, which can be obtained from @getmyidbot.

## Usage

After configuring the parameters, you can build and start the application using the following command:

```
npm run build
```

then

```
npm start
```

## Event Listener

The application listens for the `GameSettled` event on from gamba. When this event occurs, it formats the event data and sends a notification to the configured Telegram chat. The notification includes details such as user, wager, payout, multiplier, and metadata.
