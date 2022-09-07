import { Route, Routes } from "react-router-dom";
import AllMetups from "./pages/AllMetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
   <>
   <MainNavigation />
   <Routes>
      <Route exact path='/' element={<AllMetups/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='new-meetups' element={<NewMeetup/>}/>
   </Routes>
   </>
  )
}

export default App;
