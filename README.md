# Commit React & NextJS home assignment

This is a React & Next.js application with a form to collect user data and display it on another tab.

1.  Task Requirements:

Create a react & Next JS site that includes two tabs.
In the first tab there will be form with the following inputs:

- User name (upto 32 chars)
- Phone number (upto 10 numbers)
- Password (should includes 6-12 chars uppercase letter and special char)
- Validation password

When the user presses submit, an API will send to save the user data,
data should be saved in the FE in redux, and in the BE save it in any DB that you prefer.
On the second tab we should represent the data and get it from the BE.

When you finish upload the code to any repository you want, or to any host that we will be able to see the code and run it, add a readme file which explain how to run the environment, don’t forget to mention node version, and any other environment info that needed.

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/yair-roshal/commit-server.git
```

Install dependencies:

```bash
 npm install
```

After that you need to configure .env.example to communicate with your database

```bash

HOST=

PORT=

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

```

### Running the Backend

Start the Node.js server:

```bash
 node server.js
```

### Technologies Used

Node.js
Express

### License

This project is licensed under the MIT License.
