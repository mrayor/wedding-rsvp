import { PrismaClient } from "@prisma/client";

import revalidate from "@/app/actions";

const prisma = new PrismaClient();

export async function GET() {
  try {
    revalidate();

    const users = await prisma.user.findMany();

    return Response.json(
      { users, message: "Users fetched", success: true },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { users: [], message: "Unable to fetch users", success: false },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
