import { CreateCharacterDto } from './../dto/create-character.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Character } from '../interfaces/character';

@Injectable()
export class CharacterService {
  constructor(@Inject('CHARACTER_MODEL') private readonly characterModel: Model<Character>) {}

  create(createCharacterDto: CreateCharacterDto): Promise<Character> {
    const character = new this.characterModel(createCharacterDto);
    return character.save();
  }

  get(): Promise<Character[]> {
    return this.characterModel.find().exec();
  }
}
