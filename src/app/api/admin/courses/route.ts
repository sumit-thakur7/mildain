// import { NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/db";
// import Course from "@/models/Course";

// export async function GET() {
//   try {
//     await connectToDatabase();
//     const courses = await Course.find({}).sort({ createdAt: -1 });
//     return NextResponse.json(courses, { status: 200 });
//   } catch (error) {
//     console.error("GET Courses Error:", error);
//     return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
//   }
// }

// export async function POST(request: Request) {
//   try {
//     await connectToDatabase();
//     const body = await request.json();
    
//     const newCourse = await Course.create(body);
//     return NextResponse.json({ message: "Course created successfully", course: newCourse }, { status: 201 });
//   } catch (error: any) {
//     console.error("POST Course Error:", error.message);
//     return NextResponse.json({ error: error.message || "Failed to create course" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Course from "@/models/Course";

export async function GET() {
  try {
    await connectToDatabase();
    const courses = await Course.find({}).sort({ createdAt: -1 });
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error("DB Connection Error: ", error);
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newCourse = await Course.create(body);
    return NextResponse.json(newCourse, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
