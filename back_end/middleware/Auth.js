import jwt, {decode} from "jsonwebtoken"
import {findUserByUserId} from "../controllers/user.js"

const authMiddleware = async (req, res, next) =>{
    try {
        const bearToken = req.headers.authorization
        // console.log(req.headers);
        if(!bearToken) return res.status(401).json({message: "JWT not found."});
        const token = bearToken.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, "PRV_KEY");
            const user = await findUserByUserId(decodedData?.id);
            if (!user){
                return res.status(401).json({message:"Unauthenticated"})
            } else {
                req.userId = decodedData.id;
            }
        } else {
            return res.status(400).json("gg")
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default authMiddleware;