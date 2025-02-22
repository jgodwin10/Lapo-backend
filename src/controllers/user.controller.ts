import { NextFunction, Request, Response } from "express";
import { UserQuery } from "../query";
import { randomUUID } from "crypto";
import { BadRequestError, NotFoundError } from "../utils/error";
import bcrypt from "bcryptjs";

export default class UserController {
	static async signup(req: Request, res: Response, _next: NextFunction) {
		/**
		 * Signup flow should require some form of verification,
		 * The email should be checked to know if it exist
		 */
		const { firstname, lastname, email, password, phone, branch, level, role } = req.body;

		try {
			const emailExist = await UserQuery.findUserByEmail(email);

			if (emailExist) {
				throw new BadRequestError("User with this email exist already");
			}

			const newUser = await UserQuery.create({
				id: randomUUID(),
				firstname,
				lastname,
				email,
				role,
				password,
				phone,
				branch,
				level,
			});

			res.status(201).send({
				status: "success",
				message: "Signup successful",
				data: { user: newUser },
			});
		} catch (err) {
			throw err;
		}
	}

	static async login(req: Request, res: Response, _next: NextFunction) {
		/**
		 * Login flow should require some form of verification (Password and Email),
		 *
		 */
		const { email, password } = req.body;

		try {
			const emailExist = await UserQuery.findUserByEmail(email);

			if (!emailExist) {
				throw new NotFoundError("Invalid credentials");
			}

			const isMatch = await bcrypt.compare(password, emailExist.password);

			if (!isMatch) {
				throw new NotFoundError("Invalid credentials");
			}

			res.status(200).send({
				status: "success",
				message: "Login Successful",
				data: { user: emailExist },
			});
		} catch (err) {
			throw err;
		}
	}

	static async getAllUsers(req: Request, res: Response, _next: NextFunction) {
		const allUsers = await UserQuery.findAll();

		res.status(200).send({
			status: "success",
			message: "All Users retrieve successfully",
			data: allUsers,
		});
	}
}
