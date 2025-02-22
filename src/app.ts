import "express-async-errors";
import express, { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import routeHandler from "./routes";
import { errorHandler } from "./middlewares/error-handler";

const app: Application = express();

function initializeMiddlewares(app: Application): void {
	app.use(helmet());

	app.use(cors());
	app.use(express.json({ limit: "50mb" }));
}

function initializeRouteHandlers(app: Application): void {
	app.get("/", (_req: Request, res: Response, _next: NextFunction) => {
		res.status(200).send({
			status: "success",
			message: "Welcome to LAPO API",
		});
	});

	app.use("/api/v1", routeHandler);

	app.all("*", (_req: Request, res: Response, _next: NextFunction) => {
		res.status(404).send({
			status: "error",
			message: "Route not found",
		});
	});

	return;
}

function initializeExpressServer(): Application {
	initializeMiddlewares(app);
	initializeRouteHandlers(app);

	return app;
}

export { initializeExpressServer };

export default app;
