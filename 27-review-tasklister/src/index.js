// TODO:
  // Validate unique list titles

// WATCH OUT!
  // innerHTML is going to overwrite any DOM elements (including their
  // event listeners) that are part of that HTML


const lists = []

document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const appContent = document.getElementById("app-content");

  // A user should be able to create a new list.
    // Event Listener added to the form, submit event
    // User will submit a form
      // Take in list title (input)
      // Create a list in the DOM

  const listForm = document.getElementById('create-list-form')
  listForm.addEventListener('submit', createList)

  // A user should be able to add new tasks to a list.
    // Event listener added to the form, submit event
      // prevent default
      // get all the inputs (the dropdown, description, priority)
      // create the task (template or element)
      // add the task to the parent list
  // A list has many tasks

  // Event delegation: add the event listener to the parent and then
  // you do if statements inside to conditionally react to event
  appContent.addEventListener('submit', function(event) {
    const taskFormIsSubmitted = event.target.id === "create-task-form"

    if (taskFormIsSubmitted) {
      createTask(event)
    }
  })

  // A user should be able to delete a list or its associated tasks.
    // Clicking a button on a task should remove the task
      // Event listener added to the button
        // Remove the task
    // Clicking a button on a list should remove the list and all tasks
      // Event listener added to the button
        // Remove the list
  appContent.addEventListener('click', function(event) {
    const taskDeleteIsClicked = event.target.className === 'delete-task'
    const listDeleteIsClicked = event.target.className === 'delete-list'

    if (taskDeleteIsClicked) {
      event.target.parentElement.remove()
    } else if (listDeleteIsClicked) {
      debugger
      // event.target.parentElement.parentElement.remove()
      document.getElementById(event.target.dataset.title).remove()
    }
  })
});

function createTask(event) {
  event.preventDefault();

  const parentListEl = document.getElementById('parent-list')
  const newTaskDescription = document.getElementById('new-task-description')
  const newTaskPriority = document.getElementById('new-task-priority')
  const listUl = document.getElementById(parentListEl.value).querySelector('ul')
  // BROKEN: const listUl = document.querySelector(`#${parentListEl.value} ul`)

  // const listUl = document.querySelector(`#new-list ul`)

  const taskTemplate = `
    <li>
      Task: ${newTaskDescription.value}
      <button data-list-title="${parentListEl.value}" data-task-name="${newTaskDescription.value}" class="delete-task">
          X
      </button>
      <br>
      Priority: ${newTaskPriority.value}
    </li>
  `

  listUl.innerHTML += taskTemplate
}

function createList(event) {
  event.preventDefault();

  let listsDiv = document.getElementById('lists')
  const appContent = document.getElementById("app-content");
  const listTitleInput = document.getElementById('new-list-title')
  const listTemplate = `
    <div id="${listTitleInput.value}">
      <h2>${listTitleInput.value}
        <button data-title="${listTitleInput.value}" class="delete-list">
          X
        </button>
      </h2>
      <ul>
      </ul>
    </div>
    `
  const taskFormTemplate = `
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list"></select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
      `


  // we're adding the first list
  if (listsDiv === null) {
    listsDiv = document.createElement('div')
    listsDiv.id = 'lists'
    appContent.innerHTML += taskFormTemplate
    appContent.append(listsDiv)
  }

  // adding the option for the list being created to the select/dropdown
  const selectEl = document.getElementById('parent-list')
  const optionEl = document.createElement('option')
  optionEl.value = listTitleInput.value
  optionEl.innerText = listTitleInput.value
  selectEl.append(optionEl)

  // at this point we have something to attach the list template to
  // attaching the list to the listsDiv
  listsDiv.innerHTML += listTemplate

  lists.push({ title: listTitleInput.value, tasks: [] })
}
