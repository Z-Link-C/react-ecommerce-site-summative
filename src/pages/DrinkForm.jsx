import { useState } from "react"
import { Navigate, useNavigate, useOutletContext, useParams } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'

function DrinkForm(){
    const {drinks,AdminAddDrinks}=useOutletContext()
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [origin,setOrigin]=useState('')
    const [price,setPrice]=useState('')
    const navs=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newDrink={
            id:uuidv4(),
            description:description,
            name:name,
            origin:origin,
            price:parseInt(price)
        }
        fetch(`http://localhost:3000/coffee`,{
            method:"POST",
            headers: {
              "Content-Type": "application/json"
            },
            body:JSON.stringify(newDrink)
        })
        .then(r=>{
            if(!r.ok){}
            r.json()
        }).then(data=>{
            AdminAddDrinks(data)
            navs('/Shop')}
        )
    }
    return(
        <div>
            <h2>Add new Drink</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Drink Name"
                value={name} onChange={(e)=>setName(e.target.value)} required/>
                <input type="text" placeholder="Drink Description"
                value={description} onChange={(e)=>setDescription(e.target.value)} required/>
                <input type="text" placeholder="Drink Origin"
                value={origin} onChange={(e)=>setOrigin(e.target.value)} required/>
                <input type="text" placeholder="Drink Price"
                value={price} onChange={(e)=>setPrice(e.target.value)} required/>
                <button type="submit">Add Drink</button>
            </form>
        </div>
    )
}
export default DrinkForm