import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  function addSkill(newSkill) {
    setSkills([...skills, newSkill]);
  }

  return (
    <div className="dashboard">
      <Header />

      <div className="cards">
        <Card title="Total Skills" value={skills.length} />
        <Card title="Completed" value={3} />
        <Card title="In Progress" value={1} />
      </div>

      <TaskList skills={skills} />

      <TaskForm onAddSkill={addSkill} />
    </div>
  );
}

export default App;