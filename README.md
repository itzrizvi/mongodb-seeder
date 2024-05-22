# MongoDB Seeder Script

This script seeds a MongoDB database using a provided JavaScript file containing the data. It reads the configuration from a JSON file, executes the seeding script in a sandboxed environment, and logs the process steps and any errors that occur.

## Prerequisites

Before running the script, ensure you have the following installed and configured:

### 1. Node.js

Ensure you have Node.js installed (v18.0.0 or higher). You can download it from [Node.js official website](https://nodejs.org/).

### 2. MongoDB

Ensure you have a running instance of MongoDB. You can download and install MongoDB from [MongoDB official website](https://www.mongodb.com/try/download/community).

### 3. NPM Modules

Install the necessary npm modules by running (It will install node_modules):

```bash
npm install mongodb
```

### 4. Config

Please update the DB URL with <username>, <password> & <db-name>
Please update the DB name with your database name

### 5. RUN the command

Run the below command to inject data:

```bash
node db-seeder.js
```
