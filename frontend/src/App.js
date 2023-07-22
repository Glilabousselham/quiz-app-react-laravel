
import './App.css';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import SingUp from './components/singup/SingUp';
import SingIn from './components/singin/SingIn';
import Test from './components/test/Test'
import Answer from './components/answer/Answer';

function App() {
  return (

      <BrowserRouter>
      <Routes>
     <Route path="/signup" element={<SingUp/>}/>
     <Route path="/signin" element={<SingIn/>}/>
     <Route path="/test" element={<Test/>}/>
     <Route path="/answer" element={<Answer/>}/>
     </Routes>
      </BrowserRouter>
   
  );
}

export default App;
