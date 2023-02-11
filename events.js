// document.body.addEventListener('keydown', (event) => {
//   console.log(event)
// })

// event listener
const btnElement = document.getElementById('btn');

btnElement.addEventListener('click', (e) => {
  // alert('You cliked Me, Thanks!!!');
  console.log(e);
});

const divElement = document.getElementById('div');
divElement.style.height = '100px'
divElement.style.width = '100px'
divElement.style.border = '1px solid'
divElement.addEventListener('mouseover', (event) => {
  divElement.style.backgroundColor = 'yellow';
  console.log(event);
});

divElement.addEventListener('mouseleave', () => {
  divElement.style.backgroundColor = 'transparent';
});

const inpElement = document.getElementById('inp');
inpElement.style.outline = 'none';
inpElement.style.borderRadius = '4px';

inpElement.addEventListener('change', (event) => {
  console.log(inpElement.value);
  // console.log(event);
});

inpElement.addEventListener('focus', (event) => {
  inpElement.style.border = '2px solid blue';
  // console.log(event);
});

inpElement.addEventListener('blur', (event) => {
  inpElement.style.border = '1px solid violet';
  // console.log(event);
});


// keycode without case
// inpElement.addEventListener('keydown', (event) => {
//   console.log(event);
//   // console.log(inpElement.value)
// })

// keycode with case
inpElement.addEventListener('keypress', (event) => {
  console.log(event);
  // console.log(inpElement.value)
})

window.addEventListener('scroll', (e) => {
  console.log('event', e);
});

const formElement = document.getElementById('form');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('##Event##', e);
});


// helper functions
// tagName --> string ( div, tr, a, p ), 
// attributes -> object ( key <-> value )( { src: 'https://same.com/imgae.jpg', alt: 'Panda' } )
// content --> string, "Lorem Ipsum" 
// childs ---> [...htmlelements]
const customCreateElement = (tagName, attributes, content, childs) => {
  // createElement using tagName
  // set attributes using attributes
  // content
  // childs --> append
}



