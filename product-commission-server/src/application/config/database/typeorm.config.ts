import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvManager } from '../../config/env/env.manager';

class TypeormConfigManager extends EnvManager {
  constructor() { super(process.env) }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getEnvValue('DATABASE_HOST'),
      port: parseInt(this.getEnvValue('DATABASE_PORT')),
      username: this.getEnvValue('DATABASE_USERNAME'),
      password: this.getEnvValue('DATABASE_PASSWORD'),
      database: this.getEnvValue('DATABASE_NAME'),
      synchronize: this.getEnvValue('TYPEORM_DATABASE_SYNC') == 'true',
      logging: false,
      entities: ['dist/**/*.entity.{ts,js}'],
      autoLoadEntities: true,
      ssl: this.isProduction(),
    };
  }

}

export const typeormConfigManager = new TypeormConfigManager();