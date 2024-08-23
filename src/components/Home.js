import Recipe from './Recipe'

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center lg:flex flex-row items-center">

    {!loading && !error && recipes.length === 0 ? <p className='text-2xl lg:text-4xl font-bold text-rose-300'>Nothing to show, please search something!</p>: null}


    {loading && !(<p>{error ? error : "Loading..."}</p>)}

      {
         recipes.length > 0 && recipes.map(recipe => (
          <Recipe recipe={recipe} key={recipe.id}/>
        ))
      }
    </div>
  )
}

export default Home;
