const maindiv = document.getElementById('container');
const addBtn = document.createElement('button');
const input1 = document.createElement('input');
let memory = [];
let nomerID = 0;
const localStorageKey = 2;
addBtn.innerHTML = 'Добавить';
maindiv.appendChild(addBtn);
maindiv.appendChild(input1);
const mainSpisok = document.createElement('ul');
maindiv.appendChild(mainSpisok);

if (localStorage.getItem(localStorageKey) != null) {
  memory = localStorage.getItem(localStorageKey).split(',');
}

// console.log(memory);

function OnStart() {
  for (let a = 0; a < memory.length; a += 1) {
    const element = document.createElement('li');
    element.id = `stroka_nomer_${nomerID}`;
    nomerID += 1;
    mainSpisok.appendChild(element);
    input1.value = null;
    const elementToAdd = document.getElementById(`stroka_nomer_${a}`);
    elementToAdd.innerHTML = memory[a];
  }
}

OnStart();

function Adder() {
  if (input1.value !== '') {
    memory.push(input1.value);
    memory.sort();
    const element = document.createElement('li');
    element.id = `stroka_nomer_${nomerID}`;
    nomerID += 1;
    mainSpisok.appendChild(element);
    input1.value = null;
    for (let a = 0; a < memory.length; a += 1) {
      const elementToAdd = document.getElementById(`stroka_nomer_${a}`);
      elementToAdd.innerHTML = memory[a];
    }
    localStorage.setItem(localStorageKey, memory);
  }
}

addBtn.addEventListener('click', Adder);

document.addEventListener(
  'keydown',
  event => {
    const keyName = event.key;
    if (keyName === 'Enter') {
      Adder();
    }
  },
  false
);
