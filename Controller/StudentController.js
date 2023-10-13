const studentModel = require('../Model/StudentModel');

module.exports.addStudent = async function (req, res) {
    try {
        const { name, age, gender, district, School } = req.body;
        const result = await studentModel.create({
            name: name,
            age: age,
            gender: gender,
            district: district,
            School: School
        });
        if (result) {
            res.status(201).json({
                message: "Student Created SuccessFully",
                result: result
            })
        } else {
            res.status(401).json({
                message: "There Might be some error while creating a Student"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "There Might be Some Server Error"
        })
    }
}

module.exports.getAllStudent = async function (req, res) {
    try {
        let students = await studentModel.find();
        if (students) {
            res.status(201).json({
                message: "Student Found SuccessFully",
                data: students
            })
        } else {
            res.status(404).json({
                message: "No Data Found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "There Might be Some Server Error"
        })
    }
}

module.exports.getOneStudent = async function (req, res) {
    try {
        const studentId = req.params.id;
        const student = await studentModel.findById(studentId);
        if (student) {
            res.status(201).json({
                message: "Found",
                data: student
            })
        } else {
            res.status(404).json({
                message: "Not Found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "There Might be Some Server Error"
        })
    }
}

module.exports.updateStudent = async function (req, res) {
    try {
        let id = req.params.id;
        let student = await studentModel.findById(id);
        let DataToBeUpdated = req.body;
        if (student) {
            for (let key in DataToBeUpdated) {
                student[key] = DataToBeUpdated[key];
            }
            await student.save();
            res.json({
                message: "Student Updated SuccesFully"
            })
        } else {
            res.status(404).json({
                message: "Student Not Found"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "There Might be Some Server Error"
        })
    }
}

module.exports.deleteStudent = async function (req, res) {
    try {
        const id = req.params.id;
        const deletedStudent = await studentModel.findByIdAndDelete(id);
        if (deletedStudent) {
            res.status(201).json({
                message: "Student Deleted"
            })
        } else {
            res.status(404).json({
                message: "Student Not Found"
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "There Might be Some Server Error"
        })
    }
}