import Message from '../../../../lib/models/messageModel'
import {NextResponse} from 'next/server'
import { connectDB } from '../../../../lib/db_connection'

await connectDB();
export async function GET(req, {params}){
    try {
        const id = params.id;
        const messagedata = await Message.findById(id)
        return NextResponse.json({messagedata}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500});
    }
}

export async function PUT(req, {params}){
    try {
        const id = params.id
        const body = await req.json()
        const {replytext} = body;
        const reply = await Message.findByIdAndUpdate(id, {reply: replytext, status: 'read'}, {new: true})
        if(reply){
            return NextResponse.json({message: "Reply sent successfully!"}, {status: 200})
        }
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500})      
    }
}