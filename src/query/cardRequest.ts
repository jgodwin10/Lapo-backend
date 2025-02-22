import { Transaction as SequelizeTransaction } from "sequelize";
import { IQuery } from "./interface";
import { CardRequest, ICardRequest } from "../models";

class Query implements IQuery<CardRequest> {
	async create(data: ICardRequest, transaction?: SequelizeTransaction): Promise<CardRequest> {
		const cardData = CardRequest.build(data);
		const card = transaction ? await cardData.save({ transaction }) : await cardData.save();
		return card;
	}

	async findAll(): Promise<CardRequest[]> {
		const cards = await CardRequest.findAll();
		return cards;
	}

	async findById(id: string): Promise<CardRequest | null> {
		const card = await CardRequest.findByPk(id);
		return card;
	}

	async updateInplace(instance: CardRequest, data: Record<string, any>): Promise<CardRequest> {
		const updatedCardRequest = await instance.update(data);
		return updatedCardRequest;
	}
}

export const CardRequestQuery = new Query();
export default CardRequestQuery;
