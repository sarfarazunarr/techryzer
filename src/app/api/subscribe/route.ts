import Subscribe from "@/models/Subscribe.model";
import ConnectDB from "@/utils/connectdb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        await ConnectDB();
        const data = await req.formData();
        const name = data.get('name');
        const email = data.get('email');
        const save = await new Subscribe({
            name, email
        }).save();
        if(!save) return NextResponse.json({error: "Failed"}, {status: 400})
        return NextResponse.json({message: "Subscribed Successfully!"});
    } catch (error: unknown) {
        console.log(error)
        return NextResponse.json({error: "Try Again"});
    }
}