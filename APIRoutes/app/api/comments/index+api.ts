export const comments = [
  {
    id: 1,
    text: "This is the first comment",
  },
  {
    id: 2,
    text: "This is the second comment",
  },
  {
    id: 3,
    text: "This is the third comment",
  },
];

export async function GET() {
  return Response.json(comments);
}

export async function POST(req: Request) {
  const { text } = await req.json();
  const newComment = { id: comments.length + 1, text };
  comments.push(newComment);
  return Response.json(newComment, { status: 201 });
}
