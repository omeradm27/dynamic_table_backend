const mongoose = require('mongoose');

const DynamicTableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tableHeights: {
    type: [[Number]], 
    required: true,
  },
  tableWidths: {
    type: [[Number]], 
    required: true,
  },
  cellImages: {
    type: [[String]], 
    required: true,
  },
  rowCount: {
    type: Number,
    required: true,
  },
  colCount: {
    type: Number,
    required: true,
  },
  tableHeight: {
    type: Number,
    required: true,
  },
  tableWidth: {
    type: Number,
    required: true,
  },
});


module.exports =mongoose.model('DynamicTable', DynamicTableSchema);



