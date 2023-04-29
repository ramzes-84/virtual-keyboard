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
  inputField.autofocus = true;
  inputField.placeholder = 'Let\'s hack Pentagon...\n\n\n\n\nCreated in Windows.\nAlt+Shift for lang.';
  inputArea.append(inputField);
  main.append(inputArea);
  const kbContainer = document.createElement('section');
  kbContainer.className = 'keyboard';
  main.append(kbContainer);
}

export function setLangOnStart() {
  if (localStorage.getItem('lang')) {
    return localStorage.getItem('lang');
  }
  localStorage.setItem('lang', 'eng');
  return 'eng';
}

export function secondFuncOn(arr) {
  const firstKeysRow = document.querySelector('.keyboard__row').children;
  for (let i = 0; i < 14; i += 1) {
    firstKeysRow[i].textContent = arr[i].secondFunc;
  }
}

export function secondFuncOff(arr, language) {
  const firstKeysRow = document.querySelector('.keyboard__row').children;
  for (let i = 0; i < 14; i += 1) {
    firstKeysRow[i].textContent = arr[i][language];
  }
}

export function createKB(arr, language) {
  const kbContainer = document.querySelector('.keyboard');
  let keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 0; i < 14; i += 1) {
    const btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i][language];
    btn.setAttribute('data-code', arr[i].code);
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i].additionClass);
    keysRow.append(btn);
    kbContainer.append(keysRow);
  }
  keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 14; i < 29; i += 1) {
    const btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i][language];
    btn.setAttribute('data-code', arr[i].code);
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i].additionClass);
    keysRow.append(btn);
    kbContainer.append(keysRow);
  }
  keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 29; i < 42; i += 1) {
    const btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i][language];
    btn.setAttribute('data-code', arr[i].code);
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i].additionClass);
    keysRow.append(btn);
    kbContainer.append(keysRow);
  }
  keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 42; i < 55; i += 1) {
    const btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i][language];
    btn.setAttribute('data-code', arr[i].code);
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i].additionClass);
    keysRow.append(btn);
    kbContainer.append(keysRow);
  }
  keysRow = document.createElement('div');
  keysRow.className = 'keyboard__row';
  for (let i = 55; i < arr.length; i += 1) {
    const btn = document.createElement('button');
    btn.className = 'keyboard__btn';
    btn.textContent = arr[i][language];
    btn.setAttribute('data-code', arr[i].code);
    if (Object.prototype.hasOwnProperty.call(arr[i], 'additionClass')) btn.classList.add(arr[i].additionClass);
    keysRow.append(btn);
    kbContainer.append(keysRow);
  }
  const manufacturer = document.createElement('p');
  manufacturer.textContent = 'Made in China';
  manufacturer.className = 'keyboard__made';
  kbContainer.append(manufacturer);
}
