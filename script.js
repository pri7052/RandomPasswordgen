 const passwordBox =document.getElementById("password");
 const length=12;
 const upperCase="ABCDEFGHIJKLMNOPQRSTUVXYZ";
 const lowerCase="abcdefghijklmnopqrstuvxyz";
 const numbers="1234567890";
 const symbols="!@#$%^&*(()_+";
 const allChar=upperCase+lowerCase+numbers+symbols;

 function createPassword(){

 let password="";
 password+= upperCase[Math.floor(Math.random()* upperCase.length)];
 password+= lowerCase[Math.floor(Math.random()*lowerCase.length)];
  password +=numbers[Math.floor(Math.random() * numbers.length)];
 password += symbols[Math.floor(Math.random()* symbols.length)];
  while(length>password.length){
    password += allChar[Math.floor(Math.random()* allChar.length)];
  }
  console.log(passwordBox.value=password);
 
}

