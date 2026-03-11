import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, attending, plusOne } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (typeof attending !== "boolean") {
      return NextResponse.json({ error: "Attendance response is required" }, { status: 400 });
    }

    if (typeof plusOne !== "boolean") {
      return NextResponse.json({ error: "Plus one response is required" }, { status: 400 });
    }

    const rsvp = await prisma.rSVP.upsert({
      where: { name: name.trim() },
      update: { attending, plusOne },
      create: { name: name.trim(), attending, plusOne },
    });

    return NextResponse.json({ success: true, rsvp }, { status: 201 });
  } catch (error) {
    console.error("RSVP submission error:", error);
    return NextResponse.json(
      { error: "Failed to save RSVP. Please try again." },
      { status: 500 }
    );
  }
}
