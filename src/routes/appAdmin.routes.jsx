import { Routes, Route } from "react-router-dom";

import { DishView } from "../pages/pagesAdmin/DishView";
import { Favorites } from "../pages/pagesAdmin/Favorites";
import { Home } from "../pages/pagesAdmin/Home";
import { Menu } from "../pages/pagesAdmin/Menu";
import { Requests } from "../pages/pagesAdmin/Requests";
import { Payment } from "../pages/pagesAdmin/Payment";

export function AppAdminRoutes () {
  return (
    <Routes>

      <Route path="/" element={ <Home/> }/>
      <Route path="/dishview/:id" element={ <DishView/> }/>
      <Route path="/favorites" element={ <Favorites/> }/>
      <Route path="/menu" element={ <Menu/> }/>
      <Route path="/payment" element={ <Payment/> }/>
      <Route path="/requests" element={ <Requests/> }/>

    </Routes>
  )
}