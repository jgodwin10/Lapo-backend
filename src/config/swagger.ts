import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application, Express } from "express";
import { PORT } from ".";

// Define Swagger options
const options: swaggerJsdoc.Options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "API Documentation",
			version: "1.0.0",
			description: "API documentation for your Node.js + TypeScript project",
		},
		servers: [
			{
				url: `http://localhost:${PORT}`, // Change to your actual server URL
				description: "Development server",
			},
		],
	},
	apis: ["./src/routes/*.ts"], // Path to your API route files with JSDoc comments
};

// Initialize Swagger Docs
const swaggerSpec = swaggerJsdoc(options);

// Function to setup Swagger in Express
export function setupSwagger(app: Application) {
	app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
	console.log(`✅ Swagger Docs available at: http://localhost:${PORT}/`);
}
