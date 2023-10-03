import { useEffect, useState } from "react";

function Itemcard ({row, data, setData}) {
    const { id, nama, harga, image, vc } = row;
    const [showNotification, setShowNotification] = useState(false);
    
    function addtoCart() {
    
        setShowNotification(true);

        fetch('/api/addtocart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
    
            })
        }).then((response) => {
            
            const newData = [...data]
            const index = newData.findIndex((row) => row.id === id)

            const droppedItem = newData.splice(index, 1)[0]
            droppedItem.vc = true
            newData.splice(index, 0, droppedItem)
            setData(newData)
            
        })  

        setTimeout(() => {
            setShowNotification(false)}, 700);

    }
    
    return (
        <div className="cards">
         <div className="img_box">
                <img alt="" src={image}/>
            </div>
            <div className="description">
                <p>{nama}</p>
                <p>Harga: {harga}</p>
            </div>
            <button onClick={addtoCart} className="add_to_cart" disabled={vc}> Add to cart </button>
            {showNotification && <div className="notification">Item has been added to cart</div>}
        </div>
    )
} 




function Coresystem() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/list').then((response) => {
            return response.json();
        }).then((response) => {
            setData(response.data.rows);
        });
    }, [])



    return (
        <div className="coresystem">
            
            {/* satuan dari data adalah data */}
            {/* variabel data diambil dari data.map
                yang props data dipassing ke komponen Itemcard yang value nya sama dengan
                variabel data */}
            {data.map((row)=> (
             <Itemcard key={row.id} row={row} data={data} setData={setData} />
         ))}
        </div>
    )
}

export default Coresystem;