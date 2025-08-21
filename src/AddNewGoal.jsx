import { useState } from "react";

function AddNewGoal() {
  const [goalName, setGoalName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [goals, setGoals] = useState([]);

  const handleSubmit = (e) => {
    

    if (!goalName || !targetAmount || !category || !deadline) {
      alert("Kindly fill in all fields!");
      return;
    }

    const newGoal = {
      name: goalName,
      targetAmount: Number(targetAmount), // keep it numeric
      savedAmount: 0,
      category: category,
      deadline: deadline,
      createdAt: new Date().toISOString().split("T")[0]
    };

    fetch("http://localhost:3000/goals", {   // make sure this matches your json-server port
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal)
    })
      .then((res) => res.json())
      .then((data) => {
        setGoals([...goals, data]);
        
        
      })
      .catch((err) => console.error("Error adding goal:", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
    </>
  );
}

export default AddNewGoal;
