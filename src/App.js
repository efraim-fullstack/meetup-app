import { Route, Routes } from "react-router-dom";
import AllMetups from "./pages/AllMetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
   <Layout>
    <Routes>
        <Route exact path='/' element={<AllMetups/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='new-meetups' element={<NewMeetup/>}/>
    </Routes>
   </Layout>
  )
}

export default App;
