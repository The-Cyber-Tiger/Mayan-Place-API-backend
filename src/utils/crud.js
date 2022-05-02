
export const getOne = model => async(req, res)=>{
    try {
        const doc = await model
        .findOne({ _id: req.params.id})
        .lean()
        .exec()

        if(!doc){
            return res.status(400).end()
        }
        res.status(200).json({ data: doc })
    } catch (error) {
        console.error(error)
        res.status(400).end()
    }
}

export const getMany = model => async(req, res) => {
    try {
        const docs = await model
            .find()
            .sort({createdAt: 1})
            .lean()
            .exec()
        if (!docs) {
            return res.status(400).end()
        }
        res.status(200).json({ data: docs })
    } catch (error) {
        console.error(error)
        res.status(400).end()
    }
}

export const createOne = model => async(req, res) => {
    
    try {
        const doc = await model.create({...req.body})
        if (!doc) {
            return res.status(400).end()
        }
        res.status(201).json({ data: doc })

    } catch (error) {
        console.error(error)
        res.status(400).end()
    }
}

export const createMany = model => async(req, res) => {
    
    try {
        const doc = await model.insertMany([...req.body])
        if (!doc) {
            return res.status(400).end()
        }
        res.status(201).json({ data: doc })

    } catch (error) {
        console.error(error)
        res.status(400).end()
    }
}

export const updateOne = model => async(req, res) => {
    try {
        const updatedDoc = await model
            .findOneAndUpdate({_id: req.params.id},
                req.body, { new: true }
            )
            .lean()
            .exec()
        if (!updatedDoc) {
            return res.status(400).end()
        }
        res.status(200).json({ data: updatedDoc })
    } catch (error) {
        console.error(error)
        res.status(400).end()
    }
}

export const removeOne = model => async(req, res) => {

    try {
        const removed = await model
            .findOneAndRemove({ _id: req.params.id })

        if (!removed) {
            return res.status(400).send({ message: 'no se encontró' })
        }
        return res.status(200).json({ data: removed })
    } catch (error) {
        console.error(error)
        res.status(400).send({ message: 'algo pasó' })
    }
}

export const getByCategory = model  => async(req,res) => {
    try {
        const docs = await model
            .find({category: req.query.category})
            .sort({updatedAt: -1})
            .limit(3)
            .lean()
            .exec()
        if(!docs){
            return res.status(400).end()
        }
        res.status(200).json({ data: docs })
        
    } catch (error) {
        console.error(error)
        res.status(400).end()
    }
}

export const crudControllers = model => ({
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model),
    createMany: createMany(model),
    getByCategory: getByCategory(model)
})