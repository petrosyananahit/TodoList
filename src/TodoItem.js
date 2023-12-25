import "./TodoItem.css"
function TodoItem({todo, onChange, onDelete}){
return (
    <div className="todoItem">
        <label className="label">
            <input type="checkbox"checked={todo.isCompleted} onChange={(e)=>{
             onChange({
                ...todo,
                isCompleted:e.target.checked
             })  
            }}/>
            {todo.text}
            <button   className="buttonX" onClick={()=>{
                onDelete(todo);
            }}>X</button>
        </label>
    </div>
)
}
export default TodoItem;