// for previous page
function pre(){
    window.open("search.html");
}

// for next page
function pnext(){
    localStorage.setItem('f1',s1.value);
    localStorage.setItem('f2',s2.value);
    localStorage.setItem('f3',s3.value);
    localStorage.setItem('price',book.value);
    window.open("passenger.html");
}

// for slider
const menu = document.getElementById("menu");
const mainbox = document.getElementById("trip");
const closeBtn = document.getElementById('closebtn');

mainbox.addEventListener('click' , function() {
    menu.classList.add('show-sidebar');
    document.body.classList.add('blur');
});
closeBtn.addEventListener('click', function() {
    menu.classList.remove('show-sidebar');
    document.body.classList.remove('blur');
})


// for radio button

function checker(){
if(document.getElementById("che").checked) {
      book.value=parseInt(book.value)+249;
      tripValue.value=parseInt(tripValue.value)+249;
      slidetotal.value = parseInt(slidetotal.value)+249;
}
};
// Prices effect
function changeBg2(){
    document.getElementById("second-container").style.background = "#c5012d";
    document.getElementById("second-container").style.color = "white";
    document.getElementById("third-container").style.background = "";
    document.getElementById("third-container").style.color = "";
    document.getElementById("fourth-container").style.background = "";
    document.getElementById("fourth-container").style.color = "";
    document.getElementById("fifth-container").style.background = "";
    document.getElementById("fifth-container").style.color = "";
    
    document.getElementById("r3").style.background = "";
    document.getElementById("r3").style.color = "";
    document.getElementById("r2").style.background = "";
    document.getElementById("r2").style.color = "";
    document.getElementById("r1").style.background = "#c5012d";
    document.getElementById("r1").style.color = "white";
    tripValue.value=" 12144";
    slidetotal.value = "12144";
    s1.value= 10780;
    s2.value= 804;
    s3.value= 560;
    book.value=12144;
}
function changeBg3(){
    document.getElementById("second-container").style.background = "";
    document.getElementById("second-container").style.color = "";
    document.getElementById("fourth-container").style.background = "";
    document.getElementById("fourth-container").style.color = "";
    document.getElementById("fifth-container").style.background = "";
    document.getElementById("fifth-container").style.color = "";
    document.getElementById("third-container").style.background = "#c5012d";
    document.getElementById("third-container").style.color = "white";

    document.getElementById("r2").style.background = "#c5012d";
    document.getElementById("r2").style.color = "white";    
    document.getElementById("r1").style.background = "";
    document.getElementById("r1").style.color = "";
    document.getElementById("r3").style.background = "";
    document.getElementById("r3").style.color = "";
    tripValue.value=" 12984";
    slidetotal.value = "12984";
    s1.value= 11580;
    s2.value= 804;
    s3.value= 600;
    book.value=12984;
}
function changeBg4(){
    document.getElementById("second-container").style.background = "";
    document.getElementById("second-container").style.color = "";
    document.getElementById("third-container").style.background = "";
    document.getElementById("third-container").style.color = "";
    document.getElementById("fifth-container").style.background = "";
    document.getElementById("fifth-container").style.color = "";
    document.getElementById("fourth-container").style.background = "#c5012d";
    document.getElementById("fourth-container").style.color = "white";

    document.getElementById("r1").style.background = "";
    document.getElementById("r1").style.color = "";
    document.getElementById("r2").style.background = "";
    document.getElementById("r2").style.color = "";
    document.getElementById("r3").style.background = "#c5012d";
    document.getElementById("r3").style.color = "white";
    tripValue.value=" 18917";
    slidetotal.value = "18917";
    s1.value= 17230;
    s2.value= 804;
    s3.value= 883;
    book.value=18917;
}
function  changeBg5(){
    document.getElementById("second-container").style.background = "";
    document.getElementById("second-container").style.color = "";
    document.getElementById("third-container").style.background = "";
    document.getElementById("third-container").style.color = "";
    document.getElementById("fourth-container").style.background = "";
    document.getElementById("fourth-container").style.color = "";
    document.getElementById("fifth-container").style.background = "#c5012d";
    document.getElementById("fifth-container").style.color = "white";

    document.getElementById("r1").style.background = "";
    document.getElementById("r1").style.color = "";
    document.getElementById("r2").style.background = "";
    document.getElementById("r2").style.color = "";
    document.getElementById("r3").style.background = "";
    document.getElementById("r3").style.color = "";
    tripValue.value=" 30309";
    slidetotal.value = "30309";
    s1.value= 28080;
    s2.value= 804;
    s3.value= 1425;
    book.value="30309";
}


// business effect
function business(){
    document.getElementById("busi").style.padding= "10px 0px 0px 0px";
    document.getElementById("we").style.background = "#133b78";
    document.getElementById("su").style.background = "#133b78";
    document.getElementById("fl").style.background = "#133b78";
    document.getElementById("fli").style.background = "#133b78";
    document.getElementById("content").style.background = "#133b78";

    document.getElementById("air-content").style.display= "none";
    fres.value="NO FLIGHT RESULTS";
    slidetotal.value = "0";
    s1.value= 0;
    s2.value= 0;
    s3.value= 0;
    book.value=0;
    tripValue.value=0;

}

// economy effect
function economy(){
    document.getElementById("busi").style.padding= "0px 0px 0px 0px";
    document.getElementById("we").style.background = "#c5012d";
    document.getElementById("su").style.background = "#c5012d";
    document.getElementById("fl").style.background = "#c5012d";
    document.getElementById("fli").style.background = "#c5012d";
    document.getElementById("content").style.background = "#c5012d";
 
    document.getElementById("air-content").style.display= "block";
    fres.value="1 FLIGHT RESULTS";
}

// storage value
function store(){
    so.value=localStorage.getItem('so');
    de.value=localStorage.getItem('de');
    t1.value=localStorage.getItem('da');


    // YEAR
   year=t1.value.substr(0,4);
//     DAY
   var day=t1.value.substr(-2);
//     MONTH
   var month=t1.value.substr(-5,2);
   
//    alert(parseInt(year)+1);
//    alert(parseInt(month)+1);
//    alert(parseInt(day)+1);
      
var t2_year=(parseInt(year)+"-");
var t2_month=parseInt(month)+"-";
 t2_year=t2_year.concat(t2_month)
var t2_day=parseInt(day)+1;
t2_year=t2_year.concat(t2_day);
t2.value=t2_year;

var t3_year=(parseInt(year)+"-");
var t3_month=parseInt(month)+"-";
 t3_year=t3_year.concat(t3_month)
var t3_day=parseInt(day)+2;
t3_year=t3_year.concat(t3_day);
t3.value=t3_year;

var t4_year=(parseInt(year)+"-");
var t4_month=parseInt(month)+"-";
 t4_year=t4_year.concat(t4_month)
var t4_day=parseInt(day)+3  ;
t4_year=t4_year.concat(t4_day);
t4.value=t4_year;

var t5_year=(parseInt(year)+"-");
var t5_month=parseInt(month)+"-";
 t5_year=t5_year.concat(t5_month)
var t5_day=parseInt(day)+4 ;
t5_year=t5_year.concat(t5_day);
t5.value=t5_year;

var t6_year=(parseInt(year)+"-");
var t6_month=parseInt(month)+"-";
 t6_year=t6_year.concat(t6_month)
var t6_day=parseInt(day)+5 ;
t6_year=t6_year.concat(t6_day);
t6.value=t6_year;

var t7_year=(parseInt(year)+"-");
var t7_month=parseInt(month)+"-";
 t7_year=t7_year.concat(t7_month)
var t7_day=parseInt(day)+6 ;
t7_year=t7_year.concat(t7_day);
t7.value=t7_year;

var t8_year=(parseInt(year)+"-");
var t8_month=parseInt(month)+"-";
 t8_year=t8_year.concat(t8_month)
var t8_day=parseInt(day)+7 ;
t8_year=t8_year.concat(t8_day);
t8.value=t8_year;

var t9_year=(parseInt(year)+"-");
var t9_month=parseInt(month)+"-";
 t9_year=t9_year.concat(t9_month)
var t9_day=parseInt(day)+8 ;
t9_year=t9_year.concat(t9_day);
t9.value=t9_year;
}


// date slider
var sliderMain = document.getElementById("slider-main");
        var item = sliderMain.getElementsByClassName("item");
        function next() {
            sliderMain.append(item[0]);
        }
        function prev() {
            sliderMain.prepend(item[item.length - 1]);
        }