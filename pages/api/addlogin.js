import loginDetails from "../../models/loginDetails";
import connect from "../../models/connect";

const handler = async (req, res) => {
  if (req.method === "POST") {
      console.log(req.body);
      let a = new loginDetails(req.body);
      await a.save(); 
    res.status(200).json({ message: "success" });
  }
  else{
    res.status(400).json({message: "Not a POST request"});

  }
};
export default connect(handler);
