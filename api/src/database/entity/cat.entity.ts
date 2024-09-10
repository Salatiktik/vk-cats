import { Entity, PrimaryGeneratedColumn , Column} from 'typeorm';

@Entity()
class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public photoId: string;
}

export default Cat;