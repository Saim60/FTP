import {NEW_LIST,SHOW_LIST} from './types';
import axios from 'axios';


export const createItem =(post)=>async (dispatch)=>{
  
       const result =await axios.post("http://localhost:5000/AddToList",post);
       dispatch(showItem); 
       //dispatch(deleteItem);
      
//     dispatch({type:NEW_LIST,
//     payload:result.data,

// })
console.log("data inserted")
};
export const showItem =async(dispatch)=>{
  
    debugger;
    const result =await axios.get("http://localhost:5000/List");
    dispatch({type:SHOW_LIST,
    payload:result.data,

})
console.log(result.data);
console.log("data shown")
};

// export const updateItem = (post) => async (dispatch) => {
//     const result = await axios.put("http://localhost:3000/UpdateList",post);
//     dispatch({
//       type: UPDATE_POST,
//       payload: result.data,
//     });
//   };

// export const deleteItem= (item) => async (dispatch) => {
//     console.log(item)
//     debugger;
    
//     const result =await axios.delete("http://localhost:3000/DeleteList/"+item);
//     const Alldata = await axios.get("http://localhost:3000/List");
    
//     dispatch({
//       type: DELETE_LIST,
//       payload:Alldata.data,
//     });
//   };
  