const Travelers = require('./Travelers');
const Locations = require('./Locations');
const Trips = require('./Trips');

Travelers.hasMany(Locations, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE',
});


Locations.belongsToMany(Travelers, { through: Trips,
    foreignKey: 'travelers_id',
    onDelete:'CASCADE'
});

module.exports = {Travelers, Locations, Trips};