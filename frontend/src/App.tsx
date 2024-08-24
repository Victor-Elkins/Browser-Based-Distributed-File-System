import Login from "./Login/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
