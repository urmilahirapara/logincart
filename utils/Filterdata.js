function filterDatafn(searchtext,restaurants)
{

     const a= restaurants.filter((restaurant)=>
       restaurant?.data?.name?.toLowerCase().includes(searchtext.toLowerCase())
    );
    
      return a;
    
    
}
export default filterDatafn;