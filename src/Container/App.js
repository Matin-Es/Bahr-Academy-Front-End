import './App.css';
import Router from '../Components/Routers/Routers'
import AdminDashboard from '../Admin-Area/router/Router'
function App() {
  return (
    <div className="App">
      <Router/>
      <AdminDashboard/>
    </div>
  );
}

export default App;
