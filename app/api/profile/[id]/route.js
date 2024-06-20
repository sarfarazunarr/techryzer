import Profile from "../../../../lib/models/profileModel";
import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db_connection";

await connectDB()
export async function GET(req, { params }) {
    const id = params.id;
    try {
        const profile = await Profile.findOne({ userid: id });
        return NextResponse.json({ profile }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch" }, { status: 500 })
    }
}

export async function POST(req, { params }) {
    try {
        const id = params.id;
        const isExist = await Profile.findOne({ userid: id });
        if (isExist) {
            return NextResponse.json({ message: "Profile Already Exist" }, { status: 403 })
        }
        const body = await req.json()
        const { name, email, phone, address, industry } = body;
        await new Profile({
            userid: id, name, email, phone, address, industry
        }).save()
        return NextResponse.json({ message: "Profile Created Successfully!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Profile Creation Failed" }, { status: 500 });
    }

}

export async function PUT(req, { params }) {
    const id = params.id;
    const isExist = await Profile.find({ userid: id });
    if (!isExist) {
        return NextResponse.json({ message: "Profile not available" }, { status: 404 })
    }
    const newdata = await req.json()
    const {name, phone, address, industry} = newdata;
    const update = await Profile.findOneAndUpdate(id, {
        name, phone, address, industry
    }, {new: true})
    if(update){
        return NextResponse.json({message: "Data Updated Successfully"}, {status: 200});
    }
}

export async function DELETE(req, {params}){
    const id = params.id;
    const isExist = await Profile.findOne({userid: id})
    if(!isExist){
        return NextResponse.json({message: "Profile Not available"}, {status: 404});
    }
    const del = await Profile.findOneAndDelete({userid: id})
    if(del){
        return NextResponse.json({message: "Profile Deleted Successfully"}, {status: 200});
    }
}