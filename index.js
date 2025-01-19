const alertTemperature = () => {
  const FahrenheitTemp = prompt('Enter the FahrenheitTemp and we will convert it to Celsius');
  const Fahrenheit = Number(FahrenheitTemp);

  const CelsiusTemp = Math.round((Fahrenheit - 32) * (5/9));
  const message = `Fahrenheit Temp: ${Fahrenheit} Celsius Temp: ${CelsiusTemp}`;
  if(Fahrenheit < 32) {
    alert(message + ' It is very cold');
  } else if (Fahrenheit >= 32 && Fahrenheit < 64) {
    alert(message + ' It is cold');
  } else if (Fahrenheit >= 64 && Fahrenheit < 86) {
    alert(message + ' It is warm');
  } else if (Fahrenheit >= 86 && Fahrenheit < 100) {
    alert(message + ' It is hot');
  } else {
    alert(message + ' It is very hot');
  }
};
alertTemperature();

//Extra Pratice
function getRandomInt(max) {
  return Math.round(Math.random() * max);
};
console.log(getRandomInt(1235245));