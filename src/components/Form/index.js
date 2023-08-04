import React from "react";
import {useState}from "react";

function Form (props)
{

const [form,setForm]=useState({fullname:"",phoneNumber:""});

const changeForm=(event)=>{
   setForm({...form,[event.target.name]:event.target.value} )  ;
}
const checkForm=false;
const submit=(e)=>{
    if(form.fullname==="" || form.phoneNumber==="")
    {
        return;
    }
    e.preventDefault();
props.addContact([...props.contact,form]);
console.log(form);
setForm({fullname:"",phoneNumber:""});

}



    return (


        <form onSubmit={submit}>
<div>
        <div><input value={form.fullname} name="fullname" placeholder="Enter the full name..." onChange={changeForm}></input></div>
        <div><input value={form.phoneNumber} name="phoneNumber" placeholder="Enter the phone number..." onChange={changeForm} ></input></div>
     <div className="btn"> <button>Add</button></div>  

</div>
</form>

    )
}

export default Form;