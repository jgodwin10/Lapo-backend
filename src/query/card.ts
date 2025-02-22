import { Transaction as SequelizeTransaction } from "sequelize";
import { IQuery } from "./interface";
import { Card, ICard } from "../models";

class Query implements IQuery<Card> {
	async create(data: ICard, transaction?: SequelizeTransaction): Promise<Card> {
		const cardData = Card.build(data);
		const card = transaction ? await cardData.save({ transaction }) : await cardData.save();
		return card;
	}

	async findAll(): Promise<Card[]> {
		const cards = await Card.findAll();
		return cards;
	}

	async findById(id: string): Promise<Card | null> {
		const card = await Card.findByPk(id);
		return card;
	}
}

export const CardQuery = new Query();
export default CardQuery;
