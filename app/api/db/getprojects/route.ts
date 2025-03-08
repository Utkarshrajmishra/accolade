import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("userId");

    if (!id)
      return new Response(JSON.stringify({ error: "User ID is reqiured" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });

    const projects = await prisma.project.findMany({
      where: {
        userId: {
          equals: id,
        },
      },
    });

    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify("Internal Server Error"), {
      status: 500,
      headers: { "Cotent-Type": "application/json" },
    });
  }
}
