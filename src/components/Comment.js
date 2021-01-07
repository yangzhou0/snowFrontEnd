import React,{useState, useEffect} from 'react'
import { Button } from 'reactstrap';
import './css/commentBoxComponent.scss'
import likeButton from '../assets/icons/likeButton.png'
export default function Comment({comment,handleLikeComment,handleUpdateComment,handleDeleteComment}) {
  const [edit, setEdit] = useState(false);
  return (
    <div className="comment">
      <p className="comment-header">{comment.author}</p>
      {!edit ? 
        <div className="comment-body">
          <span onDoubleClick={()=> setEdit(!edit)}>- {comment.body}</span> 
          <Button className = 'comment-like-button' onClick = {()=>{handleLikeComment(comment.id)}}>
          <img src = {likeButton} alt ='like' />
          </Button>
          <span>{comment.likes}</span>
          </div>
      :
        <div className="comment-body">
          <textarea id = {`textarea${comment.id}`}onDoubleClick={()=> setEdit(!edit)}>{comment.body}</textarea> 
          <div className="comment-footer">
            <Button className="comment-footer-update" onClick = {()=>{handleUpdateComment({id:comment.id,body:document.getElementById(`textarea${comment.id}`).value}); setEdit(!edit)}}>Update</Button>
            <span> </span>
            <Button className="comment-footer-delete" onClick = {()=>{handleDeleteComment(comment.id);setEdit(!edit)}}>Delete</Button>
          </div>
        </div>
      }
    </div>
  )
}
