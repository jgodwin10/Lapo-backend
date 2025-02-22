import dotenv from "dotenv";
import _path from "path";
import { DB_CONFIG, PORT } from "./config";
import { initializeExpressServer } from "./app";
import initializeDatabaseConnection from "./database";

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;

const startServer = async (): Promise<void> => {
	console.info("Starting server");
	await initializeDatabaseConnection(DB_CONFIG);
	const app = initializeExpressServer();

	app.listen(PORT, "0.0.0.0", () => {
		console.info(`Server is running on port ${PORT} in ${NODE_ENV} mode`);
	});
};

startServer();
