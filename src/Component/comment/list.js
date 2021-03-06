// import react from "react";
import StarRating from "../../pages/Star";
import { CommentItem } from "./item";
export function CommentList({ comments }) {
  return (
    <ul className="list-group list-group-flush">
      {comments.map((comment, index) => (
        <li className="list-group-item" key={index}>
          <CommentItem {...comment} />
          <StarRating/>
        </li>
      ))}
    </ul>
  );
}
