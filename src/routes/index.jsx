import { BrowserRouter } from "react-router-dom";

import { AppUsersRoutes } from "./appUser.routes";
import { AppAdminRoutes } from "./appAdmin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AppAdminRoutes/>
    </BrowserRouter>
  );
};