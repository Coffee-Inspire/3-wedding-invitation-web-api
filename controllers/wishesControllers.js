const express = require("express");
const app = express();
const nopedb = require("nope.db");
const db = new nopedb({
	path: "./db/wishes.json",
	seperator: ".",
	spaces: 2,
});

module.exports = {
	getWishes: (req, res) => {
		let wishes = db.get("wishes");
		return res.json({
			message: "Success GET Wishes",
			data: wishes,
		});
	},

	addWishes: (req, res) => {
		db.push("wishes", req.body);
		let newData = db.get("wishes");
		return res.json({
			message: "Success Add Wishes",
			data: newData,
		});
	},

	resetWishes: (req, res) => {
		db.set("wishes", []);
		return res.json({
			message: "Success Reset Wishes",
		});
	},
};
