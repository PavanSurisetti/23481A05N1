


# Coding Assessment Submission – 23481A05N1

This project is a complete backend implementation built using **Node.js**, covering multiple software engineering concepts including **API design, middleware, system design, and algorithmic problem solving**.

The project is divided into two main tasks:

* **Task A:** Vehicle Maintenance Scheduling (Algorithmic Problem)
* **Task B:** Notification System Design (System Design)

---

# Project Overview

This repository demonstrates:

* Clean backend architecture (MVC pattern)
* Use of **custom middleware**
* Implementation of **dynamic programming (0/1 Knapsack)**
* Scalable system design concepts
* Modular and maintainable code structure

---

# Project Structure

```
23481A05N1/
│
├── middleware/
│   └── logger.js              # Custom logging middleware
│
├── routes/
│   └── studentRoutes.js       # API routes
│
├── controllers/
│   └── studentController.js   # Request handling logic
│
├── services/
│   └── studentService.js      # Business logic layer
│
├── vehicle_scheduling/        # Task A
│   └── scheduler.js           # Knapsack implementation
│
├── notification_system_design.md   # Task B (System Design)
│
├── .env
├── .gitignore
├── app.js                     # Main server file
├── package.json
├── package-lock.json
└── README.md
```

---

# Task A: Vehicle Maintenance Scheduler

## Problem Statement

Given:

* A list of vehicles
* Each vehicle has:

  * Maintenance time required
  * Importance value
* A fixed number of available mechanic hours

## Objective

Maximize the **total importance** of serviced vehicles **without exceeding time constraints**.

---

## Approach

The problem is solved using:

### 0/1 Knapsack Algorithm (Dynamic Programming)

* Each vehicle = an item
* Time = weight
* Importance = value
* Goal = maximize value within weight limit

---

## Features

* Fetches vehicle data from API
* Applies dynamic programming
* Outputs optimal scheduling result
* Efficient time complexity solution

---

## How to Run Task A

```bash
node vehicle_scheduling/scheduler.js
```

---

# Task B: Notification System Design

This section is documented in:

```
notification_system_design.md
```

---

## Key Components Covered

### 1. API Design

* Endpoints for sending notifications
* User-specific notification retrieval
* Priority-based delivery

---

### 2. Database Design (NoSQL)

* Scalable schema design
* Efficient storage of notifications
* Indexed queries for fast retrieval

---

### 3. Scalability

* Message queues (Kafka/RabbitMQ concept)
* Worker-based processing
* Horizontal scaling strategies

---

### 4. Query Optimization

* Indexing strategies
* Pagination techniques
* Filtering and sorting

---

### 5. Priority Inbox Algorithm

* High-priority notifications handled first
* Efficient sorting and delivery logic

---

# Middleware

## Custom Logger

Located in:

```
middleware/logger.js
```

### Features:

* Logs incoming requests
* Tracks API usage
* Helps in debugging and monitoring

---

# Backend Architecture

The project follows **MVC Architecture**:

* **Routes** → Handle endpoints
* **Controllers** → Handle requests/responses
* **Services** → Business logic
* **Middleware** → Cross-cutting concerns

---

# Technologies Used

* Node.js
* Express.js
* JavaScript (ES6+)
* REST APIs
* Dynamic Programming

---

# Key Highlights

* Clean folder structure
* Separation of concerns
* Efficient algorithm implementation
* Scalable system design approach
* Real-world backend practices

---

# Future Improvements

* Add database integration (MongoDB)
* Implement authentication (JWT)
* Deploy on cloud (AWS / Render)
* Add frontend dashboard
* Improve logging with external tools

---

# License

This project is intended for **educational and assessment purposes only**.

---

# Author

**Pavan Surisetti**
Roll Number: 23481A05N1

