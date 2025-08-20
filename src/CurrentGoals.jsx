function CurrentGoals({ name, TargetAmount, SavedAmount, Progress, Remaining, TimeLeft, Actions }) {
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
        <tr>
          <td>{name}</td>
          <td>{TargetAmount}</td>
          <td>{SavedAmount}</td>
          <td>{Progress}</td>
          <td>{Remaining}</td>
          <td>{TimeLeft}</td>
          <td>{Actions}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CurrentGoals;
