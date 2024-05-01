import {defineConfig} from 'drizzle-kit'
// import {DATABASE_URL} from "./.env"

const DATABASE_URL = "postgresql://sample_owner:KqUaJp6WYvH9@ep-tight-firefly-a5h8flpg.us-east-2.aws.neon.tech/first?sslmode=require"

export default defineConfig({
    schema:"./src/db/schema.ts",
    out:"./src/db/migrations",
    driver:'pg',
    dbCredentials:{
        connectionString:(DATABASE_URL as string)
    },
    verbose:true,
    strict:true
})