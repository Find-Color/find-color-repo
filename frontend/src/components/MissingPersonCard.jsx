import Button from "./Button";

export default function MissingPersonCard() {
  return (
    <>
      <img src="" alt="" />

      <h1>`Name: `</h1>
      <h2>`Last Seen: `</h2>
      <h3>`Status: Missing`</h3>
      <Button upVote="Up Vote" />
      <Button comment="Comment" />
    </>
  );
}
