import { getPgKnext } from "../../../knex"

export default async function handler(req, res) {
    

    const result = await getPgKnext().raw("SELECT master_item.id, item_name as nama, harga, quantity FROM master_item RIGHT OUTER JOIN transaction_cart ON master_item.id = transaction_cart.item_id ORDER BY master_item.id")
    res.status(200).json({ list: result })
}   