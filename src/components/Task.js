const Task = ({task}) => {
    return (
        <h2 key={task.id}>
            {task.title}
        </h2>
    )
}

export default Task
