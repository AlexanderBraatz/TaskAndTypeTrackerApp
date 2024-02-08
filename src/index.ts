import { v4 as uuidV4 } from 'uuid';

console.log(uuidV4());
console.log('Hello World!');

// this code gets html elements and tells typescript what type of element it is
const list = document.querySelector<HTMLUListElement>('#list'); // the function .querySelector can use <> to tell typescript what type of element it is

// const form = document.getElementById<HTMLFormElement>('#new-task-form'); <--  .getElementById does not need <> to tell typescript what type of element it is
const form = document.getElementById('new-task-form') as HTMLFormElement | null; // this is another way to tell typescript what type of element it is

const input = document.querySelector<HTMLInputElement>('#new-task-title');

//testing the selectors
console.log('list:', list);
console.log('form:', form);
console.log('input:', input);
