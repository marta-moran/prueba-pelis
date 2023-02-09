import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Header from './components/HeaderComponent/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
