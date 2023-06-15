const myForm = document.getElementById("main-form");
const myh1 = document.querySelector("h1");


const validEmails = ["prova@com", "pierpaolo@alice.it", "fierobecco@gmail.com", "soysauce@hotmail.com", "stanlio@olio.it"]

myForm.addEventListener ("submit",
    function(event){
        let userEmail = document.getElementById("emailInput");
        console.log(userEmail.value);

        for (let index = 0; index < validEmails.length; index++) {
            const element = validEmails[index];
            
            if (userEmail.value == element){
                myh1.append("Email Valida");
            }
            else{
                myh1.append("Email Valida");

            }

            
        }

        event.preventDefault();
        console.log("Submitted");

    }


)