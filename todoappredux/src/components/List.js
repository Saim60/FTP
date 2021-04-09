import React, { useEffect } from 'react';
import { showItem ,deleteItem} from "../actions/listAction";
import { useDispatch, useSelector } from "react-redux";
//import DeleteList from "./DeleteList";


const List = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showItem);
       //dispatch(deleteItem);
    }, []);

    const lists = useSelector((state) => state.item.list);
    return (
        <div>
            <ul>
                {lists.map((lists) => <li>{lists.item}</li>)}

            </ul>
        </div>

    )
}
export default List;