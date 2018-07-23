const $ = require('jquery');

import greetings from './say-hello';

console.log(greetings);

$('#test').append(`<h1>${greetings}</h1>`);
$('#test').css({'background-color':'blue','color':'yellow'});