const express = require('express');
const axios = require('axios')

const router = express.Router();
const artistBL = require('../model/artistBL')

router.route('/').get(async (req, resp) => {
    let data = await artistBL.getAllArtists();
    return resp.json(data)

})

router.route('/:id').get(async (req, resp) => {
    let currentId = req.params.id;
    let currentArtist = await artistBL.getArtist(currentId);
    return resp.json(currentArtist);

})


router.route('/').post(async (req, resp) => {
    let newArtist = req.body
    let data = await artistBL.addArtist(newArtist);
    return resp.json(data.massage)

})

router.route('/:id').put(async (req, resp) => {
    let id = req.params.id
    let updatedData = req.body
    let answer = await artistBL.updateArtist(id, updatedData)
    return resp.json(answer)

})


router.route('/:id').delete(async (req, resp) => {
    let id = req.params.id
    let answer = await artistBL.deleteArtist(id)
    return resp.json(answer.massage)

})

module.exports = router

