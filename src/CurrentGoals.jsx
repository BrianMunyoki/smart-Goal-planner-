import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import AddNewGoal from "./AddNewGoal";

function CurrentGoals() {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);

  // Fetch all goals
  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Error loading goals:", err));
  }, []);

  // Delete a goal
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/goals/${id}`, { method: "DELETE" })
      .then(() => {
        setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
      })
      .catch((err) => console.error("Error deleting goal:", err));
  };

  // Save updated goal
  const handleSave = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/goals/${editingGoal.id}`, {
      method: "PATCH", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingGoal),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prevGoals) =>
          prevGoals.map((g) => (g.id === updatedGoal.id ? updatedGoal : g))
        );
        setEditingGoal(null);
      })
      .catch((err) => console.error("Error updating goal:", err));
  };

  return (
    <>
      <h2>Current Goals</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Goal Name</th>
            <th>Target Amount</th>
            <th>Saved Amount</th>
            <th>Category</th>
            <th>Deadline</th>
            <th>Created At</th>
            <th>Remaining</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {goals.map((goal) => {
            const remaining =
              goal.TargetAmount > 0
                ? goal.TargetAmount - goal.savedAmount
                : "N/A";

            const daysLeft = Math.ceil(
              (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)
            );

            return (
              <tr key={goal.id}>
                <td>{goal.goalName}</td>
                <td>{goal.TargetAmount}</td>
                <td>{goal.savedAmount}</td>
                <td>{goal.Category}</td>
                <td>
                  {goal.deadline}
                  {daysLeft < 0 &&
                    goal.savedAmount < goal.TargetAmount && (
                      <span style={{ color: "red" }}> (Overdue)</span>
                    )}
                  {daysLeft >= 0 &&
                    daysLeft <= 30 &&
                    goal.savedAmount < goal.TargetAmount && (
                      <span style={{ color: "orange" }}> (Deadline Soon)</span>
                    )}
                </td>
                <td>{goal.createdAt}</td>
                <td>{remaining}</td>
                <ProgressBar
                  saved={goal.savedAmount}
                  target={goal.TargetAmount}
                />
                <td>
                  <button onClick={() => setEditingGoal(goal)}>Edit</button>
                  <button onClick={() => handleDelete(goal.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {editingGoal && (
        <form onSubmit={handleSave} style={{ marginTop: "20px" }}>
          <h3>Editing: {editingGoal.goalName}</h3>

          <input
            type="text"
            value={editingGoal.goalName}
            onChange={(e) =>
              setEditingGoal({ ...editingGoal, goalName: e.target.value })
            }
          />

          <input
            type="number"
            value={editingGoal.TargetAmount}
            onChange={(e) =>
              setEditingGoal({
                ...editingGoal,
                TargetAmount: Number(e.target.value),
              })
            }
          />


          <input
            type="number"
            value={editingGoal.savedAmount}
            onChange={(e) =>
              setEditingGoal({
                ...editingGoal,
                savedAmount: Number(e.target.value),
              })
            }
          />

          <input
            type="text"
            value={editingGoal.Category}
            onChange={(e) =>
              setEditingGoal({ ...editingGoal, Category: e.target.value })
            }
          />

          <input
            type="date"
            value={editingGoal.deadline}
            onChange={(e) =>
              setEditingGoal({ ...editingGoal, deadline: e.target.value })
            }
          />

          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditingGoal(null)}>
            Cancel
          </button>
        </form>
      )}

 
      <AddNewGoal onAdd={(goal) => setGoals((prev) => [...prev, goal])} />
    </>
  );
}

export default CurrentGoals;
