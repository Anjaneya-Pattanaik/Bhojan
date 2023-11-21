const contactForm=document.querySelector('.contact-form');

let  Name=document.getElementById('nameu');
let  mail=document.getElementById('mail');
let  type=document.getElementById('type');
let  size=document.getElementById('size');
let  date=document.getElementById('date');
let  time=document.getElementById('time');

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData={
        Name: Name.value,
        Mail: mail.value,
        Type: type.value,
        Size: size.value,
        Date: date.value,
        Time: time.value
    }
    
    let xhr= new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText=='success'){
            alert('Reservation Successful! Check your Mail');
            Name.value = '';
            mail.value = '';
            type.value = '';
            size.value = '';
            date.value = '';
            time.value = '';
        }else{
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));
})