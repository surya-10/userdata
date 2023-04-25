let btn = document.querySelector(".btn");


var arr = []
let a = document.querySelectorAll(".checks");
for( var check of a){
    check.addEventListener("click", function(){
        if(this.checked==true){
            console.log(this.value)
            arr.push(`${this.value}`);
        }
       else{
        arr = arr.filter(ar=> ar!= this.value)
       }
        console.log(arr)
    })
}

console.log(arr);

let form = document.querySelector(".form");
let fname = document.querySelector("#first");
let lname = document.querySelector("#last");
let address = document.querySelector("#add");
let state = document.querySelector("#stat");
let pin = document.querySelector("#pin-numer");
let radio = document.querySelectorAll(".gender");
let email = document.querySelector("#count");
let gender = '';
for (var check of radio){
    check.addEventListener("click", function(){
        if(this.checked == true){
            // console.log(this.value);
            gender = this.value;
        }
    
    });
}
form.addEventListener("submit", (event)=>{
    // event.preventDefault();
    if(validation()){
        // alert("true")
        
        addToTable();
        removeAll();
        event.preventDefault();

    }
    else{
        event.preventDefault();
    }
});

function addToTable(){
    let outputTable = document.querySelector(".tab")
    let tablebody = document.querySelector(".table-body")
    let tableRow = document.createElement("tr");
    tableRow.innerHTML += `<tr>
        <td>${fname.value}</td>
        <td>${lname.value}</td>
        <td>${address.value}</td>
        <td>${pin.value}</td>
        <td>${gender}</td>
        <td>${arr.join(" ")}</td>
        <td>${state.value}</td>
        <td>${email.value}</td>
        </tr>`
    tablebody.append(tableRow);
}
function removeAll(){
    alert("Successfully Added");
    fname.value="";
    lname.value="";
    address.value="";
    pin.value="";
    radio.forEach((btn)=>{
        if(btn.checked==true){
            btn.checked=false;
            gender="";
        }
    });
    a.forEach((checkBtn)=>{
        if(checkBtn.checked==true){
            checkBtn.checked=false;
            arr.pop()
        }
    });
    state.value="";
    email.value="";
    
}
let flag = true;
function validation(){
    let flag = true;
    if((fname.value.trim().length==0) ||(lname.value.trim().length==0)||(address.value.trim().length==0)||(state.value.trim().length==0)|| (gender.length=="")||(pin.value.length<6 || pin.value.length>6)|| (arr.length<2)){
        alert("please fill all details");
        flag=false;
    }
    else{
        flag=true;

    }
    return flag;
}

