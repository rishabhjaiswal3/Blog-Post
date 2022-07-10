import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import {sub} from 'date-fns'
import React from 'react'

const PostAuthor = ({userId}) => {
  const users = useSelector(selectAllUsers)
  console.log("user id which come is ",userId,"my users are",users)
  const author = users.find(user => user.id === userId)
//   let author = undefined
//   users.forEach(user => {
//    console.log("compare ",user.id," to ",userId)
//   });
  return (
    <span>by {author ? author.name:'unknown author'}</span>
  )
}

export default PostAuthor;