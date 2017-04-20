'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// http://mongoosejs.com/docs/guide.html

var TaskSchema = new Schema({
	name : {
		type: String,
		Required: 'Enter the name of the task'
	},

	Created_date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [{
			type: String,
			enum: ['pending','ongoing','completed']
		}],
		default: ['pending']
	}
});

module.exports = mongoose.model('Task', TaskSchema);