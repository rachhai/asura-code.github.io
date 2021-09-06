function cheak(){
var paswd = document.getElementById("passwdsIn").value;
var number = 14
    if(paswd.length >= number){
    document.getElementById("txt").style.color="green"
    }else {
        document.getElementById('txt').style.color="red"
    }
document.getElementById("count").innerHTML = "Length : " + paswd.length;
   if (paswd.match(/[0-9]/i)){
       document.getElementById('txt1').style.color="green"
   }else {
document.getElementById('txt1').style.color="red"
   }
   if (paswd.match(/[A-Z]/i)){
document.getElementById("txt2").style.color="green"
   }else {
document.getElementById("txt2").style.color="red"
   }
   if(paswd.match(/[^A-Za-z0-9-' ']/i)){
document.getElementById("txt3").style.color="green"
   }else{
document.getElementById("txt3").style.color="red"
   }
  if(paswd.length >= number){
    if (paswd.match(/[0-9]/i)){
     if (paswd.match(/[A-Z]/i)){
       if(paswd.match(/[^A-Za-z0-9-' ']/i)){

document.getElementById("finish").innerHTML="<p style='color:green'>☑ Congratulation your password is secured!</p>"
            }else {
document.getElementById("finish").innerHTML="<p>☒ Worning your password is not secured!</p>"
            }
         }else {
document.getElementById("finish").innerHTML="<p>☒ Worning your password is not secured!</p>"
   }
      }else {
document.getElementById("finish").innerHTML="<p>☒ Worning your password is not secured!</p>"
   }
   }else {
document.getElementById("finish").innerHTML="<p>☒ Worning your password is not secured!</p>"
   }
}
var is_visible = false ;

function seePasswd()
{
    var input = document.getElementById("passwdsIn");
    var seepass = document.getElementById("visiblePasswd");
    
    if(is_visible) {
    input.type = 'password';
      is_visible = false; 
        seepass.style.color='#262626';
       }else{
    input.type = 'text';
       is_visible = true; 
           seepass.style.color='#262626';
    }
    
}
var i = 0, text;
text = "/!\\ A strong password is one that’s either not easily guessed or not easily brute forced. To make it not easily guessed it can’t be a simple word, to make it not easily cracked it needs to be long and complex. Super computers can go through billions of attempts per second to guess a password. Try to make your passwords a minimum of 14 characters!"
function typing() {

 if (i < text.length) {
    var a = document.getElementById("writer")
    a.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
setTimeout(function(){
    typing()
},0)
