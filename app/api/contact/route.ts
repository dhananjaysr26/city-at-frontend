import { POST_HUB_SPOT } from "@/lib/hubSpot";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // console.log("Received data:", data);
    const hubSpotResponse = await POST_HUB_SPOT(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      { properties: data }
    );
    // console.log("HubSpot response:", hubSpotResponse);
    return NextResponse.json(hubSpotResponse);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error.message, { status: 500 });
  }
}
