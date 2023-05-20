import db from "../database/models"
import { generateIDNUMBER } from "../helpers"

export default class PersonController {
    static async listPeople(req, res){
        try {
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
            
        } catch (error) {
            return res.status(400).json({
                error: error.message
            })
        }
        
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

    static async findByIDNUMBER(req, res){
        const { IDNUMBER } = req.params
        const include = [
            {
                model: db.Partner,
                as:'spouse'
            }
        ]

        const response = await db.People.findOne({ 
            where: { IDNumber: IDNUMBER },
            include
        })

        if(!response){
            return res.status(404).json({
                message: 'No such person of this ID NUMBER found!'
            }) 
        }
        return res.status(200).json({
            response
        })
    }
}