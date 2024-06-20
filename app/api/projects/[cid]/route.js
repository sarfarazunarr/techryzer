import Project from "../../../../lib/models/projectModel";
import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/db_connection";

await connectDB();
export async function POST(req, {params}){
    try {
        const id = params.cid;
        const body = await req.json();
        const {title, category, client, description, budget, deadline} = body;
        const newproject = new Project({
            title, category, client, clientId: id, description, budget, deadline
        });
        await newproject.save();
        if(newproject){
            return NextResponse.json({message: "Project Initialized Successfully!"}, {status: 201});
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Something went wrong"}, {status: 500})
    }
}

export async function GET(req, {params}){
    try {
        const {cid} = params;
        const projects = await Project.find({clientId: cid})
        return NextResponse.json({projects}, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Something went wrong"}, {status: 500});
    }
}