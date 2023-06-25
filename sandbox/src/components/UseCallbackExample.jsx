import React, { useState, useCallback } from "react"

function useCallbackExample() {
    const [task, setTask] = useState([])

    const addTask = useCallback(
        () => {
            setTask((prevState) => [...prevState, 'Some Task'])
        }, [setTask])


  return (
    <div>
        <Button addTask={addTask} />
        {task.map((task, index) =>(
            <p key={index}>{task}</p>
        ))}
    </div>
  )
}

const Button = React.memo(({addTask}) => {
    console.log('Button rendered');
    return <div>
        <button
        className="btn btn-warning"
         onClick={addTask}>
            Add Task</button>
    </div>

})

export default useCallbackExample