import Quote from "@/models/Quote.model";
import ConnectDB from "@/utils/connectdb";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        await ConnectDB();
        const data = await req.formData();
        await Quote.create({ name: `${data.get('firstName')} ${data.get('lastName')}`, email: data.get('email'), phone: data.get('phone'), project_title: data.get('project_title'), project_details: data.get('project_details'), project_budget: data.get('project_budget') });
        return NextResponse.json({ message: "Project Details Sent Successfully!" }, { status: 200 });
    } catch (error: unknown) {
        console.log(error);
        return NextResponse.json({error: "Failed to send details"}, {status: 500});
    }

}