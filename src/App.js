import "./styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ResponsiveAppBar from "./views/ResponsiveAppBar";
import AccueilNCView from "./views/AccueilNCView";
import InscView from "./views/InscView";
import Footer from "./views/Footer";
//-------------------------------------------------------------------
import ProduitView from "./views/ProduitVIew";
import DispoView from "./views/DispoView";
import ProfileView from "./views/ProfileView";
import AccountView from "./views/AccountView";
import DashboardView from "./views/DashboardView";
import LogoutView from "./views/LogoutView";
import LoginView from "./views/LoginView";
// import IdentView from "./views/IdentView";

import Container from "@mui/material/Container";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Container sx={{ py: 10, minHeight: 500 }} maxWidth="xl">
          <Routes>
            <Route path="/" element={<AccueilNCView />} />
            <Route path="/produit" element={<ProduitView />} />
            <Route path="/inscription" element={<InscView />} />
            <Route path="/dispo" element={<DispoView />} />

            <Route path="/login" element={<LoginView />} />
            {/* <Route path="/ident" element={<IdentView />} /> */}
            <Route path="/profil" element={<ProfileView />} />
            <Route path="/account" element={<AccountView />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/logout" element={<LogoutView />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
