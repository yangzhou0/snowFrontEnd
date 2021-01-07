import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { fetchResortByName} from '../api/ResortAPI';
import { likeComment,editComment, deleteComment,addComment} from '../api/CommentAPI';
import CommentBox from '../components/CommentBox'
import Weather from '../components/Weather'
import './css/resortPage.css'

export default function ResortPage(props){
  const [resort, setResort] = useState(Object());
  let resortName = props.match.params.resortName
  useEffect(()=>{
    fetchResortByName(resortName).then(resort => setResort(resort))
  },[])
  // [] as the second argument will only call useEffect once when component is rendered
  // for the first time, anytime after that this useEffect will not be called. (this is usually used when this particular effect does not depend on any props or state) => having [] is mimicing just having ComponentDidMount but not ComponeentDidUpdate(because there is none to update)
  // in this case, a change in state will  trigger re-render but a useeffect will not run since nothing to watch
  // if x is in the array, and if x chagnes between each render, then useEffect will run
  
  const handleLikeComment = (commentID)=>{
    likeComment(commentID).then(()=>fetchResortByName(resortName)).then(resort => setResort(resort))
  }

  const handleUpdateComment = (commentObject) =>{
    editComment(commentObject).then(()=>fetchResortByName(resortName)).then(resort => setResort(resort))
  }
  
  const handleDeleteComment = (commentID) => {
    deleteComment(commentID).then(()=>fetchResortByName(resortName)).then(resort => setResort(resort))
  }

  const handleAddComment = (commentObject) => {
    commentObject.resort = resort.id
    addComment(commentObject).then(()=>fetchResortByName(resortName)).then(resort => setResort(resort))
  }

  return (
    <div>
      <Weather latitude = {resort.latitude} longitude = {resort.longitude} />
      <CommentBox comments={resort.comments} handleLikeComment={handleLikeComment} handleUpdateComment={handleUpdateComment} handleDeleteComment={handleDeleteComment} handleAddComment={handleAddComment}/>
    </div>
  )
}
