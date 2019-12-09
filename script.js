
var howManyChar = prompt('Hello! How many characters should your password be?');
alert('The number of characters in your password will be ' + howManyChar)

var includeSpecial = confirm('Include special characters?');
var includeNums = confirm('Include numbers?');
var includeLower = confirm('Include lowercase letters?');
var includeUpper = confrim('Include uppercase letters?');

function generate( length = 8 ){
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialChar = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

var charSet = uppercase + lowercase + numbers + specialChar;

var password = '';

for (var i = 0; n = charSet.length; i < length; i++) {
var charSet = Math.floor(Math.random() * all.length);
password += charSet.charAt(Math.floor(Math.random() * n));
}
return password;
}


function myClipboard(){
    var myClipboard = document.getElementById("passwordBox");
    myClipboard.select();
    myClipboard.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied Password: " + copyClipboard);
}
