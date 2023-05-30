const Table = require("../models/DynamicTable")
// const asyncErrorWrapper = require("express-async-handler");

const getAllData = async (req, res) => {
    try {
        const tableData = await Table.find();
        res.status(200).send({ data: tableData, message: "Bütün Datalar Geldi", success: true });

    } catch (error) {
        res.status(500).send({ message: "Veriler Yüklenemedi" });
    }
};
const addTableData = async (req, res) => {
    try {
        const info = req.body;
        console.log('info', info);

        const tableData = await Table.create(
            info.data
        );
        res.status(200).json({
            success: true,
            data: tableData,
            message: "Tablo Bilgileri Başarıyla Kaydedildi"
        });

    } catch (error) {

        res.status(500).send({ message: "Veriler Eklenemedi" });
    }


};
const updateTableData = async (req, res) => {
    try {
        const info = req.body;
        console.log('infoatback', info);
        console.log('eq.params.id', req.params.id);

        const tableData = await Table.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    name: info.data?.name,
                    tableHeights: info.data?.rowHeights, 
                    
                    tableWidths: info.data?.colWidths,
                    cellImages: info.data?.cellImages,
                    rowCount: info.data?.rowCount,
                    colCount: info.data?.colCount,
                    tableHeight: info.data?.tableHeight,
                    tableWidth: info.data?.tableWidth
                }
            },
            { new: true } // Return the updated document
        );
        console.log('tableadtad', tableData);

        await tableData.save(); // Save the updated document

        console.log('tableadtad1', tableData);
        return res.status(200).send({
            success: true,
            data: tableData,
            message: "Tablo Bilgileri Başarıyla Güncellendi!"
        });
    } catch (error) {
        res.status(500).send({ message: "Veriler Eklenemedi" });
    }
};

const deleteTableData = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Table.findByIdAndDelete(id);
        return res.status(200)
            .json({
                success: true,
                message: `ID: ${id} Name: ${data.name} has been deleted`
            });
    } catch (error) {
        res.status(500).send({ message: `${data.name} couldn't be deleted ` });

    }

};

module.exports = {
    getAllData,
    addTableData,
    updateTableData,
    deleteTableData

}