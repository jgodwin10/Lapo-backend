import { connectToPostgresDatabase, Database, Sequelize } from "./pg";

async function initializeDatabaseConnection(dbUrl: string): Promise<void> {
	await connectToPostgresDatabase(dbUrl);

	console.info("Connection to databases successful");
}

export { Database, Sequelize };
export default initializeDatabaseConnection;
