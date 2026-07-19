import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILeaderboard extends Document {
  name: string;
  score: number;
  streak: number;
}

const leaderboardSchema = new Schema<ILeaderboard>({
  name: { type: String, required: true },
  score: { type: Number, required: true },
  streak: { type: Number, default: 0 },
});

const Leaderboard: Model<ILeaderboard> = mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);

export default Leaderboard;
