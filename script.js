function onClick(element){
   alert('Ninja was liked');
}

function logOut(element){
   if(element.innerText === "Login"){
       element.innerText="Logout";
   } else{
       element.innerText="Login";
   }
}

function hide(element){
    element.remove();
}