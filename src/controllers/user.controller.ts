import { Request, Response } from "express";
import { UserQuery } from "../query";
import { randomUUID } from "crypto";

export default class UserController {
	static async signup(req: Request, res: Response) {
		/**
		 * Signup flow should require some form of verification,
		 * But for the scope of this project, we will just assume that the user has access to the email
		 */

		const { firstname, lastname, email, password, phone, branch, level, role } = req.body;

		const emailExist = await UserQuery.findUserByEmail(email);

		if (emailExist) {
			throw new Error("User with this email already exist");
		}

		try {
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
			res.status(500).send({ status: "error", message: err.message });
		}
	}
}
