          const formValidation=()=>{
                  let data={
                      username:document.forms["form"]["email"].value,
                      password:document.forms["form"]["password"].value
                  }
                  console.log(data);
                  var valid=true
                  if(data.username.length===0&&data.password.length===0){
                      alert( "Login credentials are required."); 
                      valid=false
                  }else{
                      if(data.username.length===0){
                      alert( "Email address is required");
                      valid=false
                      }else{
                          if (!(data.username).match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)){
                              alert( "You must enter a valid email address."); 
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
                  }
                  if(valid==true){
                      alert( "Entered details are valid"); 
                  }
                  console.log(valid);
              return valid
          }