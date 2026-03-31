import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, role, emailsPerWeek } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "waitlist.json");

    // Ensure data directory exists
    try {
      await fs.access(dataDir);
    } catch {
      await fs.mkdir(dataDir, { recursive: true });
    }

    let existingData = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch {
      // File doesn't exist or is empty
    }

    const newEntry = {
      id: Date.now().toString(),
      email,
      role: role || "N/A",
      emailsPerWeek: emailsPerWeek || "N/A",
      createdAt: new Date().toISOString(),
    };

    existingData.push(newEntry);

    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ success: true, message: "Added to waitlist" }, { status: 200 });
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 });
  }
}
