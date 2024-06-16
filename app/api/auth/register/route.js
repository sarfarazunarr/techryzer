import {connectDB} from '../../../../lib/db_connection'
import User from '../../../../lib/models/userModel'
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const { name, email, phone, account_type, password } = body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return NextResponse.json({ message: 'User already exists' }, { status: 409 });
        }

        const newUser = new User({ name, email, phone, account_type, password });
        await newUser.save();

        return NextResponse.json({ message: 'Registered successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}