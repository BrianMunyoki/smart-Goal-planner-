import AddNewGoal from "./AddNewGoal";
import { useState,useEffect } from "react";
function CurrentGoals() {
  const [goals, setGoals]=useState([])
  useEffect(()=>{
  fetch("http://localhost:3001/goals")
  .then((res)=>res.json())
  .then((data)=>setGoals(data))
  },[])
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Goal Name</th>
          <th>Target Amount</th>
          <th>SavedAmount</th>
          <th>Category</th>
          <th>Deadline</th>
          <th>CreatedAt</th>  
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {goals.map((goal)=>(
        <tr key ={goal.id}>
          <td>{goal.name}</td>
          <td>{goal.targetAmount}</td>
          <td>{goal.savedAmount}</td>
          <td>{goal.category}</td>
          <td>{goal.deadline}</td>
          <td>{goal.createdAt}</td>
          <td>
            <button onClick={()=>handleUpdated(goal.id)}>update Goal</button>
            <button onclick={()=>handleDelete(goal.id)}>Delete Goal</button>
          </td>

        </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CurrentGoals;
