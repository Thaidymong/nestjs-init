import { UserInfo } from 'src/user-info/entities/user-info.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  userInfoId: number;

  // @OneToOne(() => UserInfo)
  // @JoinColumn()
  // userInfo: UserInfo;
}
