import { Transaction } from "sequelize";
import { Model } from "sequelize-typescript";

export interface IQuery<T extends Model, U extends Record<string, any> | undefined = undefined> {
	create(data: Record<string, any>, transaction?: Transaction): Promise<T>;
	findAll(ids?: string[]): Promise<T[]>;
	findById(id: string, transaction?: Transaction): Promise<T | null>;
	updateInplace?(instance: T, data: U, transaction?: Transaction): Promise<T>;
}
