import loginDetails from "../../models/loginDetails";
import connect from "../../models/connect";

const handler = async (req, res) => {
    let login = await loginDetails.find();
    res.status(200).json(login);    
}

export default connect(handler);