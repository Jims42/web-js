// document.querySelector('#mail');
const mail=document.getElementById('mail');
const myForm=document.querySelector('#myForm');
const errorsUl=document.querySelector('#error ul');
console.log(mail);

myForm.addEventListener('submit',function(event){
    event.preventDefault;

let conflicts=[];

 const mailValue=mail.value.trim();
 
})

if(mailValue.length < 5){
    conflicts.push('la longueur de l\'adresse email est trop courte');
    alert('PAS BON');
}
if(mailValue.includes('@')){
    conflicts.push('@ manquant');
    alert('@ MANQUANT');
}
// 3 VERSION FOR
// VERSION 1
// for(let i= 0;conflicts.length;i++){}
// VERSION 2
// conflicts.array.forEach(element => {
    
// });
// VERSION 3/3
if(conflicts >0){
    for(let oneError of conflicts){
        const li=document.createComment('li');
        li.textContent=oneError;
        errorsUl.appendChild(li);

    }
}