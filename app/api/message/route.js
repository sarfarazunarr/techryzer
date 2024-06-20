import Message from '../../../lib/models/messageModel'
import {NextResponse} from 'next/server'
import { connectDB } from '../../../lib/db_connection'

await connectDB();

export async function GET(){
    try {
        const message = await Message.find()
        return NextResponse.json({message}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500});
    }
}

export async function POST(req) {
    try {
        const body = await req.json()
        const {name, email, message} = body;
        const newmessage = new Message({
            name, email, message
        })
        await newmessage.save();
        return NextResponse.json({ message: "Message Sent Successfully!" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}
