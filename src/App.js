import Dashboard from "./Pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}