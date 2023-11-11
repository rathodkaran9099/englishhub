function emailSend(){

	var userName = document.getElementById('name').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName  +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "englishhub1755@gmail.com",
    Password : "4FA28D2AD5C4128E6D413ACC401CA6EB4024",
    To : 'rkaran9099@gmail.com',
    From : "englishhub1755@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}
