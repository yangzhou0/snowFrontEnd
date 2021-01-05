const BASE_URL = 'https://snow-backend.herokuapp.com/api/comments';

const fetchCommentByID = async (CommentID) => {
  const response = await fetch(`${BASE_URL}/${CommentID}`);
  const data = await response.json();
  return data;
};

const fetchCommentsByResort = async (resortID) => {
  const response = await fetch(`https://snow-backend.herokuapp.com/api/resorts/${resortID}/comments`);
  const data = await response.json();
  return data;
};

const addComment = (CommentObject) => {
  return fetch(`${BASE_URL}/new`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(CommentObject)
  });
};
const editComment = (CommentObject) => {
  return fetch(`${BASE_URL}/${CommentObject.id}/edit`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(CommentObject)
  });
};

const deleteComment =(CommentID)=>{
  return fetch(`${BASE_URL}/${CommentID}/delete`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  }); 
}

const likeComment =(CommentID)=>{
  return fetch(`${BASE_URL}/${CommentID}/like`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST"
  }); 
}
export {
  fetchCommentByID,
  fetchCommentsByResort,
  addComment,
  deleteComment,
  editComment,
  likeComment
};
