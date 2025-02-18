const order=document.querySelectorAll('.order-button');
order.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        setTimeout(()=>{
            window.location.href="form.html";
          },2000);
       alert("order is Placed Successfully!");

    });
});