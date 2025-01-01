'use strict';

const labelNames = [
  'First name',
  'Last name',
  'Email',
  'Password',
  'Email',
  'Password',
];

const field = document.getElementsByClassName('field');
const input = document.querySelectorAll('input');

for (let i = 0; i < field.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = labelNames[i];
  input[i].setAttribute('placeholder', labelNames[i]);

  field[i].insertBefore(label, field[i].firstChild);
}
