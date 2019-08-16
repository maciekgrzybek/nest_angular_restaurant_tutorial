import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ValidationPipe } from '../common/validation.pipe';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<string[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createItemDto: CreateItemDto) {
    this.itemsService.create(createItemDto);
  }
}
