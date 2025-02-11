import { Link } from "react-router-dom"


const Recipe = ({ recipe }) => {
  return (
    <div className="recipe w-80 overflow-hidden bg-white/75 rounded-xl shadow-2xl shadow-rose-100 p-5 border-2 border-white flex flex-col gap-5 hover:scale-105 hover:duration-500 hover:shadow-rose-200 hover:shadow-lg">
      <div className="img h-40 overflow-hidden flex justify-center items-center rounded-lg">
        <img src={recipe.image_url} alt={recipe.title} className="block w-full "/>
      </div>
      <div className="texts">
        <span className="publisher text-xs uppercase text-sky-400 font-semibold tracking-widest">{recipe.publisher}</span>
        <h2 className="title text-2xl font-semibold tracking-wide truncate">{recipe.title}</h2>
        <Link to={`/recipe-item/${recipe.id}`} className="bg-gradient-to-br from-rose-400 to-rose-600 text-rose-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider inline-block mt-2 shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300">View recipe</Link>
      </div>
    </div>
  )
}

export default Recipe
