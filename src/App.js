import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import NotFound from './components/NotFound';
import RecipeItem from './components/RacipeItem';
import { useRef, useState } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const inputField = useRef(null);


  const searchHandler = (e) => {
    e.preventDefault();
    
    getData(searchQuery);

    inputField.current.blur();
    setSearchQuery('');
    setRecipes([]);
  };

  const getData  = async (searchQuery) => {
    try{
      setLoading(true);
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`)
      if(!res.ok) throw new Error('No recipe found!');
      const data = await res.json();
      
      setRecipes(data.data.recipes);
      setLoading(false);
    }
    catch(error){
      setError(error.message);
    }
  };

  return (
    <>
      <div className='app min-h-screen bg-rose-50 text-gray-600 text-lg'>
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} inputField={inputField} searchHandler={searchHandler}/>
        <Routes >
          <Route path='/' element={<Home recipes={recipes} loading={loading} error={error}/>}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/recipe-item/:id' element={<RecipeItem />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
      <Footer/>
      
    </>
  )
}

export default App;
