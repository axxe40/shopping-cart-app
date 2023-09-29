import { useEffect, useState } from "react";

function Itemcard ({data}) {
    const { id, nama, harga, image } = data;
    
    function addtoCart() {
        fetch('/api/addtocart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
    
            })
        }).then((response) => {
             
            response
        })  
    }
    
    return (
        <div className="cards">
         <div className="img_box">
                <img alt="" src={image}/>
            </div>
            <div className="description">
                <p>{nama}</p>
                <p>{harga}</p>
                <button onClick={addtoCart}> Add to cart </button>
            </div>
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
            {data.map((data)=> (
             <Itemcard key={data.id} data={data} />
         ))}
        </div>
    )
}

export default Coresystem;