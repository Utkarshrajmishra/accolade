import prisma from "@/lib/prisma";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const projectId = req.nextUrl.searchParams.get("projectId");
    if (!projectId) {
      return new Response(JSON.stringify("ProjectId is required"), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const feedbacks = await prisma.feedback.findMany({
      where: {
        projectId: {
          equals: projectId,
        },
      },
    });

    return new Response(JSON.stringify(feedbacks), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify("Internal Server Error"), {
      status: 500,
      headers: { "Content-Type": "applications/json" },
    });
  }
}
