'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var collegeSchema = Schema( {
    unitID: Number,
    name: String, //Institution Name
    state: String, //State abbreviation (HD2020)
    websiteAddress: String, //Institution's internet website address (HD2020)
    city: String, //City location of institution (HD2020)
} );

module.exports = mongoose.model( 'College', collegeSchema );