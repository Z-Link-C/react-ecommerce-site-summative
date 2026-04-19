import { Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from "../components/NavBar.jsx";
import Search from './Search.jsx';
import DrinkCard from './DrinkCard.jsx';

function DrinkContainer(){
    //all things tied to the drink container is handled with props 
    // as a way to simplify data transfer across the same "page"
    const[drinks, setDrinks]=useState([])
    const [search,setSearch]=useState("")
    useEffect(()=>{
        fetch("http://localhost:3000/coffee")
        .then(r=>{
            if(!r.ok){throw new Error("failed to get coffee")}
            return r.json();
        })
        .then(setDrinks)
        .catch(console.log)
    })
    //filters drinks based on search
    const filtered=drinks.filter((drink)=>
        drink.name.toLowerCase().includes(search)||
        drink.origin.toLowerCase().includes(search)
    )
    //handles "purchase" deletion from db
    const deleteDrink=delDrink=>{
        setDrinks(prevData=>prevData.filter(d=>d.id!==delDrink))
    }
    return(
        <>
        <NavBar />
        <main>
            <Search searchTerm={search} onSearchChange={setSearch}/>
            {//loops through all filtered data and renders out
            filtered.map(drink=>
            <DrinkCard key={drink.id}{...drink} deleteDrink={deleteDrink}/>)}
        </main>
        </>
    )
}
export default DrinkContainer