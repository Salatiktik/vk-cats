
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import Cat from '../entity/cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat) private catsRep: Repository<Cat>,
  ) {}

  getAllCats() {
    return this.catsRep.find();
  }

  async createCat(id: string) {
    const newCat = this.catsRep.create({photoId:id});
    await this.catsRep.save(newCat);

    return newCat;
  }

  async deleteCat(id: string) {
    const deletedCat = await this.catsRep.delete({photoId: In([id])});
    if (!deletedCat.affected) {
      throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
    }
  }
}