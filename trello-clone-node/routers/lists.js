const express = require('express')
const router = express.Router()
const List = require('../models/list')

async function getList(req, res, next) {
    let list = null
    try {
        list = await List.findById(req.params.id)
        if (list == null) {
            return res.status(404).json({message : `List ${req.params.id} does not exist`})
        }
    } catch (err) {
        return res.status(500).json({message : err.message})
    }

    res.list = list
    next()
}

router.get('/', async(req, res) => {
    try {
        const lists = await List.find();
        res.send(lists)
    } catch(err) {
        res.status(500).json({message : err.message})
    }
})

router.get('/:id', getList, (req, res) => {
    try {
        res.send(res.list);
    } catch(err) {
        res.status(500).json({message : err.message})
    }
})


router.post('/',  async(req, res) => {
    const list = new List({
        name : req.body.name,
        cards : []
    })
    try {
        const newList = await list.save()
        res.status(201).json(newList)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

router.patch('/:id/add/:name', getList, (req, res) => {
    try {
        res.list.cards.push(req.params.name)
        res.list.save()
        res.send(res.list);
    } catch(err) {
        res.status(500).json({message : err.message})
    }
})

router.patch('/:id/edit/:index/:newName', getList, (req, res) => {
    try {
        res.list.cards[req.params.index] = req.params.newName
        res.list.save()
        res.send(res.list);
    } catch(err) {
        res.status(500).json({message : err.message})
    }
})

router.patch('/:id/rename/:newName' , getList, (req, res) => {
    try {
        res.list.name = req.params.newName
        res.list.save()
        res.send(res.list);
    } catch(err) {
        res.status(500).json({message : err.message})
    }
})



module.exports = router
