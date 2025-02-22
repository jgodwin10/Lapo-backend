import { Transaction as SequelizeTransaction } from "sequelize";
import { IUser, User } from "../models";
import { IQuery } from "./interface";

class Query implements IQuery<User> {
	async create(data: IUser, transaction?: SequelizeTransaction): Promise<User> {
		const userData = User.build(data);
		const user = transaction ? await userData.save({ transaction }) : await userData.save();
		return user;
	}

	async findAll(): Promise<User[]> {
		const users = await User.findAll();
		return users;
	}

	async findById(id: string): Promise<User | null> {
		const user = await User.findByPk(id);
		return user;
	}

	async findUserByEmail(email: string): Promise<User | null> {
		const user = await User.findOne({
			where: {
				email,
			},
		});
		return user;
	}
}

export const UserQuery = new Query();
export default UserQuery;
