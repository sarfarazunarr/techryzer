import Blog from "@/models/Blogs.model";
import ConnectDB from "@/utils/connectdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await ConnectDB();
    const { id } = params;

    const blog = await Blog.findOne({ slug: id });
    if (!blog) return NextResponse.json({ message: "Not Found" }, { status: 404 });

    // Fetch 3 other posts from the same category
    const otherBlogs = await Blog.find({ category: blog.category, slug: { $ne: id } }).limit(3);

    return NextResponse.json({ blog, otherBlogs }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: `Failed to fetch blog ${error.message}` });
  }
}