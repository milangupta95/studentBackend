const {addStudent,getAllStudent,getOneStudent,updateStudent,deleteStudent} = require("../Controller/StudentController");

const studentRouter = express.Router();
studentRouter.post("/",signup);
studentRouter.get("/",login);
studentRouter.get("/:id",);
studentRouter.patch("/:id",);
studentRouter.delete(":/",)

module.exports = studentRouter;