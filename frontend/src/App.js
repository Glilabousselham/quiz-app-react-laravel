
import './App.css';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import SingUp from './Sing/singup/SingUp';
import SingIn from './Sing/singin/SingIn';
import Test from './Test/Test';

function App() {
  return (

      <BrowserRouter>
      <Routes>
     <Route path="/signup" element={<SingUp/>}/>
     <Route path="/signin" element={<SingIn/>}/>
     <Route path="/test" element={<Test/>}/>
     </Routes>
      </BrowserRouter>
   
  );
}

export default App;
