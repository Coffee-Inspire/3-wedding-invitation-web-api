const { doc } = require("../config/sheets");
// const Wishes = require("../models/wishesModel");

module.exports = {
	getWishes: async (req, res) => {
		await doc.loadInfo();
		const sheet = doc.sheetsByTitle["Wishes"];

		const rows = await sheet.getRows();
		const wishes = rows.map((item, index) => ({
			id: index + 1,
			name: item.name,
			wish: item.wish,
		}));

		return res.json({
			message: "Success GET Wishes",
			data: wishes,
		});

		// const wishes = await Wishes.findAll();
		// return res.json({
		// 	message: "Success GET Wishes",
		// 	data: wishes,
		// });
	},

	addWishes: async (req, res) => {
		try {
			await doc.loadInfo();
			const sheet = doc.sheetsByTitle["Wishes"];

			await sheet.setHeaderRow({ name: "name", wish: "wish" });
			const row = await sheet.addRow({
				name: req.body.name,
				wish: req.body.wish,
			});

			const rows = await sheet.getRows();
			const wishes = rows.map((item, index) => ({
				id: index + 1,
				name: item.name,
				wish: item.wish,
			}));

			return res.json({
				message: "Success Add Wishes",
				data: wishes,
			});
		} catch (e) {
			console.log(e);
		}
	},

	// resetWishes: (req, res) => {
	// 	db.set("wishes", []);
	// 	return res.json({
	// 		message: "Success Reset Wishes",
	// 	});
	// },
};
