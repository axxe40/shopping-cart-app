

function Cartlist({ item, cartItem, setCartItem }) {
    const { id, nama, harga, quantity } = item;


    function deleteQuantity() {
        const updatedCartItems = cartItem.filter((row) => row.id !== id)
        setCartItem(updatedCartItems)
    }



    function addQuantity() {

        function findItem(row) {
            return row.id === id;
        }

        const newQuantityItem = [...cartItem]
        const index = newQuantityItem.findIndex(findItem)


        fetch('/api/update-quantity', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                activity: 'increment',
                item_id: id

            })
        }).then((response) => {

            const droppedItem = newQuantityItem.splice(index, 1)[0]
            droppedItem.quantity = droppedItem.quantity + 1
            newQuantityItem.splice(index, 0, droppedItem)
            setCartItem(newQuantityItem)


        })

    }

    function minusQuantity(id) {
        function findItem(row) {
            return row.id === id;
        }

        const newQuantityItem = [...cartItem]
        const index = newQuantityItem.findIndex(findItem)
        fetch('/api/update-quantity', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                activity: 'decrement',
                item_id: id

            })
        }).then((response) => {
            const droppedItem = newQuantityItem.splice(index, 1)[0]
            console.log(droppedItem);
            droppedItem.quantity = droppedItem.quantity - 1
            newQuantityItem.splice(index, 0, droppedItem)
            setCartItem(newQuantityItem)
            console.log(droppedItem.quantity)
            if (droppedItem.quantity === 0) {
                deleteQuantity()
            }

        })


    }
    


    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: "50%", minWidth: 490, marginBottom: "20px", marginTop: "19px", marginLeft: "auto", marginRight: "auto" }}>
            <div className="box" style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                <p > {nama} </p>
                <p style={{ marginRight: "3px" }}>| harga: {harga} </p>
                <p style={{ marginRight: "5px" }}>| Quantity: {quantity} </p>
                <p style={{ marginRight: "5px" }}>| Jumlah Harga: {harga * quantity} </p>
            </div>
            <button className="btn minus" style={{ marginTop: "5px", marginBottom: "3px", marginLeft: "15px" }}
                onClick={() => minusQuantity(id)}> - </button>
            <button className="btn plus" style={{ marginTop: "5px", marginBottom: "3px", marginLeft: "15px" }}
                onClick={() => addQuantity(id)}> + </button>
        </div>

    );
}

export default Cartlist;