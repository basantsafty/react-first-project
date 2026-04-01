
function Card({id,name,price,image}){
  function handleClick(){
      alert(`Product: ${name}, Price: ${price}$`)
  }
  return(
    <div className="bg-pink-200 p-2 m-2 border-2 border-pink-700 flex flex-col items-center">
      <p className="text-3xl font-bold text-pink-900 m-2 p-2">{name}</p>
      <p className="text-xl m-2 p-2">ID:{id}</p>
      <p className="text-xl  m-2 p-2">price:{price}$</p>
      <img src={image} alt={name} height="200px" width="200px" className="border-3 border-pink-700 rounded-2xl " />
      <button className="bg-pink-500 text-white px-4 py-2 rounded m-2 hover:bg-pink-700" onClick={handleClick}>log product</button>
    </div>
  )
    
}

export default Card