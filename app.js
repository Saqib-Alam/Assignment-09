// Chapter 38-42

// Task no 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.        

// function power(a,b){

//     var i=0;
//     var c=1;
//     while(i<b){
//         c=c*a;
//         i++;
//     }
//     alert(c)
// }

// var a=prompt("Enter base")
// var b=prompt("Enter power")

// power(a,b);


// Task no 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// function sides(a,b,c){
//     var s=(a+b+c)/2;
//     return s;

// }

// function triangle(a,b,c,s){


//     var area=s*(s-a)*(s-b)*(s-c);
//     document.write("Area of Triangle is = "+area)

// }

// var a=+prompt("To find area of triangle, Enter value for side a")
// var b=+prompt("Enter value for side b")
// var c=+prompt("Enter value for side c")


// var s=sides(a,b,c)
// triangle(a,b,c,s);

// Task no4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


// function main(){

//     var sub1=+prompt("Enter the marks got in subject 1")
//     var sub2=+prompt("Enter the marks got in subject 2")
//     var sub3=+prompt("Enter the marks got in subject 3")
//     var sub4=+prompt("Enter the marks got in subject 4")
//     var sub5=+prompt("Enter the marks got in subject 5")

//     var ave=average(sub1,sub2,sub3,sub4,sub5)
//     var per=pertcentage(sub1,sub2,sub3,sub4,sub5)

//     alert("Percentage of student is :"+per+"%")
//     alert("Average marks of student :"+per)

// }

// function average(sub1,sub2,sub3,sub4,sub5){

//     var ave=(sub1+sub2+sub3+sub4+sub5)/5;
//     return ave;
// }

// function pertcentage(sub1,sub2,sub3,sub4,sub5){

//     var per=((sub1+sub2+sub3+sub4+sub5)/500)*100;
//     return per;
// }

// main()


// Task no 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function index(ind){

//     var string="My name is saqib";
//     var s=string.split('');
//     var i=0;
//       while(i<string.length){

//         if(s[i]==ind){
//             document.write("Index of given letter is "+i)
//         }

//         i++;
//       }
// }
//  var ind="n";
// index(ind)


// Task no 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function del(){

//     var string="My name is saqib";
//     var str="";
//     var s=string.split('');
//     var i=0;
//       while(i<string.length){

//         if(s[i]=='a'){
//             s[i]=='b';
//         }
//         str+=s[i];

//         i++;
//       }
//       document.write(str)
// }

// del()


// function del(){

//     var string="My name is saqib";
//    string = string.replace( /[aeiou]/g,'');
//       document.write(string)
// }

// del()


// Task no 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// var occur = prompt("what do you wanna check occurances for are ea, ea, ui")

// var str = "Pleases read this application and give me gratuity";
// var a = 0;
// s = str.toLowerCase();

// switch (occur) {

//     case "are":
//         for (var i = 0; i < str.length; i++) {

//             if (s.slice(i, i + 6) == "are ea")
//                 var a = a + 1
//         }

//         document.write("Text : " + str + "</br>There are " + a + " Occuranes of the word 'are ea' .")
//         break;

//     case "ea":
//         for (var i = 0; i < str.length; i++) {

//             if (s.slice(i, i + 2) == "ea")
//                 var a = a + 1
//         }

//         document.write("Text : " + str + "</br>There are " + a + " Occuranes of the word 'ea' .")
//         break;

//     case "ui":
//         for (var i = 0; i < str.length; i++) {

//             if (s.slice(i, i + 2) == "ui")
//                 var a = a + 1
//         }

//         document.write("Text : " + str + "</br>There are " + a + " Occuranes of the word 'ui' .")
// }



// Task no 8.The distance between two cities (in km.) is input through the keyboard.
// Write four functions to convert and print this distance in meters, feet, inches and centimeters.


// function meter(){

//     var km=prompt("Enter distance to convert","Enter in kilometer")

//     var meter=km*1000;
//     var ft=feet(km)
//     var inc=inches(km)
//     var cm=centimeters(km)

//     document.write("Distance in meter is : "+meter+"</br>"+"Distance in feet is : "+ft+"</br>"+"Distance in inches is : "+inc+"</br>"+"Distance in centimeter is : "+cm)

// }

// function feet(km){

//     var ft=km*3280.84;
//     return ft;
    
// }

// function inches(km){

//     var inches=km*39370.1;
//     return inches;
    
// }

// function centimeters(km){

//     var cm=km*100000.054;
//     return cm;
    
// }

// meter()


// Task no 9 Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.



// function overTime(){
 
//     var i=0;
//     do{
//         var hour=prompt("Enter hours to calculate over time paid")
//         if(hour>=40){
//             var h=hour*12;
//             i++;
//         }
//         else{
//             alert("Not elgible for overTime Pay")
//         }
//         alert("Overtime pay is : "+h)
//     }while(i!=0)
// }

// overTime()


// Task no 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.




// function Cash(){
// var cash=+prompt("Enter ammount")

// var Th=cash/1000;
// var ThR=cash%1000;
// var T=Math.floor(Th)

// var hund=ThR/100;
// var hundR=ThR%100;
// var h=Math.floor(hund);

// var fifty=hundR/50;
// var fiftyR=hundR%50;
// var f=Math.floor(fifty);

// var ten=fiftyR/10;
// var tenR=fiftyR%10;
// var t=Math.floor(ten);

// document.write("Thousands Notes :"+T+"</br>"+"Hundreds notes: "+h+"</br>"+"Fifty Notes: "+f+"</br>"+"Tens Notes: "+t)

// }

// Cash()


                                    // Chapter 43-48


// Task no 1 Show an alert box on click on a link.

// to see this task visit Html file


// Task no 2. Display some Mobile images in browser.
//  On click on an image Show the message in alert to user.

// to see this task visit Html file

// Task no 3. Display 10 student records in table and each row should contain a delete button.
//  If you click on a button to delete a record, entire row should be deleted.

// to see this task visit Html file



// Task no 3.Display 10 student records in table and each row should contain a delete button.
//  If you click on a button to delete a record, entire row should be deleted.

// var row1=document.getElementById("R1")
// var row2=document.getElementById("R2")
// var row3=document.getElementById("R3")
// var row4=document.getElementById("R4")
// var row5=document.getElementById("R5")
// var row6=document.getElementById("R6")
// var row7=document.getElementById("R7")
// var row8=document.getElementById("R8")
// var row9=document.getElementById("R9")
// var row10=document.getElementById("R10")


// var i0=document.getElementById("ind0")
// var i1=document.getElementById("ind1")
// var i2=document.getElementById("ind2")
// var i3=document.getElementById("ind3")
// var i4=document.getElementById("ind4")
// var i5=document.getElementById("ind5")
// var i6=document.getElementById("ind6")
// var i7=document.getElementById("ind7")
// var i8=document.getElementById("ind8")
// var i9=document.getElementById("ind9")



// function disable(a){

//     for(var i=0;i<=9;i++){
//         if(a==0){
//             row1.innerHTML="";

//             i1.innerHTML=0;
//             i2.innerHTML=1;
//             i3.innerHTML=2;
//             i4.innerHTML=3;
//             i5.innerHTML=4;
//             i6.innerHTML=5;
//             i7.innerHTML=6;
//             i8.innerHTML=7;
//             i9.innerHTML=8;

//         }
//         else if(a==1){
//             row2.innerHTML="";

//             i2.innerHTML=1;
//             i3.innerHTML=2;
//             i4.innerHTML=3;
//             i5.innerHTML=4;
//             i6.innerHTML=5;
//             i7.innerHTML=6;
//             i8.innerHTML=7;
//             i9.innerHTML=8;

//         }
//         else if(a==2){
//             row3.innerHTML="";

//             i3.innerHTML=2;
//             i4.innerHTML=3;
//             i5.innerHTML=4;
//             i6.innerHTML=5;
//             i7.innerHTML=6;
//             i8.innerHTML=7;
//             i9.innerHTML=8;

//         }

//         else if(a==3){
//             row4.innerHTML="";

//             i4.innerHTML=3;
//             i5.innerHTML=4;
//             i6.innerHTML=5;
//             i7.innerHTML=6;
//             i8.innerHTML=7;
//             i9.innerHTML=8;

//         }

//         else if(a==4){
//             row5.innerHTML="";

//             i5.innerHTML=4;
//             i6.innerHTML=5;
//             i7.innerHTML=6;
//             i8.innerHTML=7;
//             i9.innerHTML=8;

//         }

//         else if(a==5){
//             row6.innerHTML="";

//             i6.innerHTML=5;
//             i7.innerHTML=6;
//             i8.innerHTML=7;
//             i9.innerHTML=8;

//         }

//         else if(a==6){
//             row7.innerHTML="";

//             i7.innerHTML=6;
//             i8.innerHTML=7;
//             i9.innerHTML=8;

//         }
//         else if(a==7){
//             row8.innerHTML="";

//             i8.innerHTML=7;
//             i9.innerHTML=8;

//         }

//         else if(a==8){
//             row9.innerHTML="";


//             i9.innerHTML=8;

//         }

//         else if(a==9){
//             row10.innerHTML="";

//         }
//     }

// }



// Task no 4. Display an image in browser.
//  Change the picture on mouseover and set the first picture on mouseout.

// to see this task visit Html file



// Task no 5. Show a counter in browser. Counter should increase on click 
// on increase button and decrease on click on decrease button.
//  And show updated counter value in browser.


// var count=document.getElementById("counter")

// var n=0;

// function incr(){
//     // var c=count+1;
//     n++;

//     count.innerHTML=n;
// }


// function dcr(){
//     // var c=count+1;
//     n--;

//     count.innerHTML=n;
// }


                //    Chapter 49-52

//  Task no 1 Create a signup form and display form data in your web
//  page on submission.               

// function getname(){
//     var first=document.getElementById("first")
//     var last=document.getElementById("last")
//     var mail=document.getElementById("mail")
//     var phNo=document.getElementById("no")


//     document.write("First Name : "+first.value)
//     document.write("</br>Last Name : "+last.value)
//     document.write("</br>Email : "+mail.value)
//     document.write("</br>Phone No : "+phNo.value)

// }

// Task no 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


// function readMore(){

// var text="Lorem ipsum dolor sit amet consectetu adipisicing elit. Perspiciatis aperiam nesciunt laudantium vitae iste consectetur tempore, ratione necessitatibus esse aliquam vero maiores sequi cupiditate. Maiores, fugit laborum! A, voluptatem voluptas"
// var par=document.getElementsByClassName("card-text")[0]
// par.innerHTML=text;

// }


// Task no 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.




                       // Chapter 58-67

// Task no 1. Consider you have following code snippet
// (Copy it in your HTML file):

// var a=document.getElementById("main-content")

// console.log(a.childNodes)

// var b=document.getElementsByClassName("render")

// console.log(b)





// var c=document.getElementById("first-name");
// var d=c.getAttribute("type");
// d.innerHTML="saqib";


// var target = document.getElementById("div1");
// var attVal = target.getAttribute("class");



// Task 2
// (i)
// var f=document.getElementById("form-content")
// var ft=f.nodeType;
// console.log(ft)

//(ii) 
// var f=document.getElementById("lastName")
// var ft=f.nodeType;
// console.log(ft)
// var fn=f.childNodes;
// console.log(fn)

// (iii)

// var id=document.getElementById("lastName")
// var att=id.setAttribute("class","last")



// (iv)

// f=document.getElementById("main-content")
// var chi=f.firstChild;
// var lChi=f.lastChild;
// console.log(chi)
// console.log(lChi)

// (v)

// Get next and previous siblings of id “lastName”.

// var f=document.getElementById("lastName")

// var pChi=f.previousSibling;
// var nChi=f.nextSibling;
// console.log(pChi)
// console.log(nChi)

// (vi)

// Get parent node and node type of element having id “email”

// var f=document.getElementById("email")

// var pNode=f.parentNode;
// var tNode=f.nodeType;

// console.log(pNode)
// console.log(tNode)


                              // Chapter 53-57

// Task 1

// function showImage(i){
//     var modalImage=document.getElementById("modalImage")
//     modalImage.src=i.src
// }


// Task 2

function zoomIn(){
    var modalImage=document.getElementById("img")

    // var att=modalImage.setAttribute("class","zoomIn")

    var currWidth=modalImage.clientWidth;
    modalImage.style.width=(currWidth + 100)+"px";
}


// function zoomin(){
//     var myImg = document.getElementById("map");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 2500) return false;
//      else{
//         myImg.style.width = (currWidth + 100) + "px";
//     } 
// }
// function zoomout(){
//     var myImg = document.getElementById("map");
//     var currWidth = myImg.clientWidth;
//     if(currWidth == 100) return false;
//      else{
//         myImg.style.width = (currWidth - 100) + "px";
//     }
// }