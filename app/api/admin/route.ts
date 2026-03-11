import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const password = request.headers.get("x-admin-password");

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const rsvps = await prisma.rSVP.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ rsvps });
  } catch (error) {
    console.error("Admin fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch RSVPs" }, { status: 500 });
  }
}
