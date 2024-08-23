
import { NavLink } from 'react-router-dom'

const Navbar = ({searchHandler, searchQuery, setSearchQuery, inputField}) => {




  const navActive = ({isActive}) => {
    return {
      color: isActive ? '#f43f5e' : null,
    };
  }



  return (
    <div className='navbar flex justify-between items-center container mx-auto py-8 sm:flex-col lg:flex-row gap-5 lg:gap-0'>
      <h2 className="logo text-2xl font-bold lowercase italic">Food<span className='text-rose-500'>frenzy</span></h2>
      <form className='search-bar' onSubmit={searchHandler}>
        <input
        ref={inputField}
         type="search"
         value={searchQuery}
         onChange={e => setSearchQuery(e.target.value)}
         placeholder='Search recipe....' 
         required 
         className='bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-300'/>
      </form>
      <ul className="menu flex gap-5 ">
        <li>
          <NavLink style={navActive} end to={'/'} className=" text-gray-400 hover:text-gray-600 duration 300">Home</NavLink>
        </li>
        <li >
          <NavLink style={navActive} to={'/favorites'} className="text-gray-400 hover:text-gray-600 duration-300">
            Favorites <span className='favorites-count text-sm  font-bold text-rose-400'>10</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
