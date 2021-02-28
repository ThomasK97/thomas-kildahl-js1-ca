console.log("logged in nr 2");

//js for contact siden


function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var adress = document.getElementById("adress").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    var text;

    if(name.length < 5){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
      }
      if(subject.length < 10){
        text = "Please valid Subject";
        error_message.innerHTML = text;
        return false;
      }

      if(email.indexOf("@") == -1 || email.length < 5){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
      }
      if(adress.length <= 25){
        text = "Please Enter More Than 25 Characters in Your Adress";
        error_message.innerHTML = text;
        return false;
      }
      alert("Form Submitted Successfully!");
      return true;
 

}

    



    
    

    
    
   
