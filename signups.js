const formValidation=()=>{
  let data={
      name:document.forms["form"]["name"].value,
      age:document.forms["form"]["age"].value,
      username:document.forms["form"]["email"].value,
      password:document.forms["form"]["password"].value,
      cnfpassword:document.forms["form"]["cnfpassword"].value
  }
  console.log(data);
  var valid=true

  if(data.name.length===0){
    alert( "Name is required");
    valid=false
    }else{
        if (!(data.username).match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
            alert( "You must enter a valid email address."); 
            valid=false
        }
    }
  
    if(!data.age){
      alert( "Age is required");
      valid=false
      }else{
          if (!(data.age).match(/^[0-9]+$/)){
              alert( "You must enter a valid age."); 
              valid=false
          }
      }
      if(data.password.length===0){
          alert( "Password is required");
          valid=false
      }else{
          if (!(data.password).match(/^[a-zA-Z0-9@#$%&]{8,20}$/)){
              alert( "You must enter a valid password"); 
              valid=false
          }
      }
      if(data.cnfpassword.length===0){
        alert( "Confirm Password is required");
        valid=false
    }else{
        if (!(data.cnfpassword).match(/^[a-zA-Z0-9@#$%&]{8,20}$/)){
            alert( "You must enter a valid password"); 
            valid=false
        }
    }
    if(data.cnfpassword!=data.password)
    {
      alert("Password and Confirm Password do not match");
      valid=false
    }
  if(valid==true){
      alert( "Entered details are valid"); 
  }
  console.log(valid);
return valid
}