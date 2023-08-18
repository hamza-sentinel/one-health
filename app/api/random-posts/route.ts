import connectToMongoDB from "@/app/utils/mongodb";
import Research from "@/app/models/Research";
import Publication from "@/app/models/Publication";
import ExtensionArticle from "@/app/models/ExtensionArticle";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectToMongoDB();

    let research = await Research.find({}, { content: 0 })
      .limit(1)
      .skip(Math.floor(Math.random() * (await Research.countDocuments())));

    let publication = await Publication.find({}, { content: 0 })
      .limit(1)
      .skip(Math.floor(Math.random() * (await Publication.countDocuments())));

    let extensionArticle = await ExtensionArticle.find({}, { content: 0 })
      .limit(1)
      .skip(
        Math.floor(Math.random() * (await ExtensionArticle.countDocuments()))
      );

    research = JSON.parse(JSON.stringify(research))[0];
    publication = JSON.parse(JSON.stringify(publication))[0];
    extensionArticle = JSON.parse(JSON.stringify(extensionArticle))[0];

    return NextResponse.json({
      status: 200,
      message: "Research fetched successfully",
      success: true,
      data: [
        { ...research, type: "research" },
        { ...publication, type: "publications" },
        { ...extensionArticle, type: "extension-article" },
      ],
    });
  } catch (error) {
    return NextResponse.json({
      error: true,
      status: 500,
      message: "Something went wrong",
    });
  }
}
