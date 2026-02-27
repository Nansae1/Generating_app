import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, content } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content required" },
        { status: 400 },
      );
    }

    const summary =
      content.length > 150 ? content.substring(0, 150) + "..." : content;

    const article = await prisma.article.create({
      data: {
        title,
        content,
        summary,
      },
    });

    return NextResponse.json(article);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
