import {
    GET_POSTS,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    EDIT_TASK_FAIT,
  } from "../action/task.action";
  
  const initialState = {};
  
  export default function taskReducer(state = initialState, action) {
    switch (action.type) {
      case GET_POSTS:
        return action.payload;
      case ADD_POST:
          return [action.payload, ...state];
          case EDIT_POST:
            return state.map((post) => {
              if (post.id === action.payload.id) {
                return {
                  ...post,
                  title: action.payload.title,
                };
              } else return post;
            });
      case DELETE_POST:
        return state.filter((task) => task.id != action.payload);
      case EDIT_TASK_FAIT:
        return state.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              fait: action.payload.fait,
            };
          } else return task;
        });
      default:
        return state;
    }
  }
  