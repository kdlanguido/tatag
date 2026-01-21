import Redis from "ioredis";

let redis: Redis | null = null;

if (!redis) {
  redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
}

export { redis };
