import Blog from "@/models/Blogs.model";
import ConnectDB from "@/utils/connectdb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {
  params,
}: {
  params: Promise<{ id: string }>
}) {
  try {
    await ConnectDB();
    const {id} = await params;
    const blog = await Blog.findOne({ slug: id });
    if (!blog) return NextResponse.json({ message: "Not Found" }, { status: 404 });

    const otherBlogs = await Blog.find({ category: blog.category, slug: { $ne: id } }).limit(3);

    return NextResponse.json({ blog, otherBlogs }, { status: 200 });
  } catch (e: unknown) {
    console.log(e);
    return NextResponse.json({ error: `Failed to fetch blog!` }, { status: 500 });
  }
}
