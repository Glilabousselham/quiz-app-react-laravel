
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingUp from './Sing/singup/SingUp';
import SingIn from './Sing/singin/SingIn';
import Test from './Test/Test';
import DashboardLayout from './dashboard-components/DashboardLayout';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SingUp />} />
        <Route path="/signin" element={<SingIn />} />
        <Route path="dashboard" element={<DashboardLayout>dashboard</DashboardLayout>} />
        <Route path="dashboard/new-test" element={<DashboardLayout>new test</DashboardLayout>} />
        <Route path="dashboard/current-tests" element={<DashboardLayout>current Test</DashboardLayout>} />
        <Route path="dashboard/tests" element={<DashboardLayout><Test /></DashboardLayout>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
