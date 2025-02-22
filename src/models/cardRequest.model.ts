import { Table, Column, Model, DataType, PrimaryKey, Default, IsUUID } from "sequelize-typescript";

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

	@Column({ type: DataType.STRING, allowNull: false })
	declare branchName: string;

	@Column({ type: DataType.STRING, allowNull: false })
	declare initiator: string;

	@Column({ type: DataType.STRING, allowNull: false })
	declare cardType: string;

	@Column({ type: DataType.INTEGER, allowNull: false })
	declare quantity: number;

	@Column({ type: DataType.FLOAT, allowNull: false })
	declare cardCharges: number;

	@Column({ type: DataType.STRING, allowNull: false })
	declare batch: string;

	@Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
	declare dateRequested: Date;

	@Column({
		values: Object.values(Status),
		allowNull: false,
		defaultValue: "Pending",
	})
	declare status: string;
}

export interface ICardRequest {
	id: string;
	branchName: string;
	initiator: string;
	cardType: string;
	quantity: number;
	cardCharges: number;
	status: Status;
	batch: string;
	dateRequested: Date;
}
