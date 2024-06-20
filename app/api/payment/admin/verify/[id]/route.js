import Payment from '../../../../../../lib/models/paymentModel'
import {NextResponse} from 'next/server'
import { connectDB } from '../../../../../../lib/db_connection'

await connectDB();
export async function PUT(req, { params }) {
    try {
        const id = params.id;
        const update = await Payment.findByIdAndUpdate(id, {isVerified: true}, {new: true})
        if(update){
            return NextResponse.json({ message: "Payment Verified Successfully!" }, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}
