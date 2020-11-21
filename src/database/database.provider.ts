import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://lucas:xl2UoAyO476QiM8M@lucas-cluster.vwoyi.mongodb.net/genshin-impact?retryWrites=true&w=majority')
      // mongoose.connect(
      //   `mongodb+srv://
      //   ${configService.get('DB_USERNAME')}:
      //   ${configService.get('DB_PASSWORD')}@
      //   ${configService.get('DB_HOST')}/
      //   ${configService.get('DB_NAME')}`,
      // ),
  },
];
