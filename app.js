const date = document.getElementById('date');
const img = document.querySelector('body > aside > form > img.img2');
const imgTwo = document.querySelector('body > aside > form > img.img4');
const password = document.getElementById('password');
const inputs = document.querySelectorAll('input');
const submit = document.getElementById('submit');
date.addEventListener('focus',()=>{
   
    date.type = 'date';
    date.style.textAlign = 'center';
    img.style.display = 'none';
    date.setAttribute('class','add');
    date.style.border = '#2EC4B6 2px solid';
    date.style.outline = 'none';
})
date.addEventListener('blur',()=>{
   
    date.type = 'date';
    date.style.textAlign = 'center';
    img.style.display = 'none';
    date.style.border = 'rgb(192, 189, 189)2px solid';
})
imgTwo.addEventListener('click',()=>{
    password.type = 'text';
   setTimeout(() => {
    password.type = 'password';
   },1000);
})
submit.addEventListener('click',(event)=>{
    let messages = [];
    inputs.forEach((input)=>{
        if(input.value === ''){
            messages.push('please fill all fields')
        }
    })
    if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/)){
        messages.push('please enter at least one number,uppercase and lowercase alphabet with at least a special character and must be 8-15 in length')
    }
    if(messages.length > 0){
        event.preventDefault();
        alert(messages)
    }
     
})
