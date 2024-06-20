import Payment from '../../../../lib/models/paymentModel'
import {NextResponse} from 'next/server'
import { connectDB } from '../../../../lib/db_connection'

await connectDB();
export async function GET(){
    try {
        const payments = await Payment.find()
        return NextResponse.json({payments}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500});
    }
}