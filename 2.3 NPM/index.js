var generateName = require('sillyname');

import generateName from 'sillyname';
var sillyName = generateName();

console.log(sillyName);


//one of these can run at a time, either the top one or the bottom one

import { randomSuperhero} from 'superheroes';

const name = randomSuperhero();
console.log(`I am ${name}!`);
