import db from "../database/models"
import { generateIDNUMBER } from "../helpers"

export default class PersonController {
    static async addSpouseToPerson(req, res){
        const data = req.body
        const { personId } = req.params
        data.personId = personId

        const personWithSpouse = await db.Partner.create({
            ...data
        })

        return res.status(201).json({
            response: personWithSpouse
        })
    }
}