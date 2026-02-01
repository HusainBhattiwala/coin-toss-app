export type CoinSide = 'heads' | 'tails';

export interface FlipResult {
  finalRotation: number;
  result: CoinSide;
}
