import Project from "../../../lib/models/projectModel";
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db_connection";

await connectDB();
export async function GET(){
    try {
        const projects = await Project.find();
        return NextResponse.json({projects}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Something went wrong'}, {status: 500});
    }
}