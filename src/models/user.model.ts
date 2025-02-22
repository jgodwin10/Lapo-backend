import bcrypt from "bcryptjs";
import { BeforeCreate, BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";

export enum UserGender {
	MALE = "MALE",
	FEMALE = "FEMALE",
}

@Table({
	timestamps: true,
})
    
export class User extends Model<User | IUser> {
	@IsUUID(4)
	@PrimaryKey
	@Column({ type: DataType.UUID, allowNull: false })
	declare id: string;

	@Column({ type: DataType.STRING, allowNull: false })
	declare firstname: string;

	@Column({ type: DataType.STRING, allowNull: false })
	declare lastname: string;

	@Column({ type: DataType.STRING, allowNull: false, unique: true })
	declare email: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare password: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare profilePicture?: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare address?: string;

	@Column({ type: DataType.INTEGER, allowNull: true })
	declare age?: number;

	@Column({ type: DataType.STRING, allowNull: true })
	declare phone?: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare role?: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare branch?: string;

	@Column({ type: DataType.STRING, allowNull: true })
	declare level?: string;

	@Column({
		type: DataType.STRING,
		values: Object.values(UserGender),
		allowNull: true,
	})
	declare gender?: UserGender;

	@BeforeCreate
	static async hashPassword(instance: User) {
		if (instance.password) {
			const saltRounds = 10;
			instance.password = await bcrypt.hash(instance.password, saltRounds);
		}
		instance.email = instance.email.toLowerCase();
	}
}

export interface IUser {
	id: string;
	firstname: string;
	lastname: string;
	email: string;
	profilePicture?: string;
	age?: number;
	phone?: string;
	gender?: UserGender;
	role?: string;
	level?: string;
	branch?: string;
	password: string;
}

export default User;
