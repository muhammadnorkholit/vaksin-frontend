import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import Consultation from './pages/Consultation';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Login/>}/>
      <Route path='/dashboard' exact element={<Dashboard/>}/>
      <Route path='/consultation' exact element={<Consultation/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
