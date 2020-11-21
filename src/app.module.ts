import { ConfigModule } from '@nestjs/config';
import { CharacterModule } from './characters/character.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CharacterModule],
})
export class AppModule {}
