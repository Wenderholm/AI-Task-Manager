function TaskList({ tasks, loading, error }) {
  if (loading) {
    return <p className="empty-message">Loading tasks...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (tasks.length === 0) {
    return (
      <p className="empty-message">No tasks yet. Create your first task!</p>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-item" key={task.id}>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description || "No description"}</p>
          </div>

          <div className="task-meta">
            <span className={`status ${task.status.toLowerCase()}`}>
              {task.status.replace("_", " ")}
            </span>

            <span className={`priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
