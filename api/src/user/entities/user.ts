import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({type: 'timestamp', name: 'email_verified_at'})
  emailVerifiedAt: Date;

  @Column()
  password: string;

  @Column({type: 'varchar', length: 100, name: 'remember_token'})
  rememberToken: string;

  @CreateDateColumn({name: 'created_at', type: 'timestamp'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
  updatedAt: Date;
}
