import prisma from "@/lib/prisma";

export async function GET() {
  try {
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
  }
}
