import React from "react"
import List from "./List/index"
import Form from "./Form/index"
import {useState,useEffect}from "react"
import  "./style.css";

function Contacts()
{

const [contacts,setContacts]=useState([]);
useEffect(()=>{

console.log(contacts);


},[contacts]);

return (
    <div class ="container">
        <h1>Contacts</h1>
        
        <Form addContact={setContacts} contact={contacts} ></Form>
        <List contacts={contacts}></List>
        </div>
        

)


}

export default Contacts