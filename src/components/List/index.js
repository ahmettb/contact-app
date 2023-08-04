import React from "react"
import {useState} from "react"


function List({contacts}){


const [filterText,setFilterText]=useState("");
const filtered=contacts.filter((item)=>{
return Object.keys(item).some((key)=>
item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())

);

});


return (
<div>
    <p>Total Contacts ({filtered.length})</p>
    <input placeholder="Enter filter text"value={filterText} onChange={(e)=>setFilterText(e.target.value)} ></input>
<ul className="list">
   {filtered.map((contact,index)=>(<li  key={index}> 
   <span>{contact.fullname} </span>
   <span>{contact.phoneNumber}</span></li>))}
</ul>
</div>

)



}

export default List;