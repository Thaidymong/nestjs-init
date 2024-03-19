import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user-info' })
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;

  @Column({ unique: true })
  dob: string;

  @Column()
  education: string;

  @Column()
  phonenumber: string;
  
  // @OneToOne(() => User, (user) => user.userInfo)
  // user: User;
}
