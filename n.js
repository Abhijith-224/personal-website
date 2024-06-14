const form = document.querySelector('#contactfrm');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {

  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
  <br> Subject: ${subject.value}<br> Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abhijiths2907@gmail.com",
    Password: "CDAD1D37D53E7E4FC1F1A71C85C37D65D011",
    To: 'abhijiths2907@gmail.com',
    From: "abhijiths2907@gmail.com",
    Subject: "hgfhtfghd",
    Body: bodyMessage
  }).then(
   
    message => {
      if(message == "OK"){
        Swal.fire({
          title: "Success!",
          text: "Message Send Successfully!",
          icon: "success"
        });
      }
    }
  );
}

// form.addEventListener("submit", (e) => {
//   alert("ok")
//   e.preventDefault();

//   sendEmail();

// });
