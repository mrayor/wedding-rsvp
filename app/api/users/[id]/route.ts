import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (user) {
      return Response.json(
        { user, message: "User fetched", success: true },
        { status: 200 },
      );
    } else {
      return Response.json(
        { error: "User not found", user: {} },
        { status: 404 },
      );
    }
  } catch (error) {
    return Response.json(
      { user: {}, message: "Unable to fetch user", success: false },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  const body = await req.json();
  const { id } = params;

  try {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      return Response.json("User not found", { status: 404 });
    }

    if (body.status === "active" && user.status !== "pending") {
      return Response.json("User already scanned access code", { status: 403 });
    }

    await prisma.user.update({
      where: { id },
      data: { status: body.status },
    });

    return Response.json("User Updated", { status: 200 });
  } catch (error) {
    return Response.json("Unable to update user", { status: 500 });
  }
}