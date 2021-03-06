const express = require("express");
const router = express.Router();
const {list,show,create,update,remove} = require( "../controllers/ContactController.js");


router.get("/contacts", list);
router.get("/contact/:id", show);
router.post("/contacts", create);
// router.put("/contacts/:id", update);
// router.delete("/contacts/:id", remove);

module.exports = router;
