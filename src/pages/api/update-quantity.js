import { getPgKnext } from "../../../knex"

export default async function handler(req, res) {
    const activity = req.body.activity
    const item_id = req.body.item_id



    const select = await getPgKnext().raw(`SELECT quantity FROM transaction_cart  WHERE item_id = ${item_id}`)

    const quantity = select.rows[0].quantity
    const newQuantity = activity === 'increment' ? quantity + 1 : quantity - 1 
    
     if (newQuantity === 0) {
         const result = await getPgKnext().raw(`DELETE FROM transaction_cart WHERE item_id = ${item_id} `)
          res.status(200).json({ todo: result })
        
    }
    else {
        const result = await getPgKnext().raw(`UPDATE transaction_cart SET quantity= '${newQuantity}' WHERE item_id = ${item_id} `)
          res.status(200).json({ todo: result })
     }
}