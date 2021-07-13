
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];
var list9 = [];

var n = 1;
var x = 0;

function AddTable() {


    var AddRown = document.getElementById('display');
    var NewRow = AddRown.insertRow(n)
;
    list1[x] = document.getElementById("salutt").value;
    list2[x] = document.getElementById("name").value;
    list3[x] = document.getElementById("lname").value;
    list4[x] = document.getElementById("email").value;
    list5[x] = document.getElementById("phone").value;


    if (document.getElementById('s1').checked) {
        list6[x] = document.getElementById('s1').value;
    }
    if (document.getElementById('s2').checked) {
        list7[x] = document.getElementById('s2').value;
    }
    if (document.getElementById('s3').checked) {
        list8[x] = document.getElementById('s3').value;
    }
    if (document.getElementById('p1').checked) {
        list9[x] = document.getElementById('p1').value;
        //  console.log('r',list9[x]);
    }
    if (document.getElementById('p2').checked) {
        list9[x] = document.getElementById('p2').value;
        //  console.log('r',list9[x]);
    }
    if (document.getElementById('p3').checked) {
        list9[x] = document.getElementById('p3').value;
        //  console.log('r',list9[x]);
    }
 

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
    var cel6 = NewRow.insertCell(5);
    var cel7 = NewRow.insertCell(6);
    var cel8 = NewRow.insertCell(7);
    var cel9 = NewRow.insertCell(8);


    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];
    cel7.innerHTML = list7[x];
    cel8.innerHTML = list8[x];
    cel9.innerHTML = list9[x];

    n++;
    x++;
}
function validateForm() {
    var fname = document.getElementById("name").value;

    if (fname == null || fname == "") {
        errorr.innerHTML = "<span style='color: red;'>" +
            "Please enter a valid name</span>"
    }
    else if (fname.length < 3) {
        errorr.innerHTML = "<span style='color: red;'>" +
            "Please enter at least 3 digit</span>"
    }
    else if (!isNaN(fname)) {
        errorr.innerHTML = "<span style='color: red;'>" +
            "Name should not be in digit</span>"
    }
    else {
        errorr.innerHTML = ""
    }
    var lname = document.getElementById("lnameame").value;

    if (ln == null || ln == "") {
        errorrr.innerHTML = "<span style='color: red;'>" +
            "Please enter a valid name</span>"
    }
    else if (ln.length < 3) {
        errorrr.innerHTML = "<span style='color: red;'>" +
            "Please enter at least 3 digit</span>"
    }
    else if (!isNaN(ln)) {
        errorrr.innerHTML = "<span style='color: red;'>" +
            "Name should not be in digit</span>"
    }
    else {
        errorrr.innerHTML = ""
    }
    var email = document.forms["index"]["email"].value;

    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    if (at < 1 || dot < at + 2 || dot + 2 >= email.lenght) {
        errorrrr.innerHTML = "<span style='color: red;'>" +
            "Please enter a valid email</span>"

    } else {
        errorrrr.innerHTML = ""
    }
    var phone = document.forms["index"]["phone"].value;
    if (phone == null || phone == "") {
        error.innerHTML = "<span style='color: red;'>" +
            "Please enter a valid phone no.</span>"
    }
    else if (phone.length != 10) {
        error.innerHTML = "<span style='color: red;'>" +
            "Please enter 10 digit</span>"
    }
    else {
        error.innerHTML = ""
    }

var a=document.index.package;
for (i=0;i<a.length;i++){
if (a[i].checked==true)
return true;
}
radio.innerHTML = "<span style='color: red;'>" +
"select anyone </span>"

var b = document.index.service;
for (i = 0; i < b.length; i++) {
    if (b[i].checked == true)
        return true();
        box.innerHTML = ""
        box.innerHTML = ""
        box.innerHTML = ""
        
}
box.innerHTML = "<span style='color: red;'>" +
    "select anyone checkbox </span>"

}
