import { Route, Routes } from "react-router-dom";
import Upload from "../components/pages/Uploud";
import Home from "../components/pages/Home";

export default function AppRoutes () {
    return(
        // Ini nantik kamar buat atur halamnya bang
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/uploud" element={<Upload/>}/>
        </Routes>
    )
}