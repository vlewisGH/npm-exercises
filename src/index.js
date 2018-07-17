const $ = require('jquery');

const sayHello = () => 'hello';

$('#test').append(`<h1>${sayHello()}</h1>`);
$('#test').css({'background-color':'blue','color':'yellow'});