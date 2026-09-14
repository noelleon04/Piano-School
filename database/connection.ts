import "server-only"
import {Pool} from "pg"

const connectionString = process.env.DATABASE_URL;

if (!connectionString){
    throw new Error ("Database_URL is not defined");
}

export const database = new Pool({
    connectionString,
})