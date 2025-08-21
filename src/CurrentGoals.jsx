import { useState, useEffect } from "react";
import HandleUpdate from "./handleUpdate";

function CurrentGoals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals/")
      .then((res) =>{
        if(!res.ok){
          throw new Error("Failed to fetch goals");
        }
        return res.json()
      })       
      .then((data) => setGoals(data))
      .catch((err)=>{
        console.error("Error loading goals:",err);
        alert("Could not load goals. please try again later");
      })
  }, []);
    
  function handleDelete(id){
    fetch(`http://localhost:3000/goals/${id}`,
      {method:'DELETE'})
      .then(()=>{
        setGoals((prevGoals)=>prevGoals.filter((goals)=>goals.id !==id));
      })
      .catch((err) => {
      console.error("Error deleting goal:", err);
      alert("Could not delete this goal.");
    });
  }
        
    
  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Goal Name</th>
          <th>Target Amount</th>
          <th>Saved Amount</th>
          <th>Category</th>
          <th>Deadline</th>
          <th>Created At</th>
          <th>Delete Goal</th>
          <th>Edit Goal</th>
        </tr>
      </thead>
      <tbody>
        {goals.map((goal) => (
          <tr key={goal.id}>
            <td>{goal.goalName}</td>
            <td>{goal.TargetAmount}</td>
            <td>{goal.savedAmount}</td>
            <td>{goal.Category}</td>
            <td>{goal.deadline}</td>
            <td>{goal.createdAt}</td>
            <td><button onClick={()=>handleDelete(goal.id)} >Delete</button></td>
            <td><button onClick={()=>HandleUpdate(goal.id,goal.savedAmount, goal.goalName,goal.targetAmount,goal.category,goal.deadline,setGoals)} >edit goal</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CurrentGoals;
