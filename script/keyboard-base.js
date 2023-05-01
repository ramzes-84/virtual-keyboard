const keyBase = [
  {
    code: 'Backquote', eng: '`', rus: '`', uniLang: true, secondFunc: '~',
  },
  {
    code: 'Digit1', eng: '1', rus: '1', uniLang: true, secondFunc: '!', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Digit2', eng: '2', rus: '2', uniLang: true, secondFunc: '@', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Digit3', eng: '3', rus: '3', uniLang: true, secondFunc: '#', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Digit4', eng: '4', rus: '4', uniLang: true, secondFunc: '$', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Digit5', eng: '5', rus: '5', uniLang: true, secondFunc: '%', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Digit6', eng: '6', rus: '6', uniLang: true, secondFunc: '^', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Digit7', eng: '7', rus: '7', uniLang: true, secondFunc: '&', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Digit8', eng: '8', rus: '8', uniLang: true, secondFunc: '*', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Digit9', eng: '9', rus: '9', uniLang: true, secondFunc: '(', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Digit0', eng: '0', rus: '0', uniLang: true, secondFunc: ')', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Minus', eng: '-', rus: '-', uniLang: true, secondFunc: '_', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Equal', eng: '=', rus: '=', uniLang: true, secondFunc: '+', additionClass: 'keyboard__btn_digit',
  },
  {
    code: 'Backspace', eng: 'Backspace', rus: 'Backspase', uniLang: true, secondFunc: 'Backspace', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'Tab', eng: 'Tab', rus: 'Tab', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'KeyQ', eng: 'q', rus: 'й', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyW', eng: 'w', rus: 'ц', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyE', eng: 'e', rus: 'у', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyR', eng: 'r', rus: 'к', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyT', eng: 't', rus: 'е', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyY', eng: 'y', rus: 'н', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyU', eng: 'u', rus: 'г', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyI', eng: 'i', rus: 'ш', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyO', eng: 'o', rus: 'щ', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyP', eng: 'p', rus: 'з', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'BracketLeft', eng: '[', rus: 'х', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'BracketRight', eng: ']', rus: 'ъ', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'Backslash', eng: '\\', rus: '|', uniLang: false, secondFunc: '',
  },
  {
    code: 'Delete', eng: 'Del', rus: 'Del', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'CapsLock', eng: 'CapsLk', rus: 'CapsLk', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'KeyA', eng: 'a', rus: 'ф', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyS', eng: 's', rus: 'ы', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyD', eng: 'd', rus: 'в', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyF', eng: 'f', rus: 'а', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyG', eng: 'g', rus: 'п', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyH', eng: 'h', rus: 'р', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyJ', eng: 'j', rus: 'о', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyK', eng: 'k', rus: 'л', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyL', eng: 'l', rus: 'д', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'Semicolon', eng: ';', rus: 'ж', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'Quote', eng: "'", rus: 'э', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'Enter', eng: 'Enter', rus: 'Enter', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wider',
  },
  {
    code: 'ShiftLeft', eng: 'Shift', rus: 'Shift', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'KeyZ', eng: 'z', rus: 'я', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyX', eng: 'x', rus: 'ч', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyC', eng: 'c', rus: 'с', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyV', eng: 'v', rus: 'м', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyB', eng: 'b', rus: 'и', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyN', eng: 'n', rus: 'т', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'KeyM', eng: 'm', rus: 'ь', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'Comma', eng: ',', rus: 'б', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'Period', eng: '.', rus: 'ю', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'Slash', eng: '/', rus: '.', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_char',
  },
  {
    code: 'ArrowUp', eng: '↑', rus: '↑', uniLang: true, secondFunc: '',
  },
  {
    code: 'ShiftRight', eng: 'Shift', rus: 'Shift', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'ControlLeft', eng: 'Ctrl', rus: 'Ctrl', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'MetaLeft', eng: 'Win', rus: 'Win', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'none', eng: 'RU', rus: 'EN', uniLang: false, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'AltLeft', eng: 'Alt', rus: 'Alt', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'Space', eng: 'Space', rus: 'Space', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_widest',
  },
  {
    code: 'AltRight', eng: 'Alt', rus: 'Alt', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
  {
    code: 'ArrowLeft', eng: '←', rus: '←', uniLang: true, secondFunc: '',
  },
  {
    code: 'ArrowDown', eng: '↓', rus: '↓', uniLang: true, secondFunc: '',
  },
  {
    code: 'ArrowRight', eng: '→', rus: '→', uniLang: true, secondFunc: '',
  },
  {
    code: 'ControlRight', eng: 'Ctrl', rus: 'Ctrl', uniLang: true, secondFunc: '', additionClass: 'keyboard__btn_wide',
  },
];

export default keyBase;
