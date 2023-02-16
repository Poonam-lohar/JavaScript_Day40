console.log("Welcome To PinCode validation...");
const pincodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
function validatePinCode(PinCode) {
    if(pincodeRegex.test(PinCode))
    console.log(PinCode + " : valid pincode.");
    else
    console.log(PinCode +" : PINCODE is invalid");
}
    validatePinCode("400088");