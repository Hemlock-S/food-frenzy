
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const RacipeItem = () => {

  const { id } = useParams(); // react-router hook
  
  const {data: recipe, loading, error} = useFetch(id);

  if(recipe){
    console.log(recipe);
  }
  

  return (
    <div>
      RacipeItem
    </div>
  )
}

export default RacipeItem
