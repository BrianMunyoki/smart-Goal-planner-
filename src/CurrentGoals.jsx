import AddNewGoal from "./AddNewGoal";
function CurrentGoals({ name, TargetAmount, SavedAmount, Progress, Remaining, TimeLeft, Actions }) {
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
          <th>Saved</th>
          <th>Progress</th>
          <th>Remaining</th>
          <th>Time Left</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {goals.map((goal)=>(
        <tr key ={goal.id}>
          <td>{goal.name}</td>
          <td>{goal.TargetAmount}</td>
          <td>{goal.SavedAmount}</td>
          <td>{goal.Progress}</td>
          <td>{goal.Remaining}</td>
          <td>{goal.Actions}</td>

        </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CurrentGoals;
