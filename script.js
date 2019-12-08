function myClipboard(){
    var myClipboard = document.getElementById("passwordBox");
    myClipboard.select();
    myClipboard.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied Password: " + copyClipboard);
}
}


function generatePassword( length = 12 ){
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialChar = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

var charSet = uppercase + lowercase + numbers + specialChar;

var password = '';

for (var index = 0; index < length; index++) {
var character = Math.floor(Math.random() * all.length);
password += charSet.substring(character, character + 1);
}

return password;
}


for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
}
