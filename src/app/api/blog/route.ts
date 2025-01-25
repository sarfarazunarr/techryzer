import Blog from "@/models/Blogs.model";
import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/utils/connectdb";
import { cloudinary } from "@/utils/cloudinary";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import verifyAdmin from "@/utils/verifyAdmin";
import Comment from "@/models/Comment.model";


type UploadResponse =
  { success: true; result?: UploadApiResponse } |
  { success: false; error: UploadApiErrorResponse };

const uploadToCloudinary = (
  fileUri: string, fileName: string): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: "auto",
        filename_override: fileName,
        folder: "images", // any sub-folder name in your cloud
        use_filename: true,
      })
      .then((result) => {
        resolve({ success: true, result });
      })
      .catch((error) => {
        reject({ success: false, error });
      });
  });
};


export async function GET() {
  try {
    await ConnectDB();
    const blogsData = await Blog.find({}).sort({ createdAt: -1 })
    return NextResponse.json({ blogsData }, { status: 200 })
  } catch (error: unknown) {
    return NextResponse.json({message: "Failed to get blog", error }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { success, issue } = verifyAdmin(req);
    if (!success) {
      return NextResponse.json({ message: issue }, { status: 400 });
    }
    await ConnectDB();
    const data = await req.formData();
    const title = data.get('title');
    const meta_description = data.get('meta_description');
    const content = data.get('content');
    const tags = data.get('tags');
    const status = data.get('status');
    const slug = data.get('slug');
    const category = data.get('category');
    if (!title || !meta_description || !content || !tags || !slug || !category) {
      return NextResponse.json({ message: "Please fill all fields!" }, { status: 400 })
    }
    const file = data.get("file") as File;

    const fileBuffer = await file.arrayBuffer();

    const mimeType = file.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");

    // this will be used to upload the file
    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

    const res = await uploadToCloudinary(fileUri, file.name);
    let imgUrl;
    if (res.success && res.result) {
      imgUrl = res.result.secure_url
    } else {
      return NextResponse.json({ error: "Failed to upload image" }, { status: 400 });
    }
    await new Blog({
      title, meta_description, content, tags, slug, status, imgUrl, category
    }).save();
    return NextResponse.json({ message: "Blog Created!" }, { status: 201 })
  } catch (error: unknown) {
    return NextResponse.json({ message: "Failed to create blog", error  }, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { success, issue } = verifyAdmin(req);
    if (!success) {
      return NextResponse.json({ message: issue }, { status: 400 });
    }
    await ConnectDB();
    const data = await req.formData();
    const id = data.get('id');
    const title = data.get('title');
    const meta_description = data.get('meta_description');
    const content = data.get('content');
    const tags = data.get('tags');
    const status = data.get('status');
    const slug = data.get('slug');
    const category = data.get('category');

    const file = data.get("file") as File;
    const findBlog = await Blog.findById(id);
    if (!findBlog) return NextResponse.json({ message: "Blog Not Found" }, { status: 400 });

    let imgUrl;

    if (file) {
      const fileBuffer = await file.arrayBuffer();

      const mimeType = file.type;
      const encoding = "base64";
      const base64Data = Buffer.from(fileBuffer).toString("base64");

      // this will be used to upload the file
      const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

      const res = await uploadToCloudinary(fileUri, file.name);
      if (res.success && res.result) {
        imgUrl = res.result.secure_url
      } else {
        return NextResponse.json({ error: "Failed to upload image" }, { status: 400 });
      }
      return imgUrl;
    } else {
      imgUrl = findBlog.imgUrl;
    }


    const update = await Blog.findByIdAndUpdate(id, {
      $set: {
        title, meta_description, content, tags, slug, status, imgUrl, category
      }
    });
    if (!update) {
      return NextResponse.json({ message: "Blog not updated" }, { status: 400 })
    }

    return NextResponse.json({ message: "Blog Updated!" }, { status: 200 })
  } catch (error: unknown) {
    console.log(error)
    return NextResponse.json({ message: "Failed to update blog, server error", error }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { success, issue } = verifyAdmin(req);
    if (!success) {
      return NextResponse.json({ message: issue }, { status: 400 });
    }
    await ConnectDB();
    const slug = req.nextUrl.searchParams.get('slug')
    const findBlog = await Blog.findOne({ slug });
    if (!findBlog) return NextResponse.json({ message: "Blog Not Found! Invalid ID" }, { status: 400 });

    const removeBlog = await Blog.findByIdAndDelete(findBlog._id);
    if (!removeBlog) return NextResponse.json({ message: "Failed to Delete Blog" }, { status: 400 });

    const removeComments = await Comment.deleteMany({ blogId: findBlog._id })
    if (!removeComments) return NextResponse.json({ message: "Failed to remove comments" }, { status: 400 })

    return NextResponse.json({ message: "Post Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to Delete, Server Error", error }, { status: 500 })
  }
}