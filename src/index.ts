import { v4 as uuidV4 } from 'uuid';

console.log(uuidV4());
console.log('Hello World!');

// CODE BELOW gets html elements and tells typescript what type of element it is

// this code gets html elements and tells typescript what type of element it is
const list = document.querySelector<HTMLUListElement>('#list'); // the function .querySelector can use <> to tell typescript what type of element it is

// const form = document.getElementById<HTMLFormElement>('#new-task-form'); <--  .getElementById does not need <> to tell typescript what type of element it is
const form = document.getElementById('new-task-form') as HTMLFormElement | null; // this is another way to tell typescript what type of element it is

const input = document.querySelector<HTMLInputElement>('#new-task-title');

// CODE BELOW tests the selectors
console.log('list:', list);
console.log('form:', form);
console.log('input:', input);

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
});
