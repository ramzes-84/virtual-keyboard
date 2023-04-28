import keyBase from './keyboard-base.js';
import { createPageStructure, createKB, setLangOnStart } from './create-kb.js';

let isCapsLkOn = false;
const lang = setLangOnStart();

createPageStructure();
createKB(keyBase, lang);

const keyboard = document.querySelector('.keyboard');
const monitor = document.querySelector('.input-area__text');
// let caretPos;

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

function typeTextMouse() {
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
          break;
        case 'ShiftRight':
          changeCharsCase();
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
          break
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
          break;
        case 'ShiftRight':
          changeCharsCase();
          break;
        default:
          break;
      }
    }
  }
  const endOfText = monitor.textContent.length;
  monitor.setSelectionRange(endOfText, endOfText);
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
      case 'ShiftLeft':
        changeCharsCase();
        break;
      case 'ShiftRight':
        changeCharsCase();
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
        break
      default:
        monitor.textContent += pushedKey.textContent;
        break;
    }
    markPhysicallyPushedKey();
  } else if (event.type === 'keyup') {
    switch (event.code) {
      case 'ShiftLeft':
        changeCharsCase();
        break;
      case 'ShiftRight':
        changeCharsCase();
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

keyboard.addEventListener('mousedown', typeTextMouse);
keyboard.addEventListener('mouseup', typeTextMouse);
document.addEventListener('keydown', typeTextKeyboard);
document.addEventListener('keyup', typeTextKeyboard);
