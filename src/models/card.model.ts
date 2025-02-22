import { Column, DataType, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./user.model";

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

	@ForeignKey(() => User)
	@Column({ type: DataType.UUID, allowNull: true })
	declare UserId: string;

	@Column({ type: DataType.STRING, allowNull: false })
	declare name: string;

	@Column({ type: DataType.STRING, allowNull: false })
	declare binPrefix: string;

	@Column({ type: DataType.STRING, allowNull: false, unique: true })
	declare scheme: string;

	@Column({ type: DataType.DATE, allowNull: true })
	declare expiration: Date;

	@Column({ type: DataType.STRING, allowNull: true })
	declare description?: string;

	@Column({ type: DataType.STRING, allowNull: false, values: Object.values(Currency) })
	declare currency?: string;

	@Column({ type: DataType.STRING, allowNull: false })
	declare branchBlacklist?: string;

	@Column({
		type: DataType.DATE,
		allowNull: false,
		defaultValue: DataType.NOW,
	})
	declare createdAt: Date;
}

export interface ICard {
	id: string;
	name: string;
	binPrefix: string;
	scheme: string;
	expiration: Date;
	description: string;
	currency: Currency;
	branchBlacklist?: string;
	createdAt: Date;
}

export default Card;
