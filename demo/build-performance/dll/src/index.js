import _ from 'lodash';

const str = _.join(['hello', 'webpack'], ' ');

const div = document.createElement('div');
div.textContent = str;
document.body.appendChild(div);
