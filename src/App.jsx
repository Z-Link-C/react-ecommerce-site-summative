import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import DrinkContainer from "./pages/DinkContainer.jsx"
import DrinkCard from "./pages/DrinkCard.jsx"

//import ShopCard from './pages/ShopCard'

const App = () =>{
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shop" element={<DrinkContainer />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
