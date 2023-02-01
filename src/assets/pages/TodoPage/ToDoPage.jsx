import React from "react";

export const ToDoPage = ({ toDoList }) => {
  return (
    <div>
      <ul>
        {toDoList.map((toDo, index) => (
          <li>
            <h2>{toDo.title}</h2>
            <p>{toDo.content}</p>
            <span>{toDo.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
