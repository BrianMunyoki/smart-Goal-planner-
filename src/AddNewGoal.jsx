import { Box, VStack, Input, Button } from "@chakra-ui/react";
function AddNewGoal(){
    const [goalName, setGoalName]=useState("");
    const [TargetAmount, setTargetAmount]=useState("");
    const[Category, setCategory]=useState("");
    const[Deadline,setDeadline]=useState("");
       const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <div>
        <label>
            GoalName
            <input type="text" placeholder="GoalName" value={goalName} onChange={(e)=>setGoalName(e.target.value)} />
        </label><br/>
        </div>
        <div>
         <label>
            Target Amount
            <input type="text" placeholder="TargetAmount" value={TargetAmount} onChange={(e)=>setTargetAmount(e.target.value)} />
        </label><br/>
        </div>
        <div>
         <label>
            Category
            <input type="text" placeholder="Category" value={Category} onChange={(e)=>setCategory(e.target.value)}/>
        </label><br/>
        </div>
        <div>
         <label>
            Deadline
            <input type="text" placeholder="Category" value={Deadline} onChange={(e)=>setDeadline(e.target.value)}/><br/>
        </label><br/>
        <button type="submit">AddGoal</button><br/>
        </div>
        </form>
        </>
    )
}

export default AddNewGoal;