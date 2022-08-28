const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const routes = require("./routes");
const sequelize = require("./config/db");

const Rsvp = require("./models/rsvpModel");
const Wishes = require("./models/wishesModel");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
	res.json({
		message: "REST API Wedding",
	});
});
app.use(routes);

// async function testConnection () {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');

//         await Rsvp.sync({alter: true});
//         await Wishes.sync({alter: true});
//         console.log("All model were synchronized successfully");
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }
// testConnection();

app.listen(port, () => {
	console.log("server running on port " + port);
});
