import keyBase from './keyboard-base.js';
import { createPageStructure, createKB, setLangOnStart } from './create-kb.js';

let isCapsLkOn = false;
let lang = setLangOnStart();

createPageStructure();
createKB(keyBase, lang);

const keyboard = document.querySelector('.keyboard');
const monitor = document.querySelector('.input-area__text');

function changeCharsCase() {
  const keys = document.querySelectorAll('.keyboard__btn_char');
  if (!isCapsLkOn) {
    keys.forEach((item) => {
      item.textContent = item.textContent.toUpperCase();
    });
  } else {
    keys.forEach((item) => {
      item.textContent = item.textContent.toLowerCase();
    });
  }
  isCapsLkOn = !(isCapsLkOn);
}

function typeText() {
  if (event.target.tagName === 'BUTTON') {
    switch (event.target.textContent) {
      case 'Space':
        monitor.textContent += ' ';
        break;
      case 'CapsLk':
        changeCharsCase();
        break;
      case 'Tab':
        monitor.textContent += '\t';
        break;
      case 'Enter':
        monitor.textContent += '\n';
        break;
      case 'Backspace':
        break;
      case 'Del':
        break;
      case 'Shift':
        break;
      case 'Ctrl':
        break;
      case 'Win':
        break;
      case 'Alt':
        break;
      default:
        monitor.textContent += event.target.textContent;
        break;
    }
  }
}

function animateKey() {
  if (event.target.tagName === 'BUTTON') {
    const btn = event.target;
    switch (btn.textContent) {
      case 'CapsLk':
        btn.classList.toggle('keyboard__btn_active');
        break;
      default:
        btn.classList.add('keyboard__btn_active');
        break;
    }
  }
}

function deAnimateKey() {
  if (event.target.tagName === 'BUTTON') {
    const btn = event.target;
    switch (btn.textContent) {
      case 'CapsLk':
        break;
      default:
        btn.classList.remove('keyboard__btn_active');
        break;
    }
  }
}

keyboard.addEventListener('click', typeText);
keyboard.addEventListener('mousedown', animateKey);
keyboard.addEventListener('mouseup', deAnimateKey);
