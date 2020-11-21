import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService): Promise<typeof mongoose> =>
      await mongoose.connect(
        `mongodb+srv://
        ${configService.get('DB_USERNAME')}:
        ${configService.get('DB_PASSWORD')}@
        ${configService.get('DB_HOST')}/
        ${configService.get('DB_NAME')}`,
      ),
  },
];
