
import laptopImg from "./assets/laptop.jfif";
import mobileImg from "./assets/mobile.jpg";
import tabletImg from "./assets/tablet.jfif";
import Ps5Img from "./assets/ps5.jfif";
import xboxImg from "./assets/xbox.avif";
import Card from "./card";

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

export default App
