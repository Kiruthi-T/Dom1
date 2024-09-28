class MyClass{
    person1={
        name:"kiruthika",
        empid:1234,
        Address:{
            city:"palladam",
            district:"tiruppur",
            pin:641664
        },
        Hobbies:["reading stories","listening music","dance","sing","game"]
    };
    person2={
        name:"lotus",
        empid:2234,
        Address:{
            city:"palladam",
            district:"tiruppur",
            pin:641664
        },
        Hobbies:["makeup","reading stories","listening music","dance","game"]
    };
    person3={
        name:"pavi",
        empid:3234,
        Address:{
            city:"palladam",
            district:"tiruppur",
            pin:641664
        },
        Hobbies:["play with kids","listening music","dance","sing","game"]
    };
    person4={
        name:"esther",
        empid:4234,
        Address:{
            city:"palladam",
            district:"tiruppur",
            pin:641664
        },
        Hobbies:["home work","listening music","dance","sing","game"]
    };
    person5={
        name:"saran",
        empid:5234,
        Address:{
            city:"palladam",
            district:"tiruppur",
            pin:641664
        },
        Hobbies:["readingstories","listening music","dance","sing","game"]
    };
};

let employes=new MyClass();
console.log(employes);

let body=document.getElementById("mybody")
console.log(body);

let mydiv=document.createElement("div")
mydiv.className='reddiv';
body.appendChild(mydiv);


Object.keys(employes).map((emp,index)=>{
    
    let div1=document.createElement("div");
    div1.style.border=("1px solid blue");
    div1.style.padding="5px";
    div1.style.margin="5px";
    div1.className=`person${index+1}`;
    mydiv.appendChild(div1);    

    let h2=document.createElement("h2");
    h2.innerHTML=`name: ${employes[emp].name}`;
    div1.appendChild(h2);

    let h22=document.createElement("h3");
    h22.innerHTML=`empid: ${employes[emp].empid}`;
    div1.appendChild(h22);


    let address=document.createElement("div");
    address.innerHTML=(`<b>Address :</b>`);
    address.className="green";
    div1.appendChild(address);

    Object.keys(employes[emp].Address).map(add=>{

        let addkey=document.createElement("p");
        addkey.innerHTML=`<b>${add}: </b>${employes[emp].Address[add]}`
        address.appendChild(addkey)
    });

    // let hob=document.createElement("p");
    // hob.innerHTML=`<b>Hobbies: </b>${employes[emp].Hobbies}...`;
    // div1.appendChild(hob);

    let hob=document.createElement("p");
    hob.innerHTML=(`<b>Hobbies :</b>`);
    div1.appendChild(hob);

    employes[emp].Hobbies.forEach(element => {

        let hobdet=document.createElement("span");
        let hobdetcon=employes[emp].Hobbies.length;
        div1.appendChild(hobdet);
        
        if(index+1 !== hobdetcon){
            hobdet.innerHTML=`${element} , `
        }
        else{
            hobdet.innerHTML=`${element} .`
        }
    });
});




