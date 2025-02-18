const button=document.querySelector(".btn");
button.addEventListener("click",(e)=>{
  e.preventDefault();
  const form=e.target.form;
  const seatnum=Number(form.querySelector('input[type="number"]').value);
  const name=form.querySelector('input[type="text"]').value;
  const phone=form.querySelector('input[type="tel"]').value;  
  if(name.trim()===""|| (phone.trim()===""&& phone.length==="10")|| seatnum<1||seatnum>5)
  {
    alert("enter valid inputs!");
    form.reset();
    return;
  }


  let assignseat=[];
  for(let i=1;i<=seatnum;i++)
    {
      assignseat.push(i);
    }
  const button=document.createElement("button");
  const div=document.createElement("div");
  div.className="seats"
  div.innerHTML="<h1>"+name.toUpperCase()+"</h1>"+" "+"your seats assigned to you are:" +"  "+assignseat.join(", ")+" ";
  button.innerHTML="checkout";
  button.className="btn";
  document.body.append(div);
  document.body.appendChild(button);
  form.reset();
  button.addEventListener("click",(e)=>{
    e.preventDefault();
    const div=document.createElement("div");
    div.innerHTML="<button>"+"Pay"+"$"+seatnum*40+"</button>";
    div.className="checkout";
    document.body.appendChild(div);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    div.remove();
    button.remove();
    
  });
});

