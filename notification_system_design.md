# Stage 1: API Design

POST /notifications  
GET /notifications/{student_id}

Use WebSockets for real-time updates.

# Stage 2: Database Design

Using NoSQL (MongoDB)

Schema:
- student_id
- type
- message
- read
- timestamp

# Stage 3: Optimization

Use indexing on:
student_id, read

Avoid full table scans.

# Stage 5: Scalability

Problem:
Synchronous loop is slow.

Solution:
Use queue + worker system.

# Stage 6: Priority Inbox

Sort by:
Placement > Result > Event  
Then by timestamp (latest first)