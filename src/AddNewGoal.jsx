import { useState } from "react";
import CurrentGoals from "./currentGoals";

function AddNewGoal({ onAdd }) {
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [savedAmount, setSavedAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goalName || !targetAmount || !category || !deadline) {
      alert("Kindly fill in all fields!");
      return;
    }

    if (Number(targetAmount) <= 0) {
      alert("Target Amount must be greater than 0");
      return;
    }

    const newGoal = {
      goalName: goalName,
      TargetAmount: Number(targetAmount),
      savedAmount: Number(savedAmount),
      Category: category,
      deadline: deadline,
      createdAt: new Date().toISOString().split("T")[0]
    };

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal)
    })
      .then((res) => res.json())
      .then((data) => {
        onAdd(data);
        setGoalName("");
        setTargetAmount("");
        setCategory("");
        setSavedAmount(0);
        setDeadline("");
      })
      .catch((err) => console.error("Error adding goal:", err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <div>
        <label>
          Goal Name
          <input
            type="text"
            placeholder="Goal Name"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Target Amount
          <input
            type="number"
            placeholder="Target Amount"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Category
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Saved Amount
          <input
            type="number"
            placeholder="Saved Amount"
            value={savedAmount}
            onChange={(e) => setSavedAmount(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Deadline
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Add Goal</button>
    </form>

  );
}

export default AddNewGoal;
