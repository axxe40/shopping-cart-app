import { useEffect, useState } from "react";
import Footer from "@/Components/Cart/Footer";
import Header from "@/Components/Cart/Header";
import Cartlist from "@/Components/Cart/Cartlist";

export default function Home() {

  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch('/api/cartlist').then((response) => {
      return response.json();
    }).then((result) => {
      setCartItem(result.list.rows)
    })
  }, [])

  function calculateTotalPrice(total, row) {
    return total + row.harga * row.quantity
  }

  const totalPrice = cartItem.reduce(calculateTotalPrice, 0)

  return (
      <div className="App">
        <Header />
        <div className='cartlist'>
        <div className='list-container' style={{ minHeight: "63vh" , position: "relative" }}>
          {cartItem.length > 0 ? cartItem.map((item) => (
              <Cartlist key={item.id} item={item} cartItem={cartItem} setCartItem={setCartItem} />
          )) : <p className="abis_item" > No items have been added to cart </p> }  
          </div>
          <p style={{ borderBottom: "5px solid black", width: "70%", position: "absolute", left: "52%", transform: "translateX(-50%)", bottom: "5em" }} />
          <p className='box' style={{
            justifyContent: 'center', marginTop: "3em", marginLeft: "auto", marginRight: "auto",
            transform: "translateX(-8px)", width: "50%", padding: "12px 0", marginBlockEnd: "0"
          }}> Total Harga: {totalPrice} </p>

        </div>
        <Footer />
      </div>
  )
}
