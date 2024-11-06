import Blog from "@/models/Blogs.model";
import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/utils/connectdb";

export async function GET(req: NextRequest) {
    try {
        await ConnectDB();
        const blogsData = await Blog.find({}).sort({ createdAt: -1 })
        return NextResponse.json({ blogsData }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    try {
        await ConnectDB();
        const data = await req.formData();
        const title = data.get('title');
        const meta_description= data.get('meta_description');
        const content = data.get('content');
        const tags = data.get('tags');
        const status = data.get('status');
        const slug = data.get('slug');
        const imgUrl = data.get('imgUrl');
        const author = data.get('author');
        const category = data.get('category');
        if(!title || !meta_description || !content || !tags || !slug || !category){
            return NextResponse.json({message: "Please fill all fields!"}, {status: 400})
        }
        await new Blog({
            title, meta_description, content, tags, slug, status, imgUrl, author, category
        }).save();
        return NextResponse.json({message: "Blog Created!"}, {status: 201})
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}