import { NextRequest, NextResponse } from "next/server";
import verifyAdmin from "@/utils/verifyAdmin";
import ConnectDB from "@/utils/connectdb";
import Blog from "@/models/Blogs.model";

export async function POST(req: NextRequest) {
  try {
    const { success, issue } = verifyAdmin(req);
    if (!success) {
      return NextResponse.json({ message: issue }, { status: 400 });
    }

    await ConnectDB();

    const body = await req.json();
    const {
      title,
      meta_description,
      content,
      tags,
      status,
      slug,
      category,
      imgUrl
    } = body;

    if (!title || !meta_description || !content || !tags || !slug || !category || !imgUrl) {
      return NextResponse.json({ message: "Please fill all fields!" }, { status: 400 });
    }

    await new Blog({
      title,
      meta_description,
      content,
      tags,
      slug,
      status,
      imgUrl,
      category
    }).save();

    return NextResponse.json({ slug: `https://techryzer.com/blog/${slug}` }, { status: 201 });
  } catch (error: unknown) {
    return NextResponse.json({ message: "Failed to create blog", error }, { status: 500 });
  }
}
