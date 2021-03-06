const Travelers = require('./Travelers');
const Locations = require('./Locations');
const Trips = require('./Trips');

Travelers.belongsToMany(Locations, {
    foreignKey: 'location_id',
    through: {
        model: Trips,
        unique: false
      },
    as: 'planned_trips'
});


Locations.belongsToMany(Travelers, { 
    foreignKey: 'travelers_id',
    through: {
        model: Trips,
        unique: false
      },
      // Define an alias for when data is retrieved
      as: 'location_travellers'
});

module.exports = {Travelers, Locations, Trips};