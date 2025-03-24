import { comments } from "./index+api";

export async function GET(_request: Request, { id }: Record<string, string>) {
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(request: Request, { id }: Record<string, string>) {
  const { text } = await request.json();
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }
  comment.text = text;
  return Response.json(comment);
}

export async function DELETE(request: Request, { id }: Record<string, string>) {
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }
  comments.splice(comments.indexOf(comment), 1);
  return Response.json({ message: "Comment deleted" });
}
