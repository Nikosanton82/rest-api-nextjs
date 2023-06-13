import { NextResponse } from "next/server";

const url = "https://reqres.in/api/users";

// get
export async function GET() {
  const response = await fetch(url);
  const data = await response.json();
  return NextResponse.json({ data });
}

// post
export async function POST(req: Request) {
  const body = await req.json(); //body

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();

  return NextResponse.json({ response });
}

//update
export async function PUT(req: Request) {
  const body = await req.json(); //body
  const res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();

  return NextResponse.json({ response });
}

//delete
