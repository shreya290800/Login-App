import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login';
import AdminSignUp from './SignUp';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<AdminSignUp/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
