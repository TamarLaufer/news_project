import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import Favorites from "./Screens/Favorites";
import Article from "./Screens/Article";
import { Context, DataProvider } from "./Context/Context";

function App() {
  return (
    <div className='App'>
      <Router>
        <DataProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/article/:id' element={<Article />} />
          </Routes>
        </DataProvider>
      </Router>
    </div>
  );
}

export default App;
