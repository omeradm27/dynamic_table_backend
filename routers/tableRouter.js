const express = require("express");
const router = express.Router();

const {
    getAllData,
    addTableData,
updateTableData,
deleteTableData
    
} = require('../controllers/dynamicTableController');

router.get("/", getAllData);
router.post("/add", addTableData);
router.put("/update/:id", updateTableData);
router.delete("/delete/:id", deleteTableData);



module.exports = router;