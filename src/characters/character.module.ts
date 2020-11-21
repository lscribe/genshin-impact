import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { CharacterController } from './controllers/character.controller';
import { CharacterService } from './services/character.service';
import { characterProvider } from './character.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CharacterController],
  providers: [CharacterService, ...characterProvider],
})
export class CharacterModule {}
