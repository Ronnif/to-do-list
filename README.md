# Task Manager Application

This is a simple Task Manager application built with Angular. It allows users to manage their tasks effectively by providing functionalities to add, update, delete, and mark tasks as completed.

## Features

- Add new tasks
- View a list of tasks
- Update existing tasks
- Delete tasks
- Mark tasks as completed

## Technologies Used

- Angular
- Node.js
- JSON Server (for simulating a RESTful API)
- TypeScript

## Project Structure

```
task-manager-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── task-list
│   │   │   │   └── task-list.component.ts
│   │   │   ├── task-item
│   │   │   │   └── task-item.component.ts
│   │   │   └── add-task
│   │   │       └── add-task.component.ts
│   │   ├── services
│   │   │   └── task.service.ts
│   │   ├── models
│   │   │   └── task.model.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── index.html
├── db.json
├── package.json
├── angular.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd task-manager-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run JSON Server:**
   ```
   json-server --watch db.json
   ```
   This will start the JSON Server on `http://localhost:3000`.

4. **Run the Angular application:**
   ```
   ng serve
   ```
   The application will be available at `http://localhost:4200`.

## Usage

- Navigate to the application in your browser.
- Use the form to add new tasks.
- View the list of tasks and use the options to update or delete tasks.
- Mark tasks as completed by clicking on the respective checkbox.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.