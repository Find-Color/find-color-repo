import Button from "./Button";

export default function MissingPersonCard({ name, location, status }) {
  return (
    <div className="ui card">
      <img src="" alt="" />

      <h3>Name: {name}</h3>
      <h4>Last Seen: {location}</h4>
      <h5>Status: {status}</h5>
      <Button upVote="Up Vote" />
      <Button comment="Comment" />
    </div>
  );
}
