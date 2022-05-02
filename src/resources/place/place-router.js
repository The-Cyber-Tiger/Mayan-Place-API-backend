import { Router } from "express"
import controllers from './place-controller'

const router = Router()

router
    .route('/')
    .get(controllers.getMany)
    .post(controllers.createOne)



router
    .route('/category')
    .get(controllers.getByCategory)

router
    .route('/create-many')
    .post(controllers.createMany)

router
    .route('/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.removeOne)
export default router