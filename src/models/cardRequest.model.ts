import { Table, Column, Model, DataType, PrimaryKey, IsUUID } from "sequelize-typescript";

export enum Status {
	PENDING = "Pending",
	PROGRESS = "In Progress",
	READY = "Ready",
	DISPATCHED = "Dispatched",
	ACKNOWLEDGED = "Acknowledged",
}

@Table({
	timestamps: true,
})
export class CardRequest extends Model<CardRequest | ICardRequest> {
	@IsUUID(4)
	@PrimaryKey
	@Column({ type: DataType.UUID, allowNull: false })
	declare id: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare branchName: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare initiator: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare cardType: string;

	@Column({ type: DataType.INTEGER, allowNull: true })
	declare quantity: number;

	@Column({ type: DataType.FLOAT, allowNull: true })
	declare cardCharges: number;

	@Column({ type: DataType.STRING, allowNull: true })
	declare batch: string;

	@Column({ type: DataType.DATE, allowNull: true, defaultValue: DataType.NOW })
	declare dateRequested: Date;

	@Column({
		values: Object.values(Status),
		allowNull: true,
		defaultValue: "Pending",
	})
	declare status?: string;
}

export interface ICardRequest {
	id: string;
	branchName: string;
	initiator: string;
	cardType: string;
	quantity?: number;
	cardCharges?: number;
	status?: Status;
	batch?: string;
	dateRequested: Date;
}
