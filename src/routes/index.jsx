import { BrowserRouter } from "react-router-dom";

import { AppUsersRoutes } from "./appUser.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppUsersRoutes/>
    </BrowserRouter>
  );
};