import { Schema, Document, model } from "mongoose";
import { IUser } from './User';

type TodoListPriorities = "LOW" | "MEDIUM" | "HIGH";

export interface ITodoList extends Document {
  _id: string;
  user: IUser;
  checked: boolean;
  title: string;
  priority: TodoListPriorities;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

const todoListSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    checked: { type: Boolean, default: false, required: true },
    title: { type: String, required: true },
    priority: { type: String, enum: ["LOW", "MEDIUM", "HIGH"], default: "LOW", required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
    deletedAt: { type: Date }
  },
  { collection: "todolist" }
);

const TodoList = model<ITodoList>("Todolist", todoListSchema);

export default TodoList;
