const { doc } = require("../config/sheets");
// const Rsvp = require("../models/rsvpModel");

module.exports = {
	getRsvp: async (req, res) => {
		const rsvp = await Rsvp.findAll();
		return res.json({
			message: "Success GET Rsvp",
			data: rsvp,
		});
	},

	addRsvp: async (req, res) => {
		try {
			// const newData = await Rsvp.create(req.body);

			await doc.loadInfo();
			const sheet = doc.sheetsByTitle["RSVP"];
			const row = await sheet.addRow({
				nama: req.body.guestName,
				count: req.body.guestCount,
				status: req.body.guestStatus,
			});

			return res.json({
				message: "Success Add Rsvp",
				// data: newData,
			});
		} catch (e) {
			console.log(e);
		}
	},

	// resetRsvp: (req, res) => {
	// 	db.set("rsvp", []);
	// 	return res.json({
	// 		message: "Success Reset Rsvp",
	// 	});
	// },
};
