export interface GameSettledEvent {
    [x: string]: any;
    user: string;
    pool: string;
    tokenMint: string;
    creator: string;
    creatorFee: bigint;
    gambaFee: bigint;
    poolFee: bigint;
    jackpotFee: bigint;
    underlyingUsed: bigint;
    bonusUsed: bigint;
    wager: bigint;
    payout: bigint;
    multiplierBps: number;
    payoutFromBonusPool: bigint;
    payoutFromNormalPool: bigint;
    jackpotProbabilityUbps: bigint;
    jackpotResult: bigint;
    nonce: bigint;
    clientSeed: string;
    resultIndex: bigint;
    bet: number[];
    jackpotPayoutToUser: bigint;
    poolLiquidity: bigint;
    rngSeed: string;
    nextRngSeedHashed: string;
    metadata: string;
  }