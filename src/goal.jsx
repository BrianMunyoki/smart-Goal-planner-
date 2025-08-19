
function GoalList({GoalName,Target, Category, Deadline, Saved, Remaining, Progress}){
      const goal = {
    GoalName: 'Vacation Fund',
    Target: 5000,
    Category: 'Travel',
    Deadline: '2025-12-31',
    Saved: 3000,
    Remaining: 2000,
    Progress: '60%',
  };
    return(
       <tr>
        <td>{GoalName}</td>
        <td>{Target}</td>
        <td>{Category}</td>
        <td>{Deadline}</td>
        <td>{Saved}</td>
        <td>{Remaining}</td>
        <td>{Progress}</td>
    </tr>
    
)};

export default GoalList;