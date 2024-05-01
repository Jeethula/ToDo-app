import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import  * as schema from "./schema"

const DATABASE_URL = "postgresql://sample_owner:KqUaJp6WYvH9@ep-tight-firefly-a5h8flpg.us-east-2.aws.neon.tech/first?sslmode=require"

const client=neon(DATABASE_URL);
export const db = drizzle(client, {schema,logger:true});