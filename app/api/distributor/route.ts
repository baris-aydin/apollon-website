import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()

  console.log("Distributor form submission:", body)

  return NextResponse.json({
    success: true,
    message: "Distributor form received.",
  })
}
