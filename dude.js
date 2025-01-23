let setData = [];

let signup = document.getElementById ("signup"); 
let userName = document.getElementById ("firstname");
let userEmail = document.getElementById ("emails");
let userPassword = document.getElementById ("password");
let userConfirmPassword = document.getElementById ("confirm");
let login = document.getElementById ("login");
let emaillogin = document.getElementById ("loginemail");
let passwordlogin = document.getElementById ("loginpassword");
let signupContainer = document.getElementById ("signupForm");
let loginContainer = document.getElementById ("login");
let showsignup = document.getElementById ("signup");
let showlogin = document.getElementById ("showlogin");

function isValidPassword (password) {
    let passwordSyntax = /^.{3}$/;
    return passwordSyntax.test (password);
}

signup.addEventListener ("submit", function (event) {
    event.preventDefault();
    let names = userName.value.trim();
    let email = userEmail.value.trim();
    let password = userPassword.value.trim();
    let confirmPassword = userConfirmPassword.value.trim();
    if (!names || !email || !password || !confirmPassword) {
        swal("Fill Out All Input Field!", "Press OK For Retry!", "error");
        // alert("All fields are required!");
        return; 
    } 

    let id = Number(localStorage.getItem('id')) || 2000;

    for (let i = 0; i < setData.length; i++) {
        if (email == formData[i].email) {
            swal (
            "This Email Is Already Taken Try Another Email!",
            "Press OK For Retry!",
            "error"
            );
        return; 
        }       
    }

    if (password !== confirmPassword) {
        swal ("Password Should Be Same!", "Press OK For Retry!", "error");
    // alert("Passwords do not match.");
    return;
    }


    if (!isValidPassword(password)) {
        alert ("Password must be exactly 8 characters long.");
        return;
    }

    let userRecord = {
        name: names,
        email: email,
        password: password,
        id: id + 1,  
    };

    setData.push(userRecord);
    // alert("Sign Up successful!");
    // swal(`Good job!, ${userName}, success`);
    // swal("Good job!", "You clicked the button!", "success");
    swal("SignUp Success!", `${names} Go To LogIn Page`, "success");
    localStorage.setItem("id", id + 1);

    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
    userConfirmPassword.value = "";

    setTimeout (() => {
        window.location.href = 'login.html';
    },2000);
    });


    login.addEventListener ("submit", function (event) {
        event.preventDefault ();
        let emails = emaillogin.value.trim ();
        let password = passwordlogin.value.trim ();

        if (!emails || !password) {
            alert ("both fieds are required");
            return;
        }

        for (var i = 0; i < setData.length; i++) {
            if (emails == setData[i].email) {
                if (
                    emails == setData[i].email &&
                    password == setData[i].password
                );    
            }
            swal ({
                title: "SuccessFully LogedIn!",
                text: `${setData[i].names}`,
                icon: "success",
                button: true,
            });

        if (!emails.includes("@gmail.com")) {
            Swal.fire ({
                position: "top-end",
                icon: "error",
                title: "includes a @gmail.com!",
            });
            }   
        }     
        
        let user = setData.find (user => user.email === emails && user.password === password);
        
        if (user) {
            // alert (`welcome back, ${user.name} !`);
            //swal(`Good job!, ${user.name} ! You clicked the button!, success login`);
            swal (`Good job!, You clicked the button!, success login`);
        }
    
        else {
            alert ("Invalid email or password");
        }

        emails.value = "";
        password.value = "";
    });


