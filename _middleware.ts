import { promises as fs } from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const dbPath = path.join(process.cwd(), "database.db");
    const tmpDbPath = "/tmp/database.db";

    try {
        await fs.copyFile(dbPath, tmpDbPath);
        console.log("Database file copied to /tmp");
    } catch (error) {
        console.error("Error copying database file:", error);
    }

    return NextResponse.next();
}
