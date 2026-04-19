import { useOutletContext, Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';

const DrinkCard=({id,name,description,origin,price,deleteDrink})=>{
    //handles the delete from db and calls the delete updater
    const handleDelete=()=>{
        fetch(`http://localhost:3000/coffee/${id}`,{
            method:"DELETE",
        })
        .then(r=>{
            if(!r.ok){throw new Error("failed to 'Buy'")}
            deleteDrink(id)
        })
        .catch(error=>console.log(error.message))
    }

    return(
    <>
        <Grid container spacing={{xs: 2, md: 4}}columns={{xs: 4, sm: 8, md: 12}} >
            <Grid className="drinkGrid" size={2.5}>
                <div >
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>{origin}</p>
                    <p>{price}</p>
                    <button onClick={handleDelete}>Buy</button>
                </div>
            </Grid>
        </Grid>
    </>
    )
}
export default DrinkCard