import { connectDB } from "../../../../lib/db_connection";
import Profile from "../../../../lib/models/profileModel";
import { NextResponse } from "next/server";

await connectDB()
export async function GET(req) {
    try {
        const users = await Profile.find();
        return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Failed to fetch" }, { status: 500 })
    }
}