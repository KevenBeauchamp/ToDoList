import axios from "axios";


export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";
export const EDIT_TASK_FAIT = "EDIT_TASK_FAIT";


export const getPosts = () =>{
    return(dispatch) => {
        return axios.get("http://localhost:8000/api/task/").then((res)=>{
            dispatch({ type: GET_POSTS, payload: res.data });
        })
    }
}
export const addTask = (data) => {
    return (dispatch) => {
      return axios.post("http://localhost:8000/api/task/", data).then((res) => {
        dispatch({ type: ADD_POST, payload: data });
      });
    };
  };
  export const editTask = (data) => {
    return (dispatch) => {
      return axios
        .put(`http://localhost:8000/api/task/${data.id}`, data)
        .then((res) => {
          dispatch({ type: EDIT_POST, payload: data });
        });
    };
  };
  export const deleteTask = (taskId) => {
    return (dispatch) => {
      return axios.delete(`http://localhost:8000/api/task/${taskId}`).then((res) => {
        dispatch({ type: DELETE_POST, payload: taskId });
      });
    };
  };
  export const editTaskToFait = (data) => {
    return (dispatch) => {
      return axios
        .put(`http://localhost:8000/api/task/${data.id}`, data)
        .then((res) => {
          dispatch({ type: EDIT_TASK_FAIT, payload: data });
        });
    };
  };