
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingUp from './components/singup/SingUp';
import SingIn from './components/singin/SingIn';
import Test from './components/test/Test';
import DashboardLayout from './dashboard-components/DashboardLayout';
import CurrentTestsPage from './current-tests-page/CurrentTestsPage';
import Answer from './components/answer/Answer';


function App() {
  return (

    <BrowserRouter>
      <Routes>

      
   


        <Route path="/signup" element={<SingUp />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="dashboard" element={<DashboardLayout>dashboard</DashboardLayout>} />
        <Route path="dashboard/new-test" element={<DashboardLayout>new test</DashboardLayout>} />
        <Route path="dashboard/current-tests" element={<DashboardLayout><CurrentTestsPage /></DashboardLayout>} />
        <Route path="dashboard/tests" element={<DashboardLayout><Test /></DashboardLayout>} />

        <Route path="/answer" element={<Answer />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
