import { Routes, Route } from "react-router-dom";

import { DishView } from "../pages/pagesAdmin/DishView";
import { Favorites } from "../pages/pagesAdmin/Favorites";
import { Home } from "../pages/pagesAdmin/Home";
import { Menu } from "../pages/pagesAdmin/Menu";
import { Requests } from "../pages/pagesAdmin/Requests";
import { NewDish } from "../pages/pagesAdmin/NewDish";
import { EditDish } from "../pages/pagesAdmin/EditDish";

export function AppAdminRoutes () {
  return (
    <Routes>

      <Route path="/" element={ <Home/> }/>
      <Route path="/dishview/:id" element={ <DishView/> }/>
      <Route path="/favorites" element={ <Favorites/> }/>
      <Route path="/menu" element={ <Menu/> }/>
      <Route path="/requests" element={ <Requests/> }/>
      <Route path="/newdish" element={ <NewDish/> }/>
      <Route path="/editdish/:id" element={ <EditDish/> }/>

    </Routes>
  )
}