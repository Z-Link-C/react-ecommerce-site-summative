import { Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Grid } from '@mui/system';
function AdminContainer(){
    const[drinks, setDrinks]=useState([])
    useEffect(()=>{
            fetch("http://localhost:3000/coffee")
            .then(r=>{
                if(!r.ok){throw new Error("failed to get coffee")}
                return r.json();
            })
            .then(setDrinks)
            .catch(console.log)
        })
    const AdminAddDrinks=(newDrink)=>{
        setDrinks(prevData=>[...prevData,newDrink])
    }
    const AdminRmDrinks=(rmDrink)=>{
        fetch(`http://localhost:3000/coffee/${rmDrink.id}`,{
            method:"DELETE"
        })
        .then(r=>{
            if(!r.ok){throw new Error("failed to delete")}
            setDrinks(prevData=>prevData.filter(data=>data.id!==rmDrink)
        )
        })
        .catch(error=>console.log(error.message))
    }

    return(
        <>
        <NavBar />
        <main>
            <div className="adminOptions">
                <Link to="add">Add Drink to Menu</Link><br/>
                <Outlet context={{drinks,AdminAddDrinks,AdminRmDrinks}}/> 
            </div>
        </main>
        </>
    )
}
export default AdminContainer