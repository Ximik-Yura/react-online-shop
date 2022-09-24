const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus'); 
const h1 = document.querySelector('h1')

let count = 4;

h1.innerText = count;

function render {
  h1.innerText = count;
  if (count>0) {
  minusBtn.removeAttribute('disable');
  }
  else {
    minusBtn.setAttribute('disable', '');
  }
}

plusBtn.addEventListener('click', ()=>{
  count++;
  render();
})
minusBtn.addEventListener('click', ()=>{
  count--;
  render();
})