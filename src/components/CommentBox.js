import React,{useState, useEffect} from 'react'
import Comment from './Comment'
import './css/commentBoxComponent.scss'
import CommentForm from './CommentForm'
import { ListGroup, ListGroupItem,Button } from 'reactstrap';

export default function CommentBox({comments,handleLikeComment,handleUpdateComment,handleDeleteComment,handleAddComment}) {
  const [showComments,setShowComments] = useState(false)
  let buttonText = 'Show Comments';
  const getComments = ()=>{
    return <div>
      {comments && comments.sort((a,b)=>{return b.likes - a.likes}).map((comment) => (
          <Comment comment = {comment} handleLikeComment={handleLikeComment} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} />
      ))}
    </div>
  }

  const commentNodes = getComments();

  if (showComments) {
    buttonText = 'Hide Comments';
  }
  const getCommentsTitle = (commentCount) => {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
  
  return(
    <div className="comment-box">
        <h2>Join the Discussion!</h2>
        <CommentForm handleAddComment={handleAddComment}/>
        <button id="comment-reveal" onClick={()=>{setShowComments(!showComments)}}>
          {buttonText}
        </button>
        <h3>Comments</h3>
        {comments && 
        <h4 className="comment-count">
          {getCommentsTitle(comments.length)}
        </h4>}
        {showComments && commentNodes}
    </div>  
  )
  // return (
  //   <div>
  //     <h2>comments:</h2>
  //     <ListGroup>
  //       {comments && comments.sort((a,b)=>{return b.likes - a.likes}).map((comment) => (
  //         <ListGroupItem>
  //           <Comment comment = {comment} handleLikeComment={handleLikeComment} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} handleAddComment={handleAddComment}/>
  //         </ListGroupItem>
  //       ))}
  //     </ListGroup>
  //     <div>
  //       <textarea id = {`newComment`}></textarea>  
  //       <Button onClick = {()=>{handleAddComment({body:document.getElementById(`newComment`).value})}}>Add Comment</Button>
  //     </div>
  //   </div>
  // )
}