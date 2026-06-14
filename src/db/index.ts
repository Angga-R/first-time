import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

const poolConnection = mysql.createPool(
  process.env.DATABASE_URL || 'mysql://root:root@localhost:3306/first_time_db'
);

export const db = drizzle({ client: poolConnection, schema, mode: 'default' });
export type DbClient = typeof db;
