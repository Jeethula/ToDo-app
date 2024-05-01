import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import {migrate} from "drizzle-orm/neon-http/migrator"

const DATABASE_URL = "postgresql://sample_owner:KqUaJp6WYvH9@ep-tight-firefly-a5h8flpg.us-east-2.aws.neon.tech/first?sslmode=require"

const sql = neon(DATABASE_URL);
 const db = drizzle(sql,{logger:true});

const main = async () => {
    try{
        await migrate(db,{
            migrationsFolder:"drizzle"
        })
        console.log("Migration successful")
    }catch(e){
        console.log(e)
        process.exit(1)
    }
}

main()
