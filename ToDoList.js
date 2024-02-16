import { useState } from "react";

const deafultTodos = [];

function TodoList() {
    const [editInputValue, seteditInputValue] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState(deafultTodos);

    const hanldeInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (b) => {
        seteditInputValue(b.target.value);
    };
    const addTodo = () => {
        if (!inputValue) return;
        setTodos([
            ...todos,
            { id: Math.random(), name: inputValue, isEditing: false },
        ]);
        setInputValue("");
    };
    const delToDo = (ItemId) => {
        const filteredToDos = todos.filter((item) => item.id !== ItemId);
        setTodos(filteredToDos);
    };
    const clearToDo = () => {
        setTodos([]);
    };
    const editToDo = (ItemId) => {
        console.log(ItemId);
        const newToDos = todos.map((item) => {
            if (item.id === ItemId) {
                return { ...item, isEditing: true };
            } else {
                return item;
            }
        });
        setTodos(newToDos);
    };
    const SaveToDo = (ItemId) => {
        setTodos(newToDos);
    };
    return (
        <>
            <h1 className="ToDoColour">Todo list</h1>
            <input value={inputValue} type="text" onChange={hanldeInputChange} />
            <button className="AddButtonColour" onClick={addTodo}>
                Add
            </button>
            <button className="ClearButtonColour" onClick={clearToDo}>
                Clear
            </button>
            <ul>
                {todos.map((item) => (
                    <li>
                        {item.isEditing ? (
                            <input
                                value={editInputValue || item.name}
                                type="text"
                                onChange={handleSubmit}
                            />
                        ) : (
                            <>{item.name} </>
                        )}

                        <button
                            className="DeleteButtonColour"
                            onClick={() => delToDo(item.id)}
                        >
                            Delete
                        </button>
                        <button
                            className="EditButtonColour"
                            onClick={() => editToDo(item.id)}
                        >
                            Edit
                        </button>
                        <button
                            className="SaveButtonColour"
                            onClick={() => editToDo(item.id)}
                        >
                            Save
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
