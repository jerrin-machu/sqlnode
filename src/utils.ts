import { Client } from "pg";

export async function getClient() {
  const client = new Client({
    host: "localhost", // PostgreSQL server address
    port: 5432, // Default PostgreSQL port
    user: "postgres", // PostgreSQL username
    password: "root@123", // PostgreSQL password
    database: "testdb", // PostgreSQL database name
  });

  await client.connect();
  return client;
}
