const pay=document.querySelector(".btn-primary");
const form=document.querySelector('form');
pay.addEventListener('click',(e)=>{
    e.preventDefault();
    // Check if all required inputs are filled
    const email = document.querySelector('#inputEmail4').value;
    const password = document.querySelector('#inputPassword4').value;
    const address = document.querySelector('#inputAddress').value;
    const city = document.querySelector('#inputCity').value;
    const state = document.querySelector('#inputState').value;
    const zip = document.querySelector('#inputZip').value;

    if (!email || !password || !address || !city || !state || !zip) {
        alert('Please fill in all required fields.');
        return;
    }

    alert("Payment is Done Successfully!");
   const div=document.createElement('div');
   div.innerHTML="Payment is Done Successfully!"+"<br>"+"your order number is"+"<br>"+Math.floor(Math.random()*1000000);
   div.className="success";
   document.body.appendChild(div);
   form.reset();
});
