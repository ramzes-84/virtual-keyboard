import keyBase from './keyboard-base.js';
import {
  createPageStructure, createKB, setLangOnStart,
  secondFuncOn, secondFuncOff, typeText, doBackspace, doDelete,
} from './create-kb.js';

let isCapsLkOn = false;
let lang = setLangOnStart();

createPageStructure();
createKB(keyBase, lang);

const keyboard = document.querySelector('.keyboard');
const monitor = document.querySelector('.input-area__text');

function changeLang() {
  let newLang;
  if (localStorage.getItem('lang') === 'eng') {
    newLang = 'rus';
  } else {
    newLang = 'eng';
  }
  localStorage.setItem('lang', newLang);
  lang = newLang;
  keyboard.innerHTML = '';
  createKB(keyBase, lang);
  isCapsLkOn = false;
}

function changeCharsCase() {
  const keys = document.querySelectorAll('.keyboard__btn_char');
  if (!isCapsLkOn) {
    keys.forEach((item) => {
      const node1 = item;
      node1.textContent = item.textContent.toUpperCase();
    });
  } else {
    keys.forEach((item) => {
      const node2 = item;
      node2.textContent = item.textContent.toLowerCase();
    });
  }
  isCapsLkOn = !(isCapsLkOn);
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

function typeTextMouse() {
  let caretPos = monitor.selectionStart;
  const textAtStart = monitor.textContent;
  if (event.target.tagName === 'BUTTON') {
    if (event.type === 'mousedown') {
      animateKey();
      switch (event.target.dataset.code) {
        case 'Space':
          monitor.textContent = typeText(textAtStart, caretPos, ' ');
          caretPos += 1;
          break;
        case 'CapsLock':
          changeCharsCase();
          break;
        case 'Tab':
          monitor.textContent = typeText(textAtStart, caretPos, '\t');
          caretPos += 1;
          break;
        case 'Enter':
          monitor.textContent = typeText(textAtStart, caretPos, '\n');
          caretPos += 1;
          break;
        case 'Backspace': {
          [monitor.textContent, caretPos] = doBackspace(textAtStart, caretPos);
          break;
        }
        case 'Delete': {
          [monitor.textContent, caretPos] = doDelete(textAtStart, caretPos);
          break;
        }
        case 'ShiftLeft':
          changeCharsCase();
          secondFuncOn(keyBase);
          break;
        case 'ShiftRight':
          changeCharsCase();
          secondFuncOn(keyBase);
          break;
        case 'ControlLeft':
          break;
        case 'ControlRight':
          break;
        case 'MetaLeft':
          break;
        case 'AltLeft':
          break;
        case 'AltRight':
          break;
        case 'none':
          changeLang();
          break;
        default:
          monitor.textContent = typeText(textAtStart, caretPos, event.target.textContent);
          caretPos += 1;
          break;
      }
    } else if (event.type === 'mouseup') {
      deAnimateKey();
      switch (event.target.dataset.code) {
        case 'Backspace':
          break;
        case 'ShiftLeft':
          changeCharsCase();
          secondFuncOff(keyBase, lang);
          break;
        case 'ShiftRight':
          changeCharsCase();
          secondFuncOff(keyBase, lang);
          break;
        default:
          break;
      }
    }
  }
  monitor.focus();
  monitor.setSelectionRange(caretPos, caretPos);
}

function markPhysicallyPushedKey() {
  const physicallyPushedKey = document.querySelector(`[data-code=${event.code}]`);
  switch (event.code) {
    case 'CapsLock':
      physicallyPushedKey.classList.toggle('keyboard__btn_active');
      break;
    default:
      physicallyPushedKey.classList.add('keyboard__btn_active');
      break;
  }
}

function unmarkPhysicallyPushedKey() {
  const physicallyPushedKey = document.querySelector(`[data-code=${event.code}]`);
  switch (event.code) {
    case 'CapsLock':
      break;
    default:
      physicallyPushedKey.classList.remove('keyboard__btn_active');
      break;
  }
}

function typeTextKeyboard() {
  let caretPos = monitor.selectionStart;
  const textAtStart = monitor.textContent;
  const pushedKey = keyboard.querySelector(`[data-code=${event.code}]`);
  if (event.type === 'keydown') {
    event.preventDefault();
    markPhysicallyPushedKey();
    switch (event.code) {
      case 'Space':
        monitor.textContent = typeText(textAtStart, caretPos, ' ');
        caretPos += 1;
        break;
      case 'CapsLock':
        changeCharsCase();
        break;
      case 'Tab':
        monitor.textContent = typeText(textAtStart, caretPos, '\t');
        caretPos += 1;
        break;
      case 'Enter':
        monitor.textContent = typeText(textAtStart, caretPos, '\n');
        caretPos += 1;
        break;
      case 'Backspace':
        [monitor.textContent, caretPos] = doBackspace(textAtStart, caretPos);
        break;
      case 'Delete':
        [monitor.textContent, caretPos] = doDelete(textAtStart, caretPos);
        break;
      case 'ShiftLeft': {
        changeCharsCase();
        secondFuncOn(keyBase);
        const altKey = document.querySelector('[data-code="AltLeft"]');
        if (altKey.classList.contains('keyboard__btn_active')) {
          changeLang();
        }
        break;
      }
      case 'ShiftRight': {
        changeCharsCase();
        secondFuncOn(keyBase);
        const altKey = document.querySelector('[data-code="AltRight"]');
        if (altKey.classList.contains('keyboard__btn_active')) {
          changeLang();
        }
        break;
      }
      case 'ControlLeft':
        break;
      case 'ControlRight':
        break;
      case 'MetaLeft':
        break;
      case 'AltLeft': {
        const shiftKey = document.querySelector('[data-code="ShiftLeft"]');
        if (shiftKey.classList.contains('keyboard__btn_active')) {
          changeLang();
        }
        break;
      }
      case 'AltRight': {
        const shiftKey = document.querySelector('[data-code="ShiftRight"]');
        if (shiftKey.classList.contains('keyboard__btn_active')) {
          changeLang();
        }
        break;
      }
      case 'none':
        break;
      default:
        monitor.textContent = typeText(textAtStart, caretPos, pushedKey.textContent);
        caretPos += 1;
        break;
    }
  } else if (event.type === 'keyup') {
    switch (event.code) {
      case 'ShiftLeft':
        changeCharsCase();
        secondFuncOff(keyBase, lang);
        break;
      case 'ShiftRight':
        changeCharsCase();
        secondFuncOff(keyBase, lang);
        break;
      default:
        break;
    }
    unmarkPhysicallyPushedKey();
  }
  monitor.focus();
  monitor.setSelectionRange(caretPos, caretPos);
}

keyboard.addEventListener('mousedown', typeTextMouse);
keyboard.addEventListener('mouseup', typeTextMouse);
document.addEventListener('keydown', typeTextKeyboard);
document.addEventListener('keyup', typeTextKeyboard);
