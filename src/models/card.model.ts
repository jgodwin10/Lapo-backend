import { Column, DataType, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";

export enum Currency {
	NGN = "NGN",
	USD = "USD",
}

@Table({
	timestamps: true,
})
export class Card extends Model<Card | ICard> {
	@IsUUID(4)
	@PrimaryKey
	@Column({ type: DataType.UUID, allowNull: false })
	declare id: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare name: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare binPrefix: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare scheme?: string;

	@Column({ type: DataType.DATE, allowNull: true })
	declare expiration?: Date;

	@Column({ type: DataType.STRING, allowNull: true })
	declare description?: string;

	@Column({ type: DataType.STRING, allowNull: true, values: Object.values(Currency) })
	declare currency?: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare branchBlacklist?: string;
}

export interface ICard {
	id: string;
	name: string;
	binPrefix: string;
	scheme: string;
	expiration?: Date;
	description?: string;
	currency?: Currency;
	branchBlacklist?: string;
}

export default Card;
