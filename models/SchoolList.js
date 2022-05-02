'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var schoolListSchema = Schema( {
  userId: ObjectId,
  collegeId: ObjectId,
} );

module.exports = mongoose.model( 'SchoolList', schoolListSchema );
