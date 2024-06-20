import Payment from '../../../../lib/models/paymentModel'
import {NextResponse} from 'next/server'
import { connectDB } from '../../../../lib/db_connection'

await connectDB();
export async function POST(req, { params }) {
    try {
        const id = params.id;
        const body = await req.json()
        const { tid, from, project, projectId, amount, date } = body;
        const newpayment = new Payment({
            tid, from, clientId: id, project, projectId, amount, date
        })
        await newpayment.save();
        return NextResponse.json({ message: "Payment Added Successfully!" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}


export async function GET(req, {params}){
    try {
        const id = params.id;
        const payments = await Payment.find({clientId: id})
        return NextResponse.json({payments}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500});
    }
}