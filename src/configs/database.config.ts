import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface'

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['**/*.entity.ts'],
  migrationsTableName: 'migration',
  migrations: ['**/*.migration.ts'],
  cli: {
    migrationsDir: 'src/migration',
  },
}
