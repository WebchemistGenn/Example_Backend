import { Schema, Document, model } from "mongoose";


export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

const userSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    deletedAt: { type: Date }
  },
  { collection: "user" }
);

const User = model<IUser>("User", userSchema);

export default User;
