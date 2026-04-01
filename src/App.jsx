
import laptopImg from "./assets/laptop.jfif";
import mobileImg from "./assets/mobile.jpg";
import tabletImg from "./assets/tablet.jfif";
import Ps5Img from "./assets/ps5.jfif";
import xboxImg from "./assets/xbox.avif";

function App() {
  let products=[
    {id:1,name:"laptop",price:5000,image:laptopImg},
    {id:2,name:"mobile",price:2000,image:mobileImg},
    {id:3,name:"tablet",price:3000,image:tabletImg},
    {id:4,name:"Ps5",price:5000,image:Ps5Img},
    {id:5,name:"xbox",price:4000,image:xboxImg},
  ]
  return (
    <ul>
     {products.map(({id,name,price,image})=>
      (
        <li key={id}>
      <Card name={name} id={id} price={price} image={image}  />
        </li>
    )
      
     )}
     </ul>
  )
}

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

export default App
