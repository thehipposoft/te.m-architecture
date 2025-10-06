import { NextResponse } from "next/server"

export async function GET() {
  const token = process.env.INSTAGRAM_TOKEN

  if (!token) {
    return NextResponse.json(
      { error: "Missing INSTAGRAM_TOKEN in environment" },
      { status: 500 }
    )
  }

  const url = new URL("https://graph.instagram.com/refresh_access_token")
  url.searchParams.set("grant_type", "ig_refresh_token")
  url.searchParams.set("access_token", token)

  try {
    const res = await fetch(url.toString())
    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json({ error: data }, { status: res.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}
