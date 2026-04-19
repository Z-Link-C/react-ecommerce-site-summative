import { useOutletContext, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const DrinkCard=({drinks})=>{

    const displayDrinks=drinks.map(d=>(
        <Grid className="drinkGrid" key={d.id} size={2.5}>
        <div >
            <h3>{d.name}</h3>
            <p>{d.description}</p>
            <p>{d.origin}</p>
            <p>{d.price}</p>
        </div>
        </Grid>
    ))
    return(
    <>
        <Grid container spacing={{xs: 2, md: 4}}columns={{xs: 4, sm: 8, md: 12}} >
            {displayDrinks}
        </Grid>
    </>
    )
}
export default DrinkCard