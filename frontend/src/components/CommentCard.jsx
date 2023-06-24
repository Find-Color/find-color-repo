import { Typography } from "@material-tailwind/react";
export default function CommentCard({ comment_text, username }) {
  return (
    <section>
      <Typography variant="h3">{username}</Typography>
      <Typography variant="lead">{comment_text}</Typography>
    </section>
  );
}
