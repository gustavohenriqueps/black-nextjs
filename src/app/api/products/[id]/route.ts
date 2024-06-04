import { NextResponse } from "next/server";
import products from "../../../../../database.json";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = +params.id;

  const product = products.find((prod) => prod.id === id);

  return NextResponse.json(product);
}
