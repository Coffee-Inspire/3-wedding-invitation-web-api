require("dotenv").config();

const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet(process.env.SHEET_ID);
doc.useServiceAccountAuth({
	client_email: process.env.SHEET_EMAIL,
	private_key: process.env.SHEET_SECRET.replace(/\\n/g, "\n"),
});

module.exports = {
	doc,
};
