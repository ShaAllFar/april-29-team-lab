var listOfConversions = [];
var doIt = document.getElementById('form');

var measurement = document.getElementById('measurement');
var measurement2 = document.getElementById('measurement2');
var textBox = document.getElementById('text-box');
var textBox2 = document.getElementById('text-box2');

function conversion(number,type1,type2){
  if (type1 === 'cm' && type2 === 'in') {
    alert(number * 0.39);
  }else if (type1 === 'in' && type2 === 'cm') {
    alert(number * 2.54);
  }else if (type1 === 'm' && type2 === 'cm') {
    alert(number * 6.2137119e06);
  }else if (type1 === 'cm' && type2 === 'm') {
    alert(number / 6.2137119e-06);
  }else if (type1 === 'km' && type2 === 'cm') {
    alert(number / 1e-05);
  }else if (type1 === 'cm' && type2 === 'km') {
    alert(number / 100000);
  }else if (type1 === 'm' && type2 === 'in') {
    alert(number * 63360);
  }else if (type1 === 'in' && type2 === 'm') {
    alert(number * 1.57828281218333e-05);
  }else if (type1 === 'km' && type2 === 'in') {
    alert(number * 39370);
  }else if (type1 === 'km' && type2 === 'm') {
    alert(number * 0.62137);
  }else if (type1 === 'm' && type2 === 'km') {
    alert(number / 0.62137);
  }else if (type1 === 'in' && type2 === 'km') {
    alert(number / 39370);
  }else if (type1 === 'ml' && type2 === 'flOz') {
    alert(number * 0.033814);
  }else if (type1 === 'flOz' && type2 === 'ml') {
    alert(number / 0.033814);
  }else if (type1 === 'kg' && type2 === 'lb') {
    alert(number * 2.2046);
  }else if (type1 === 'lb' && type2 === 'kg') {
    alert(number / 2.2046);
  }else if (type1 === 'mt' && type2 === 'lb') {
    alert(number * 2204.6);
  }else if (type1 === 'lb' && type2 === 'mt') {
    alert(number / 2204.6);
  }else if (type1 === 'ton' && type2 === 'lb') {
    alert(number * 2000);
  }else if (type1 === 'lb' && type2 === 'ton') {
    alert(number * 0.0005);
  }else if (type1 === 'mt' && type2 === 'ton') {
    alert(number * 1.1023);
  }else if (type1 === 'ton' && type2 === 'mt') {
    alert(number / 1.1023);
  }else if (type1 === 'kg' && type2 === 'ton') {
    alert(number * 0.0011023);
  }else if (type1 === 'ton' && type2 === 'kg') {
    alert(number / 0.0011023);
  }else if (type1 === 'kg' && type2 === 'mt') {
    alert(number / 1000);
  }else if (type1 === 'mt' && type2 === 'kg') {
    alert(number / 0.001);
  }else {
    alert('That is not a valid conversion');
  }
}

doIt.addEventListener('submit', calculate);

function calculate(event){
  event.preventDefault();
  var box = parseFloat(event.target.box.value);
  var selectValue = measurement.options[measurement.selectedIndex].value;
  var selectValue2 = measurement2.options[measurement2.selectedIndex].value;
  console.log(box + selectValue + selectValue2);
  // var box2 = parseFloat(event.target.box2.value);
  conversion(box, selectValue, selectValue2);
}
