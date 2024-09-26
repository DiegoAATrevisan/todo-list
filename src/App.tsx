import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Sobre from './pages/sobre';
import Todo from './pages/todo';
import Home from './pages/home';
import { ContextoTema } from './context/contextTema';
import { ContextTasks } from './context/contextTodo';
import { FirebaseContext } from './context/contexFirebase';
import { db, auth } from './firebaseConfig';
import { Api } from './utils/api/api';
import { TodoService } from './utils/TodoService';


function App() {
  const api: Api = new Api(db, auth);
  const todoService = new TodoService()
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
      <FirebaseContext.Provider value={{ api }}>
        <ContextTasks.Provider value={{ todoService }}>
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
        </ContextTasks.Provider>
      </FirebaseContext.Provider>
    </ContextoTema.Provider>
  );
}

export default App;
