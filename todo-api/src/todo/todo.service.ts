import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITodo } from './interfaces/todo';
import { TodoDTO } from './dto/todo';
@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<ITodo>) {}

  async findAll() {
    return await this.todoModel.find({}).exec();
  }

  async findOne(id: string) {
    return await this.todoModel.findOne({ _id: id }).exec();
  }

  async create(payload: TodoDTO) {
    const todo = new this.todoModel(payload);
    return await todo.save();
  }
}
