import React, { useState } from 'react';

function AddGoal(){ //addgoal function 
    const [goal, SetGoal]=useState([])
    const handlechange=(event)=>{
       SetGoal(event.target.value)
        function handleSubmit (e){
            e.preventDefault();
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}> 
                <label>
                    enter your goal
                    <input value ={goal} type="text" onChange={handlechange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default AddGoal;