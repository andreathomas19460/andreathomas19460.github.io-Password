var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialChar = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

var howManyChar;
var includeSpecial;
var includeLower;
var includeUpper;

function getPrefs(){
    howManyChar = prompt('Hello! How many characters should your password be? Choose a length from 8-128.');
    if (howManyChar < 8) {
        alert(`${howManyChar} is too small. Increasing to 8.`);
        howManyChar = 8;
    }
    else if (howManyChar > 128) {
        alert(`${howManyChar} is too large. Decreasing to 128.`);
        howManyChar = 128;
    }
    else {
        alert(`The number of characters in your password will be ${howManyChar}`);
    }
        
    includeSpecial = confirm('Include special characters?');
    includeNums = confirm('Include numbers?');
    includeLower = confirm('Include lowercase letters?');
    includeUpper = confirm('Include uppercase letters?');
} 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generate() {
    var charSet = ''; 
    if (includeUpper) {
        charSet += uppercase;
    }
    if (includeLower) {
        charSet += lowercase;
    }
    if (includeNums) {
        charSet += numbers;
    } 
    if (includeSpecial) {
        charSet += specialChar;
    }
    var password = '';
    for (var i = 0; i < howManyChar; i++) {
        password += charSet.charAt(getRandomInt(0, charSet.length));
    // var charSet = Math.floor(Math.random() * all.length);
    // password += shuffle.charAt(Math.floor(Math.random() * shuffle.length));
    }
    document.getElementById("passwordBox").value = password;
}

function myClipboard() {
    var myClipboard = document.getElementById("passwordBox");
    myClipboard.select();
    myClipboard.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Copied Password: " + copyClipboard);
}
