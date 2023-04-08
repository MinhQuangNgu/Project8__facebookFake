const accountController = require("../controllers/account.controller");

function router(app) {
	app.use("/v1/account", accountController.getTest);
}

module.exports = router;
