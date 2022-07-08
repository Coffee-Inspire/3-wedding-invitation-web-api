const Wishes = require('../models/wishesModel');

module.exports = {
	getWishes: async (req, res) => {
		const wishes = await Wishes.findAll();
		return res.json({
			message: "Success GET Wishes",
			data: wishes,
		});
	},

	addWishes: async (req, res) => {
		try{
            const newData = await Wishes.create(req.body);

            return res.json({
				message: "Success Add Wishes",
				data: newData,
			});
        } catch (e){
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
