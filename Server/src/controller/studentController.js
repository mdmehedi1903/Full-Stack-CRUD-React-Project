const StudentModel = require('../model/studentModel');

exports.CreateStudent = async (req, res) => {
    try {
        let reqBody = req.body;
        let data = await StudentModel.create(reqBody);
        res.status(200).json({ status: "Success", data: data });
    } catch (err) {
        res.status(400).json({ status: "Failed", data: err.message || "An error occurred" });
    }
};



exports.ReadStudent = async (req, res) => {
    try {
        let query = {};
        const data = await StudentModel.find(query);

        res.status(200).json({ status: "Success", data: data });
    } catch (err) {
        res.status(400).json({ status: "Failed", data: err });
    }
};

exports.ReadStudentByID = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };
        const data = await StudentModel.find(query);

        res.status(200).json({ status: "Success", data: data });
    } catch (err) {
        res.status(400).json({ status: "Failed", data: err });
    }
};

exports.DeleteStudent = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };

        const data = await StudentModel.deleteOne(query);

        res.status(200).json({ status: "Success", data: data });
    } catch (err) {
        res.status(400).json({ status: "Failed", data: err });
    }
};


exports.UpdateStudent = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };
        let reqBody = req.body;

        const data = await StudentModel.updateOne(query, reqBody);

        res.status(200).json({ status: "Success", data: data });
    } catch (err) {
        res.status(400).json({ status: "Failed", data: err });
    }
};




