import db from "../database/models"
import { generateIDNUMBER } from "../helpers"

export default class PersonController {
    static async listPeople(req, res){
        const include = [
            {
                model: db.Partner,
                as:'spouse'
            }
        ]
        const people = await db.People.findAll({
            include
        })

        // res.render('peopleList', { title: 'List', people})
        return res.status(200).json({
            response: people
        })
    }

    static async addNewPerson(req, res){
        const data = req.body
        data.dateOfBirth = Date.now()

        const person = await db.People.create({
            ...data
        })

        // if(people.dataValues){
        //     res.status(201).redirect('/person')
        // }

        return res.status(201).json({
            response: person
        })
    }



    static async getFormToAddPeople(req, res){
        res.render('addPeople', { title: 'Add' })
    }

}