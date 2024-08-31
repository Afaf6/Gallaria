
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/layout';
import Galleria from './Pages/gallaria';
import Photos from './Pages/Photos';



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Layout/>}>
         <Route path="/gallaria" element ={<Galleria/>} />
         <Route path="/gallaria/:id" element = {<Photos/>}/>
         <Route path="/gallaria/:id/:namephoto" element= {<Photos/>}/>
         </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
