import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
    const renderedList = list.map(
        (item) => (
            <Todo 
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                removeTodoItemProp={(e) => removeTodoListProp(item._id)} 
                completed={item.completed} 
                title={item.title} 
                key={item.title} 
            />
        )
    );

    return(
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
}

export default List;