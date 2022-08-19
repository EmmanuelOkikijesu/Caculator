
const clear = document.querySelector("#clear")
const expo=document.querySelector("#expo")
const percent=document.querySelector("#percent")
const division=document.querySelector("#division")
const seven=document.querySelector("#seven")
const eight=document.querySelector("#eight")
const nine=document.querySelector("#nine")
const hashtag=document.querySelector("#hashtag")
const four=document.querySelector("#four")
const five=document.querySelector("#five")
const six=document.querySelector("#six")
const minus=document.querySelector("#minus")
const one=document.querySelector("#one")
const two=document.querySelector("#two")
const three=document.querySelector("#three")
const plus=document.querySelector("#plus")
const zero=document.querySelector("#zero")
const dot=document.querySelector("#dot")
const equal=document.querySelector("#equal")





/*clear.addEventListener("click", function (e) {
    

});*/

/*expo.addEventListener("click", function (e) {
    

});*/
const how = document.querySelector("#how")
clear.addEventListener("click",function(){

    how.textContent = ""
} )
expo.addEventListener("click",function(){
    how.textContent = how.textContent.slice(0,-1)
})
percent.addEventListener("click",function(){
  let exam = how.textContent
  how.textContent = exam/100

});
division.addEventListener("click",function () {
    how.textContent+="/"

});
seven.addEventListener("click", function () {
    how.textContent+="7"

});
eight.addEventListener("click", function () {
    how.textContent+="8"

});
nine.addEventListener("click", function () {
    how.textContent+="9"
});
hashtag.addEventListener("click",function(){
    how.textContent+="*"
});

four.addEventListener("click", function () {
    how.textContent+="4"

});
five.addEventListener("click", function () {
    how.textContent+="5"

});
six.addEventListener("click", function () {
    how.textContent+=6

});
minus.addEventListener("click", function () {
    how.textContent+="-"

});
one.addEventListener("click", function () {
    how.textContent+="1"

});
two.addEventListener("click", function () {
    how.textContent+="2"
});
three.addEventListener("click", function () {
    how.textContent+="3"

});
plus.addEventListener("click", function () {
    how.textContent+="+"

});
zero.addEventListener("click", function () {
    how.textContent+="0"

});
dot.addEventListener("click", function () {
    how.textContent+="."

});
//  equal.addEventListener("click", function () {
//      const answer = eval(how.textContent)
//     how.textContent=answer

// });
equal.addEventListener("click", function () {
    let answer =  Function("return "+ how.textContent)()
    how.textContent=answer

});


