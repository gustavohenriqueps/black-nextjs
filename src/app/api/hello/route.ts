import { NextResponse } from "next/server";

export async function GET() {
  const timestamp = new Date();
  return NextResponse.json({ message: "Hello from Next.js!", timestamp });
}
