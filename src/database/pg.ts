import path from "path";
import { glob } from "glob";
import { Sequelize } from "sequelize-typescript";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

// Dynamically load model files
const modelPaths = glob.sync(path.resolve(__dirname, "..", "models", "**/*.model.@(t|j)s"));

let Database: Sequelize;

/**
 * Connects to the PostgreSQL database using Sequelize.
 * Loads models dynamically and syncs with the database.
 * @param dbUrl - The PostgreSQL database connection URL.
 */
async function connectToPostgresDatabase(dbUrl: string): Promise<void> {
	try {
		Database = new Sequelize(dbUrl, {
			logging: false,
			pool: {
				max: 5,
				min: 0,
				idle: 10000,
			},
		});

		// console.log(modelPaths);

		await Database.authenticate();
		console.log("✅ Successfully connected to PostgreSQL database!");

		// Import model classes dynamically
		const modelClasses = await Promise.all(
			modelPaths.map(async (filePath) => {
				const model = await import(filePath);
				return model.default || Object.values(model)[0];
			})
		);

		// Register models with Sequelize
		Database.addModels(modelClasses);

		await Database.sync({ alter: true });
		console.log("🔄 Database synchronized!");
	} catch (error) {
		console.error("❌ Failed to connect to PostgreSQL:", error);
	}
}

export { Database, Sequelize, connectToPostgresDatabase };
