document.body.style.height = '100px';
document.body.style.backgroundColor = 'green';

const divElement = document.createElement('div');

// divElement.style.height = '100px';
// divElement.style.width = '100px';
// divElement.style.backgroundColor = 'yellow';


// with using class
// add class( com-class ) attribute to the div
// divElement.setAttribute('class', 'com-div bg-primary border-0');
divElement.classList.add('com-div', 'bg-primary', 'border-0');
// divElement.classList.add();
// divElement.classList.add();
// divElement.classList.remove('com-div');

// toggle --> put the class if it not there
// removes the class if it there


// append this to body
document.body.append(divElement);


// window utils functions
// const alertReturnValue = alert('Hi This is the session on events and window functions');
// console.log(alertReturnValue);

// const confirmReturnValue = confirm('Your going back and You might loose some data');
// console.log(confirmReturnValue);

// prompt
// const promptReturnValue = prompt('Enter Your Age:');
// console.log(promptReturnValue);


// setTimeout

function timeoutFunc(time, action) {
  console.log(`${time}seconds completed, start ${action}`);
}


// callback function is function which is passed as an argument

const runTimeoutId = setTimeout(timeoutFunc, 4000, 4, 'Running',);

// this will clear timeout
// clearTimeout(runTimeoutId);

// setInterval --> do something frequently with constant interval
// ring the bell every one hour

// function intervalFunc() {
//   console.log('3secs completed, rining the bell');
// }

// const ringId = setInterval(intervalFunc, 3000);
// setTimeout(() => clearInterval(ringId), 6000);

// console.log("Log after the setTimeout and setInterval");

// 





