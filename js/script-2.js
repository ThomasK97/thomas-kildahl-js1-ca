console.log("logged in nr 2");

//js for contact siden


$(document).ready(function(){
    $('.submit').click(function (event){
      event.preventDefault()
      console.log('clicked button')

      var name = $('.name').val()
      var subject = $('.subject').val()
      var email = $('.email').val()
      var address = $('.address').val()
      var statusElement = $('.status')
      statusElement.empty()



      if(name.length >= 1) {
          statusElement.append('<div> Name is valid</div>')
      } else {
          statusElement.append('<div> Name is not valid</div>')
      }  
      
      if(subject.length >= 10) {
          statusElement.append('<div> Subject is valid</div>')
      } else {
          statusElement.append('<div> Subject is not valid</div>')
      }

      if(email.length >= 5 && email.includes('@') && email.includes('.')){
          statusElement.append('<div> Email is valid</div>')
      } else {
          statusElement.append('<div> Email is not valid</div>')
      }

      if(address.length >= 25){
          statusElement.append('<div> Address is valid</div>')
      } else {
          statusElement.append('<div> Address is not valid</div>')
      }
    })
  })

