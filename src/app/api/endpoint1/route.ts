import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");
  if (slug) {
    const product = await prisma.product.findUnique({ where: { slug }});
    return NextResponse.json(product);
  }
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" }});
  return NextResponse.json(products);
}