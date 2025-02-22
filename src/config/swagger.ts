import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";
import { PORT } from ".";

// Define Swagger options
const options: swaggerJsdoc.Options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "LAPO API Documentation",
			version: "1.0.0",
			description: "LAPO API documentation for your Node.js + TypeScript project",
		},
		servers: [
			{
				url: `http://localhost:${PORT}`,
				description: "Development server",
			},
		],
	},
	apis: ["./src/routes/*.ts"],
};

// Initialize Swagger Docs
const swaggerSpec = swaggerJsdoc(options);

// Function to setup Swagger in Express
export function setupSwagger(app: Application) {
	app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
	console.log(`✅ Swagger Docs available at: http://localhost:${PORT}/`);
}
