import loginDetails from "../../models/loginDetails";
import connect from "../../models/connect";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let login = new loginDetails({
        username: req.body[i].username,
        password: req.body[i].password,
      });
      await login.save();
        
    }
    res.status(200).json({ message: "success" });
  }
  else{
    res.status(400).json({message: "Not a POST request"});

  }
};
export default connect(handler);
