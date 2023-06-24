import { Typography } from "@material-tailwind/react";
export default function CommentCard({ comment_text, username, key }) {
  return (
    <section>
      <Typography variant="h3">{username}</Typography>
      <Typography variant="p">{comment_text}</Typography>
    </section>
  );
}
