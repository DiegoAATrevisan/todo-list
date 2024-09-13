import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Sobre from './pages/sobre';
import Todo from './pages/todo';
import Home from './pages/home';
import { ContextoTema } from './context/contextTema';
import { ContextoTarefas } from './context/contextTodo';
import { FirebaseContext } from './context/contexFirebase';
import { db, auth } from './firebaseConfig';


function App() {
  const renderButtons = () => {
    return (
      <div className='App'>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/todo">Tasks</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
      </div>
    )
  }


  return (
    <ContextoTema.Provider value="Dark">
      <FirebaseContext.Provider value={{ db, auth }}>
        <ContextoTarefas.Provider value={[]}>
          <Router>
            {renderButtons()}
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/todo" element={
                <Todo></Todo>
              } />
              <Route path="/sobre" element={<Sobre></Sobre>} />
            </Routes>
          </Router>
        </ContextoTarefas.Provider>
      </FirebaseContext.Provider>
    </ContextoTema.Provider>
  );
}

export default App;
