import { Request, Response } from 'express';
import { TodoList } from "models"

export default {
  list: async (req: Request, res: Response) => {
    const list = await TodoList.find({});
    res.json(list);
  },
  get: (req: Request, res: Response) => {
    res.send("<h1>One Get</h1>")
  },
  post: () => {},
  put: () => {},
  delete: () => {},
}