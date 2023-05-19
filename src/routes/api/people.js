import { Router } from "express";
import PersonController from '../../controllers/Person.controllers'
import SpouseController from '../../controllers/Spouse.controllers'

const router = Router()

router.get('/', PersonController.listPeople)
router.post('/add', PersonController.addNewPerson)
router.post('/:personId/add-spouse', SpouseController.addSpouseToPerson)

export default router