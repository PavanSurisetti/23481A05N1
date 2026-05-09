# Coding Assessment Submission

## Candidate Details
- Roll Number: 23481A05N1

---

## Project Structure
23481A05N1/
│
├── middleware/
│ └── logger.js
│
├── routes/
│ └── studentRoutes.js
│
├── controllers/
│ └── studentController.js
│
├── services/
│ └── studentService.js
│
├── vehicle_scheduling/ # Task A
│ └── scheduler.js
│
├── notification_system_design.md # Task B
│
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
- vehicle_scheduling/
  - Contains Task A solution (Vehicle Maintenance Scheduler)
  - Implements 0/1 Knapsack Problem

- notification_system_design.md
  - Contains Task B system design answers

- middleware/
  - Custom logging middleware (mandatory requirement)

---

## Task A

- Fetches vehicle data from API
- Computes maximum importance within mechanic hour limit
- Uses dynamic programming (0/1 Knapsack)

---

## Task B

- API Design for notification system
- Database design (NoSQL)
- Query optimization strategies
- Scalability solution using queues/workers
- Priority inbox algorithm

---

## How to Run

```bash
node vehicle_scheduling/scheduler.js