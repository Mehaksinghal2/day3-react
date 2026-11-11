function TaskList({ skills }) {
  return (
    <div className="task-section">
      <h2>My Skills</h2>

      {skills.length === 0 ? (
        <p>No skills added yet.</p>
      ) : (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;