import Comment from "@/models/Comment.model";
import ConnectDB from "@/utils/connectdb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await ConnectDB();

        // Use formData() to handle FormData sent from next/form
        const formData = await req.formData();
        const blogId = formData.get('blogId');
        const username = formData.get('username');
        const comment = formData.get('comment');

        // Ensure all fields are provided
        if (!blogId || !username || !comment) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Create and save the new comment in the database
        const createcomment = await new Comment({ blogId, username, comment }).save();

        if (!createcomment) {
            return NextResponse.json({ error: "Failed to post comment" }, { status: 500 });
        }

        return NextResponse.json({ message: "Commented!" }, { status: 201 });
    } catch (error: unknown) {
        return NextResponse.json({ message: "Failed to comment"}, { status: 500 });
    }
}


export async function GET(req: NextRequest) {
    try {
        await ConnectDB();
        const searchParams = await req.nextUrl.searchParams
        const blogId = searchParams.get('blogId');

        const comments = await Comment.find({ blogId });
        
        return NextResponse.json(comments, { status: 200 });
    } catch (e: unknown) {
        return NextResponse.json(
            { error: "Failed to fetch comments!"},
            { status: 500 }
        );
    }
}