import { NextResponse } from "next/server";

const url = "https://reqres.in/api/users";

//  get
export async function GET(req: Request, context: any) {
  const id = context.params.id;
  const response = await fetch(`${url}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return NextResponse.json({ data });
}

// put
export async function PUT(req: Request, context: any) {
  const id = context.params.id;
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = await response.json();

  return NextResponse.json({ res });
}

// delete
export async function DELETE(req: Request, context: any) {
  const id = context.params.id;
  await fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return NextResponse.json({ message: "deleted" });
}
