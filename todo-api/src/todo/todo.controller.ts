import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TodoDTO } from './dto/todo';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async index() {
    return await this.todoService.findAll();
  }

  @Post()
  async addTodo(@Body() todo: TodoDTO) {
    return await this.todoService.create(todo);
  }

  @Get(':id')
  async getOneTodo(@Param('id') id: string) {
    const todo = await this.todoService.findOne(id);
    if (todo) {
      return todo;
    }
    throw new HttpException('todo not found', HttpStatus.NOT_FOUND);
  }
}
