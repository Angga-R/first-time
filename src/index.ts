import { Elysia } from 'elysia';
import { db } from './db';
import { users } from './db/schema';

const app = new Elysia()
  .get('/', () => 'Hello Elysia!')
  .get('/health', async () => {
    try {
      // Query the database to verify the connection
      const result = await db.select().from(users).limit(1);
      return {
        status: 'ok',
        database: 'connected',
        data: result,
      };
    } catch (error: any) {
      return {
        status: 'error',
        database: 'disconnected',
        message: error.message || String(error),
      };
    }
  })
  .listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
