import { getPgKnext } from "../../../knex"

export default async function handler(req, res) {


    const result = await getPgKnext().raw("SELECT master_item.id, item_name as nama, harga, (CASE WHEN transaction_cart.id is not NULL THEN TRUE ELSE FALSE END) as vc, image FROM master_item LEFT OUTER JOIN transaction_cart ON master_item.id = transaction_cart.item_id ORDER BY master_item.id")
    res.status(200).json({ data: result })
}