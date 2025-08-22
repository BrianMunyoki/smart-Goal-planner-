
````markdown
# Brian's Smart Goal Planner

A simple financial goal planning app built with React and JSON Server. It allows users to create, track, and manage savings goals while keeping an overview of progress.

---

## Features
- Add new financial goals (e.g., "Travel Fund", "Emergency Fund")
- Track progress with saved amount vs target amount
- Display:
  - Goal name
  - Target amount
  - Saved amount
  - Category
  - Deadline
- Edit or delete existing goals
- Overview of all savings activity
- Data persistence with **json-server**

---

## Tech Stack
- React.js
- CSS
- JSON Server (for mock API and CRUD)

---

## Getting Started
1. **Clone the repository**
```bash
git clone https://github.com/BrianMunyoki/smart-goal-planner.git
cd smart-goal-planner
````

2. **Install dependencies**

```bash
npm install
```

3. **Start the backend**

```bash
npx json-server --watch db.json --port 3001
```

4. **Start the frontend**

```bash
npm run dev
```

---

## API

This project uses **json-server** as a local REST API.
All goal data is stored in `db.json` under the `/goals` endpoint.

**Example goal:**

```json
{
  "id": 1,
  "goalName": "Travel Fund - Japan",
  "TargetAmount": 5000,
  "savedAmount": 3700,
  "Category": "Travel",
  "deadline": "2025-12-31"
}
```

---

## Project Structure

```
smart-goal-planner/
│
├── public/               # Static assets
├── src/                  # React components
│   ├── App.jsx
│   ├── AddNewGoal.jsx
│   ├── CurrentGoals.jsx
│   ├── Overview.jsx
│   └── index.css / App.css
│
├── db.json               # Mock database (json-server)
├── package.json
└── README.md
```

---

## Author

Brian Muema

---

## License

This project is licensed under the MIT License.

```
