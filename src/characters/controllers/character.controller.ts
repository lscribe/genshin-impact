import { CreateCharacterDto } from './../dto/create-character.dto';
import { Character } from './../interfaces/character';
import { CharacterService } from './../services/character.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get('/')
  get(): Promise<Character[]> {
    return this.characterService.get();
  }

  @Post('/')
  create(@Body() createCharacterDto: CreateCharacterDto): Promise<Character> {
    return this.characterService.create(createCharacterDto);
  }
}
