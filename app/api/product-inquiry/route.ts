import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()

  console.log("Product inquiry submission:", body)

  return NextResponse.json({
    success: true,
    message: "Product inquiry received.",
  })
}
