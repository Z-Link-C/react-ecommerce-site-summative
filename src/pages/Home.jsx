import NavBar from "../components/NavBar.jsx";
import { Link } from 'react-router-dom';

function Home(){
 return(
 <>
    <NavBar />
    <main>
        <h1>Coffee R Us</h1>
        <p>The go to store for coffee</p>
    </main>
 </>
 )   
}
export default Home