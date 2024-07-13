// lib/prisma.js
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

const prisma = (globalForPrisma as any).prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production")
    (globalForPrisma as any).prisma = prisma;

export default prisma;
