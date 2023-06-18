const myForm = document.getElementById("main-form");
const myh2 = document.querySelector("h2");
const emailInput = document.querySelector("emailInput");
let valid, empty;

const validEmails = ["prova@com", "pierpaolo@alice.it", "fierobecco@gmail.com", "soysauce@hotmail.com", "stanlio@olio.it"]

myForm.addEventListener ("submit",
    function(event){
        event.preventDefault();
        console.log(emailInput);

        let userEmail = document.getElementById("emailInput").value;
        myh2.innerHTML = "";
        console.log(userEmail.value);
        let element;
        for (let index = 0; index < validEmails.length; index++) {
            element = validEmails[index];
            if (element == userEmail){
                valid = true;
            }
            else if(userEmail == ""){
                empty = true;
            }
        }
        if (valid){
            myh2.append("Email Valida");
            userEmail.value = "";

        }
        //!Questo con il required è inutile
        else if(empty){
            myh2.append("Prego inserire una mail");
            userEmail.value = "";
        }
        else{
            myh2.append("Email Invalida");
            userEmail.value = "";

        }
    }


)