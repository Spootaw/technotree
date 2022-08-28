import { Routes, Route } from 'react-router-dom';
import DogList from './components/DogList';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<DogList />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
