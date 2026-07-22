import { NextResponse } from "next/server";
import { getArtigosParaExibir } from "@/services/newsApi";

export async function GET() {
  const artigos = await getArtigosParaExibir();
  return NextResponse.json(artigos);
}
