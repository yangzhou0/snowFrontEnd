import React from 'react'
import './css/commentBoxComponent.scss'

export default function CommentForm({handleAddComment}) {
  const addNewComment = (e)=>{
    e.preventDefault();   
    let new_comment = {
      body:document.getElementById(`newComment`).value,
      author:document.getElementById(`author`).value
    } 
    handleAddComment(new_comment);
  }
  return (
    <form className="comment-form" onSubmit={(e)=>{addNewComment(e)}}>
        <div className="comment-form-fields">
          <input id = 'author' placeholder="Name" required ></input><br />
          <textarea id = 'newComment' placeholder="Comment" rows="4" required ></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">Post Comment</button>
        </div>
    </form>
  )
}
