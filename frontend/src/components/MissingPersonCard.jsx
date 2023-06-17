import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MissingPersonCard({ name, location, status, post_id }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/post/${post_id}`);
  }
  return (
    <div className="ui card">
      <img src="" alt="" />

      <h3>Name: {name}</h3>
      <h4>Last Seen: {location}</h4>
      <h5>Status: {status}</h5>
      <h4 className="seeMoreButton" onClick={handleClick}>
        See More
      </h4>
      <Button upVote="Up Vote" />
      <Button comment="Comment" />
    </div>
  );
}
