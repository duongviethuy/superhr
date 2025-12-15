import { hashPassword } from "@/lib/password";
import { PrismaClient } from "@/generated/prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { user, password, role, fullName, teamID } = body;
    } catch {}
}
