import { getPgKnext } from "../../../knex"


export default async function handler(req, res) {
    const id = req.body.id

    const result = await getPgKnext().raw(`INSERT INTO transaction_cart (item_id, quantity) VALUES (${id}, 1)`)
    res.status(200).json({ todo: result })

}