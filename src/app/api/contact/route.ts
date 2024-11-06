import Contact from "@/models/Contact.model";
import ConnectDB from "@/utils/connectdb";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        await ConnectDB();
        const data = await req.formData();
        await Contact.create({ name: `${data.get('firstName')} ${data.get('lastName')}`, email: data.get('email'), phone: data.get('phone'), message: data.get('message') });
        console.log('Data Saved')
        return NextResponse.json({ message: "Message Sent Successfully!" }, { status: 200 });
    } catch (error: any) {
        console.log('Error message', error.message)
        console.log(error)
        return NextResponse.json({error: error.message}, {status: 500});
    }

}