export const getData  = async () => {
    try{
      setLoading(true);
      const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchQuery}`)
      if(!res.ok) throw new Error('No recipe found!');
      const data = await res.json();
      console.log(data);
      
      setData(data.recipes);
      setLoading(false);
    }
    catch(error){
      setError(error.message);
    }
  };