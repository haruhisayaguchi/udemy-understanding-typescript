import express, { type NextFunction, type Request, type Response } from "express";
import todoRoutes from "./routes/todo.ts";

const app = express();

app.use(express.json());

app.use(todoRoutes);

app.use((
	_: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.status(500).json({ message: "An error occured!" })
})

app.listen(3000);