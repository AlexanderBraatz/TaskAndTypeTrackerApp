import { v4 as uuidV4 } from 'uuid';

type Task = {
	id: string;
	title: string;
	completed: boolean;
	createdAt: Date;
};

// CODE BELOW gets html elements and tells typescript what type of element it is

// this code gets html elements and tells typescript what type of element it is
const list = document.querySelector<HTMLUListElement>('#list'); // the function .querySelector can use <> to tell typescript what type of element it is

// const form = document.getElementById<HTMLFormElement>('#new-task-form'); <--  .getElementById does not need <> to tell typescript what type of element it is
const form = document.getElementById('new-task-form') as HTMLFormElement | null; // this is another way to tell typescript what type of element it is

const input = document.querySelector<HTMLInputElement>('#new-task-title');

// CODE BELOW creates an array of tasks
const tasks: Task[] = loadTasks();
tasks.forEach(task => {
	addListItem(task);
});

//CODE BELOW adds an event listener to the form

form?.addEventListener('submit', e => {
	e.preventDefault();
	// CODE BELOW makes the event listener do nothing if the input is empty
	if (input?.value == '' || input?.value == null) {
		return;
	}

	const newTask = {
		id: uuidV4(),
		title: input.value,
		completed: false,
		createdAt: new Date()
	};

	console.log('newTask:', newTask); // test the newTask object

	addListItem(newTask);
	input.value = '';
});

function addListItem(task: Task) {
	const item = document.createElement('li');
	const label = document.createElement('label');
	const checkbox = document.createElement('input');
	item.className = 'task';
	checkbox.className = 'checkbox';
	label.className = 'label';
	checkbox.addEventListener('change', e => {
		task.completed = checkbox.checked;
		saveTasks();
	});
	checkbox.type = 'checkbox';
	checkbox.checked = task.completed;
	item.append(checkbox);
	label.append(task.title);
	item.append(label);
	list?.append(item);

	tasks.push(task);
}
function saveTasks() {
	localStorage.setItem('TASKS', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
	const taskJSON = localStorage.getItem('TASKS');
	if (taskJSON === null) {
		return [];
	}
	return JSON.parse(taskJSON);
}
//testing git for somthing else
