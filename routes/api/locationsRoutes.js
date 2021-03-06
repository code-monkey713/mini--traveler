const router = require('express').Router();
const { Travelers, Locations, Trips } = require('../../models');

// Get ALL Location data
router.get('/', async (req, res) => {
    try{
        const locationData = await Locations.findAll({
            include: [{ model: Trips }]
        })
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        const locationData = await Locations.findByPk(req.params.id, {
            include: [{ model: Trips }]
        });

        if (!locationData){
            res.status(404).json({ message: 'Location not found!'})
            return;
        }
        res.status(200).json(locationData);
    }
    catch{
        res.status(500).json(err);
    }
});

