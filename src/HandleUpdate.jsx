function HandleUpdate(id, newSavedAmount, newGoalName, newTargetAmount, newCategory, newDeadline, setGoals) {
  return fetch(`http://localhost:3000/goals/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      savedAmount: newSavedAmount,
      goalName: newGoalName,
      targetAmount: newTargetAmount, 
      category: newCategory,         
      deadline: newDeadline,
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to update goal");
      return res.json();
    })
    .then((updatedGoal) => {
      // update the UI state
      setGoals((prev) =>
        prev.map((goal) => (goal.id === id ? updatedGoal : goal))
      );
      return updatedGoal; 
    })
    .catch((err) => {
      console.error("Error updating goal:", err);
      alert("Could not update goal.");
      throw err;
    });
}

export default HandleUpdate;
