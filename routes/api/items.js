const router = require('express').Router()
const Item = require('../../models/Item')

//  @route GET api/items
//  @desc  Get All Items
//  @access Public
router.get('/', async (req, res) => {
  try{
    const items = await Item
    .find({})
    .sort({date: -1})
    res.json(items)
  }catch(err){
  }
})

//  @route POST api/items
//  @desc  Create an item
//  @access Public
router.post('/', async (req, res) => {
  try{
    const newItem = new Item({
      name: req.body.name
    })
    const item = await newItem.save()
    res.json(item)
  }catch(err){
  }
})

//  @route DELETE api/items/id
//  @desc  Delete an item
//  @access Public
router.delete('/:id', async (req, res) => {
  try{
    const item = await Item.findById(req.params.id)
    await item.deleteOne()
    res.json({success: true})
  }catch(err){
    res.status(404).json({success: false})
  }
})




module.exports = router

