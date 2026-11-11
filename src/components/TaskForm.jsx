import { useState } from "react";

function TaskForm({ onAddSkill }) {
  const [skill, setSkill] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (skill.trim() === "") {
      return;
    }

    onAddSkill(skill);
    setSkill("");
  }

  return (
    <div className="form-section">
      <h2>Add a Skill</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a skill"
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
        />

        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}

export default TaskForm;