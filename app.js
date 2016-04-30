
var listOfConversions = [];
var doIt = document.getElementById('form');

var measurement = document.getElementById('measurement');
var measurement2 = document.getElementById('measurement2');
var textBox = document.getElementById('text-box');
var textBox2 = document.getElementById('text-box2');
var list = document.getElementById('list');
var clear = document.getElementById('clear');
clear.addEventListener('click', clearList);

function clearList(){
  while (list.children.length > 0) {
    list.removeChild(list.children[0]);
  }
}
function conversion(number,type1,type2){
  if (type1 === 'cm' && type2 === 'in') {
    return(number * 0.39);
  }else if (type1 === 'in' && type2 === 'cm') {
    return(number * 2.54);
  }else if (type1 === 'm' && type2 === 'cm') {
    return(number * 6.2137119e06);
  }else if (type1 === 'cm' && type2 === 'm') {
    return(number * 6.2137119e-06);
  }else if (type1 === 'km' && type2 === 'cm') {
    return(number / 1e-05);
  }else if (type1 === 'cm' && type2 === 'km') {
    return(number / 100000);
  }else if (type1 === 'm' && type2 === 'in') {
    return(number * 63360);
  }else if (type1 === 'in' && type2 === 'm') {
    return(number * 1.57828281218333e-05);
  }else if (type1 === 'km' && type2 === 'in') {
    return(number * 39370);
  }else if (type1 === 'km' && type2 === 'm') {
    return(number * 0.62137);
  }else if (type1 === 'm' && type2 === 'km') {
    return(number / 0.62137);
  }else if (type1 === 'in' && type2 === 'km') {
    return(number / 39370);
  }else if (type1 === 'ml' && type2 === 'flOz') {
    return(number * 0.033814);
  }else if (type1 === 'flOz' && type2 === 'ml') {
    return(number / 0.033814);
  }else if (type1 === 'kg' && type2 === 'lb') {
    return(number * 2.2046);
  }else if (type1 === 'lb' && type2 === 'kg') {
    return(number / 2.2046);
  }else if (type1 === 'mt' && type2 === 'lb') {
    return(number * 2204.6);
  }else if (type1 === 'lb' && type2 === 'mt') {
    return(number / 2204.6);
  }else if (type1 === 'ton' && type2 === 'lb') {
    return(number * 2000);
  }else if (type1 === 'lb' && type2 === 'ton') {
    return(number * 0.0005);
  }else if (type1 === 'mt' && type2 === 'ton') {
    return(number * 1.1023);
  }else if (type1 === 'ton' && type2 === 'mt') {
    return(number / 1.1023);
  }else if (type1 === 'kg' && type2 === 'ton') {
    return(number * 0.0011023);
  }else if (type1 === 'ton' && type2 === 'kg') {
    return(number / 0.0011023);
  }else if (type1 === 'kg' && type2 === 'mt') {
    return(number / 1000);
  }else if (type1 === 'mt' && type2 === 'kg') {
    return(number / 0.001);
  }else {
    return(false);
  }
}

doIt.addEventListener('submit', calculate);
// function isANumber() {
//
// }
function calculate(event){
  event.preventDefault();
  var box = parseFloat(event.target.box.value);
  var selectValue = measurement.options[measurement.selectedIndex].value;
  var selectValue2 = measurement2.options[measurement2.selectedIndex].value;
  if (isNaN(box)) {
    alert('Please put a number in the box!!!');
    return;
  }
  console.log(box + selectValue + selectValue2);
  // var box2 = parseFloat(event.target.box2.value);
  var converted = conversion(box, selectValue, selectValue2);
  display(converted, box, selectValue, selectValue2);
}
function display(convertedValue, originalValue, source, target){
  roundedValue = (Math.round(convertedValue * 1000)) / 1000;

  // alert(roundedValue);
  var li = document.createElement('li');
  li.textContent = originalValue + source + ' equals ' + roundedValue.toFixed(3) + target;
  list.appendChild(li);
}
// "1 inch equals 2.540 centimeters"
