import { getPgKnext } from "../../../knex"

export default async function handler(req, res) {


    const result = await getPgKnext().raw("SELECT master_item.id, item_name as nama, harga, image FROM master_item")
    res.status(200).json({ data: result })
}