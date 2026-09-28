# Study Planner

A simple and interactive web-based task management application designed to help students organize and track their study activities efficiently.

## Project Description

Study Planner is a lightweight, beginner-friendly web application built with vanilla HTML, CSS, and JavaScript. The application allows users to create, manage, and organize their study tasks in an intuitive interface. With a clean, modern design and smooth user interactions, Study Planner makes it easy to stay focused on learning goals.

## Features

- **Add Tasks** - Easily add new study tasks using the input field and Add Task button
- **Mark as Completed** - Check off tasks as you complete them with visual feedback (strikethrough effect)
- **Delete Tasks** - Remove tasks from your list with a single click
- **Enter Key Support** - Quickly add tasks by pressing the Enter key without using the mouse
- **Input Validation** - The application alerts users if they try to add an empty task
- **Responsive Design** - The application works seamlessly on desktop and mobile devices
- **Clean Interface** - Modern gradient background and card-based layout for better user experience

## Technologies Used

- **HTML5** - Semantic markup for page structure
- **CSS3** - Styling with flexbox layout and responsive design
- **JavaScript (Vanilla)** - DOM manipulation and event handling for interactive features

## Installation

1. **Clone or Download** the project files to your computer:
   ```bash
   git clone <repository-url>
   cd study_planner
   ```

2. **No Installation Required** - Study Planner is a static web application with no dependencies to install.

## Usage Guide

### Adding a Task

1. Click on the input field that says "Enter a study task..."
2. Type your study task (e.g., "Read Chapter 5 of Biology textbook")
3. Click the **Add Task** button, or press **Enter** on your keyboard
4. The task will appear in your task list below

### Marking Tasks as Completed

1. Click the checkbox next to any task in your list
2. The task text will turn gray and display with a strikethrough effect
3. Click the checkbox again to unmark the task as incomplete

### Deleting Tasks

1. Find the task you want to remove
2. Click the **Delete** button on the right side of the task
3. The task will be removed from your list immediately

### Tips for Best Results

- Use clear, specific task descriptions for better organization
- Review your completed tasks regularly for motivation
- Tasks are saved only during your current session (refresh the page to start fresh)

## Project Structure

```
study_planner/
│
├── index.html      # Main HTML file with page structure
├── style.css       # CSS styling and responsive design
├── script.js       # JavaScript functionality and event handlers
└── README.md       # Project documentation
```

## File Descriptions

- **index.html** - Contains the semantic HTML structure including the input field, Add Task button, and task list container
- **style.css** - Defines all visual styling including the gradient background, button styles, task list appearance, and mobile responsiveness
- **script.js** - Implements core functionality: adding tasks, event listeners for button clicks and Enter key, creating task elements with checkboxes and delete buttons

## Future Enhancements

Potential features to expand this project:

- Local storage to save tasks between browser sessions
- Edit task functionality
- Priority levels or categories for tasks
- Due dates and reminders
- Dark mode theme
- Task filtering and sorting options

## Learning Outcomes

This project demonstrates fundamental web development concepts:

- DOM (Document Object Model) manipulation
- Event listeners and event handling
- Dynamic element creation with JavaScript
- CSS styling and layout techniques
- Responsive web design principles
- User input validation

## Notes

- This is a beginner-level project ideal for learning basic web development concepts
- No external libraries or frameworks are used (vanilla JavaScript only)
- All styling is custom CSS without frameworks like Bootstrap
- The application stores tasks in memory only; they will not persist after page refresh

---

**Last Updated:** September 27, 2026
