import { NextRequest } from "next/server";

export default function verifyAdmin(req: NextRequest){
    if(!req.headers){
        return {success: false, issue: "Headers not available!"}
    }
    if(!req.headers.get('dev_token')){
        return {success: false, issue: "Token not available!"}
    }
    if(req.headers.get('dev_token') !== process.env.DEV_KEY){
        return {success: false, issue: "Invalid token!"}
    }
    if(req.headers.get('dev_token') === process.env.DEV_KEY){
        return {success: true, issue: "It is admin"}
    } else {
        return {success: false, issue: "No Reason"}
    }
}