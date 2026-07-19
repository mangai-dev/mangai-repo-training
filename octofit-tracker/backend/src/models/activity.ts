import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IActivity extends Document {
  type: string;
  durationMinutes: number;
  calories: number;
  userName: string;
}

const activitySchema = new Schema<IActivity>({
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  calories: { type: Number, required: true },
  userName: { type: String, required: true },
});

const Activity: Model<IActivity> = mongoose.model<IActivity>('Activity', activitySchema);

export default Activity;
