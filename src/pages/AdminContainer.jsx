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
        //adds drinks from form to DB render
    const AdminAddDrinks=(newDrink)=>{
        setDrinks(prevData=>[...prevData,newDrink])
    }
    // renders "adminOptions", was going to add a way to 
    // only remove drinks from admin-end treating the page as more of a menu
    // but ran out of time
    return(
        <>
        <NavBar />
        <main>
            <div className="adminOptions">
                <Link to="add">Add Drink to Menu</Link><br/>
                <Outlet context={{drinks,AdminAddDrinks}}/> 
            </div>
        </main>
        </>
    )
}
export default AdminContainer