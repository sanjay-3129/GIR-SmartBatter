import { Route, Routes } from "react-router-dom";
import Machine from "./pages/Machine";
import Customer from "./pages/Customer";
import Account from "./pages/Account";
import Analytics from "./pages/Analytics";
import ServiceWarranty from "./pages/ServiceWarranty";
import OTAupdate from "./pages/OTAupdate";
import Order from "./pages/Order";
import Inventory from "./pages/Inventory";
import AccessControl from "./pages/AccessControl";
import Settings from "./pages/Settings";
import CustomerService from "./pages/CustomerService";

// import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

import "./styles.css";

export default function App() {
  // const authCtx = useCon
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Home />}>
          {/* <Route path="customer/:userId" element={<Customer />} /> */}
          <Route path="customer" element={<Customer />} />
          <Route path="machine" element={<Machine />} />
          <Route path="profile" element={<Account />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="service-Warranty" element={<ServiceWarranty />} />
          <Route path="otaupdate" element={<OTAupdate />} />
          <Route path="orders" element={<Order />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="customerservice" element={<CustomerService />} />
          <Route path="access_control" element={<AccessControl />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}
