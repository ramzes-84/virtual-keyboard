export function createPageStructure() {
  const body = document.querySelector('body');
  body.className = 'body';
  const main = document.createElement('main');
  const header = document.createElement('header');
  header.className = 'header';
  const h1 = document.createElement('h1');
  h1.textContent = 'Super Keyboard Model 2000';
  h1.className = 'h1';
  header.append(h1);
  body.prepend(main);
  body.prepend(header);
  const inputArea = document.createElement('section');
  inputArea.className = 'input-area';
  const inputField = document.createElement('textarea');
  inputField.className = 'input-area__text';
  inputArea.append(inputField);
  main.append(inputArea);
  const kbContainer = document.createElement('section');
  kbContainer.className = 'keyboard';
  main.append(kbContainer);
}

export function createKB(arr) {
  const kbContainer = document.querySelector('.keyboard');
  let keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 0; i < 14; i++) {
    let btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i]['eng'];
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i]['additionClass']);
    keysRow.append(btn);
    kbContainer.append(keysRow)
  }
  keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 14; i < 29; i++) {
    let btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i]['eng'];
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i]['additionClass']);
    keysRow.append(btn);
    kbContainer.append(keysRow)
  }
  keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 29; i < 42; i++) {
    let btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i]['eng'];
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i]['additionClass']);
    keysRow.append(btn);
    kbContainer.append(keysRow)
  }
  keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 42; i < 55; i++) {
    let btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i]['eng'];
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i]['additionClass']);
    keysRow.append(btn);
    kbContainer.append(keysRow)
  }
  keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 55; i < arr.length; i++) {
    let btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i]['eng'];
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i]['additionClass']);
    keysRow.append(btn);
    kbContainer.append(keysRow)
  }
  const manufacturer = document.createElement('p');
  manufacturer.textContent = 'Made in China';
  manufacturer.className = 'keyboard__made';
  kbContainer.append(manufacturer);
}
