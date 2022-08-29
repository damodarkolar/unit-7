import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { NavBar } from './components/NavBar';
import { CreateTodos } from './pages/CreateTodos';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/createTodo' element={<CreateTodos/>}/>
      </Routes>
    </div>
  );
}

export default App;
