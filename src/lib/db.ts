import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  console.warn("DATABASE_URL is not set. Check your environment variables.");
}

const sql = neon(process.env.DATABASE_URL || "");
export const db = drizzle(sql);

