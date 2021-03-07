import './App.css';
import Router from '../Components/Routers/Routers'
import AdminRouter from '../Admin-Area/Router'
import ProtectedRoute from '../Components/protectedRoute/ProtectedRoute'
function App() {
  return (
    <div className="App">
      <Router/>
      <AdminRouter/>
    </div>
  );
}

export default App;
