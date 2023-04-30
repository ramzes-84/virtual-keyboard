import keyBase from './keyboard-base.js';
import {
  createPageStructure, createKB, setLangOnStart, secondFuncOn, secondFuncOff,
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
}

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
  // const caretPos = monitor.selectionStart;
  if (event.target.tagName === 'BUTTON') {
    if (event.type === 'mousedown') {
      animateKey();
      switch (event.target.dataset.code) {
        case 'Space':
          monitor.textContent += ' ';
          break;
        case 'CapsLock':
          changeCharsCase();
          break;
        case 'Tab':
          monitor.textContent += '\t';
          break;
        case 'Enter':
          monitor.textContent += '\n';
          break;
        case 'Backspace': {
          // const textBeforeCaret = monitor.textContent.slice(0, caretPos - 1);
          // const textAfterCaret = monitor.textContent.slice(caretPos);
          // caretPos = monitor.selectionStart;
          // monitor.textContent = textBeforeCaret + textAfterCaret;
          // return;

          // const fakeEvent = new KeyboardEvent('keydown', {
          //   bubbles: true,
          //   code: 'Backspace',
          // });
          // console.dir(fakeEvent);
          // document.dispatchEvent(fakeEvent);
          break;
        }
        case 'Delete':
          break;
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
          monitor.textContent += event.target.textContent;
          break;
      }
    } else if (event.type === 'mouseup') {
      deAnimateKey();
      switch (event.target.dataset.code) {
        case 'Backspace':
          // monitor.selectionStart = caretPos;
          // monitor.focus();
          // return;
          break;
        case 'ShiftLeft':
          changeCharsCase();
          secondFuncOff(keyBase, lang);
          break;
        case 'ShiftRight':
          changeCharsCase();
          secondFuncOff(keyBase, lang);
          break;
        case 'ArrowLeft': {
          // monitor.selectionStart = caretPos - 1;
          // monitor.focus();
          // return;
          // const endOfText = monitor.textContent.length;
          // monitor.setSelectionRange(endOfText - 1, endOfText - 1);
          // monitor.focus();
          break;
        }
        default:
          break;
      }
    }
  }
  const endOfText = monitor.textContent.length;
  monitor.setSelectionRange(endOfText, endOfText);
  // monitor.selectionStart = caretPos + 1;
  monitor.focus();
}

function markPhysicallyPushedKey() {
  event.preventDefault();
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
  const pushedKey = keyboard.querySelector(`[data-code=${event.code}]`);
  if (event.type === 'keydown') {
    markPhysicallyPushedKey();
    switch (event.code) {
      case 'Space':
        monitor.textContent += ' ';
        break;
      case 'CapsLock':
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
      case 'Delete':
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
        monitor.textContent += pushedKey.textContent;
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
  const endOfText = monitor.textContent.length;
  monitor.setSelectionRange(endOfText, endOfText);
  monitor.focus();
}

keyboard.addEventListener('mousedown', typeTextMouse);
keyboard.addEventListener('mouseup', typeTextMouse);
document.addEventListener('keydown', typeTextKeyboard);
document.addEventListener('keyup', typeTextKeyboard);
