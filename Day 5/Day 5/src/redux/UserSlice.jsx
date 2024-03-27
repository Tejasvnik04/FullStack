import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isAuthenticated:false,
    token:'',
    role:'',
    username:' ',
    password:' '


}
const UserSlice=createSlice(
    {
        name:'auth',
        initialState,
        reducers:
        {
            setAuthenticated:(state, action)=>
            {
                state.isAuthenticated=action.payload;
            },
            setToken:(state,action)=>
            {
                state.token=action.payload;
            },
            setRole:(state,action)=>
            {
                state.role=action.payload;
            },
            setUserName:(state,action)=>{
                state.username=action.payload;
            },
            setPassword:(state,action)=>{
                state.password=action.payload;
            }


        }
    }
    
    )
    export const{setAuthenticated,setToken,setRole,setUserName}=UserSlice.actions;
    export default UserSlice.reducer;