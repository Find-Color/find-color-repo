import { Typography } from "@material-tailwind/react";
export default function CommentCard({ comment_text, username }) {
  return (
    <section className="singleComment">
      <Typography variant="h5" className="mx-3 self-center">{username}:</Typography>
      <Typography className="self-center" variant="lead">{comment_text}</Typography>
    </section>
  );
}
