const Shimmer = () => {
  return (
    <div className="flex flex-wrap" data-testid="shimmer" >
     
      {Array(10)
        .fill("")
        .map((e,index) => (
          <div className="w-60 px-5 mx-8 my-12 shadow-lg bg-blue-200" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
