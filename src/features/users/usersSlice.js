import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0',name:"james"},
    {id:'1',name:"john"},
    {id:'2',name:"darvin"},
    {id:'3',name:"rocky"},
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers=state=> state.users

export default usersSlice.reducer