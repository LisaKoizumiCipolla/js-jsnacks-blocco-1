//Retrieve user data
const guest = (prompt("Insert your Name"));

//List of authorised accounts
let authorisedGuest = [ "Verdandi" , "Amaterasu" , "Varda" , "Huitzilopochtli" , "Eurinome" ];

//Message variable
let access;

access = false;

//Calculations
for (let i = 0 ; i < authorisedGuest.length ; i++){ 

    if (guest === authorisedGuest[i]) {
        access = true;
    } 

}

if (access){
    console.log("Access Granted");
} else {
    console.log("Access Denied")
}