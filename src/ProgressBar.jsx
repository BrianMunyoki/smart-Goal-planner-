function ProgressBar({ saved, target }) {
  let progress = 0;

  if (target > 0) {
    progress = Math.min((saved / target) * 100, 100);
  }

  return (
    <td>
      <div style={{ width: "100px", background: "#eee" }}>
        <div
          style={{
            width: `${progress}%`,
            background: progress >= 100 ? "green" : "blue",
            height: "10px"
          }}
        />
      </div>
      <small>{progress.toFixed(1)}%</small>
    </td>
  );
}

export default ProgressBar;
