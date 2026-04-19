import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import DrinkContainer from "./pages/DinkContainer.jsx"
import DrinkCard from "./pages/DrinkCard.jsx"
import AdminContainer from "./pages/AdminContainer.jsx"
import DrinkForm from "./pages/DrinkForm.jsx"
//import ShopCard from './pages/ShopCard'

const App = () =>{
  return (
    <>
    {/*routes: home, shop and admin all being seperate with the drink form being a child to admin*/}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop" element={<DrinkContainer />}/>
            <Route path="/admin" element={<AdminContainer />}>  
              <Route path="add" element={<DrinkForm/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
