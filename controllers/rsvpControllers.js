require("dotenv").config();
const express = require("express");
const app = express();
const { doc } = require("../config/sheets");
const nopedb = require("nope.db");
const db = new nopedb({
	path: "./db/rsvp.json",
	seperator: ".",
	spaces: 2,
});

module.exports = {
	getRsvp: (req, res) => {
		let rsvp = db.get("rsvp");
		return res.json({
			message: "Success GET Rsvp",
			data: rsvp,
		});
	},

	addRsvp: async (req, res) => {
		db.push("rsvp", req.body);
		let newData = db.get("rsvp");

		await doc.loadInfo();
		const sheet = doc.sheetsByIndex[0];
		const row = await sheet.addRow({
			nama: req.body.guestName,
			count: req.body.guestCount,
			status: req.body.guestStatus,
		});

		return res.json({
			message: "Success Add Rsvp",
			data: newData,
		});
	},

	resetRsvp: (req, res) => {
		db.set("rsvp", []);
		return res.json({
			message: "Success Reset Rsvp",
		});
	},
};
