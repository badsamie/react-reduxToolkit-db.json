import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuthUser } from "../../helpers/functions";
import { createComment } from "../../store/comments/commentsActions";

const CommentCreate = ({ product }) => {
  const [comment, setComment] = useState({
    commentContent: "",
    rating: "",
  });
  const dispatch = useDispatch();
  const addComment = () => {
    if (
      !comment.commentContent.trim() ||
      comment.rating <= 0 ||
      comment.rating > 10
    )
      return alert("change values");

    const commentObj = {
      id: Date.now(),
      body: comment.commentContent,
      rating: comment.rating,
      user: getAuthUser(),
    };
    dispatch(createComment({ productObj: product, commentObj }));
    setComment({
      commentContent: "",
      rating: "",
    });
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) =>
          setComment({ ...comment, commentContent: e.target.value })
        }
        value={comment.commentContent}
        placeholder="enter comment soska"
      />
      <input
        type="number"
        onChange={(e) => setComment({ ...comment, rating: +e.target.value })}
        value={comment.rating}
        placeholder="enter rating soska"
      />
      <button
        onClick={() => {
          addComment();
        }}
      >
        send
      </button>
    </>
  );
};

export default CommentCreate;
