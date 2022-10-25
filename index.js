
let a=prompt("enter number of time you want to play the game");
a=Number.parseInt(a);


while(a--){
  let user=prompt("select s,w or g");

let comp=Math.floor(Math.random()*3)
let input=["s","w","g"][comp];
  console.log("computer :"+input ,"user :"+user);
 
 if(user===input){
   console.log("no one is won tied");
 }
 else if(user==="w"&&input==="s"){
   console.log("computer won");
 }
  else if(user==="s"&&input==="w"){
   console.log("user won");
 }
  else if(user==="g"&&input==="s"){
   console.log("user won");
 }
  else if(user==="w"&&input==="g"){
   console.log("user won");
 }
  else if(user==="s"&&input==="g"){
   console.log("computer won");
 }
  else if(user==="g"&&input==="w"){
   console.log("computer won");
 }
 else if(user==="w"&&input==="s"){
   console.log("computer won");
 }
  
}