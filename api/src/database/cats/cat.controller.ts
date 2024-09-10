import { Controller, Delete, Get, Param, Post, } from '@nestjs/common';
import { CatsService } from './cat.service';

@Controller('Cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getCats() {
    return this.CatsService.getAllCats();
  }

  @Post(':id')
  async createCat(@Param('id') id: string) {
    return this.CatsService.createCat(id);
  }

  @Delete(':id')
  async deleteCat(@Param('id') id: string) {
    this.CatsService.deleteCat(id);
  }
}