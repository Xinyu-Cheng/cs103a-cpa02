'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var collegeSchema = Schema( {
    unitID: Number,
    name: String, 
    state: String,
    websiteAddress: String, 
    city: String,
} );

module.exports = mongoose.model( 'College', collegeSchema );