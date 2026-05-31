import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "enquiries@qossim005.online",
        to: "holaryinka5050@gmail.com",
        subject: `New Enquiry from ${data.fullName} - ${data.enquiryType}`,
        html: `
          <h2>New Enquiry</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Organisation:</strong> ${data.organisation}</p>
          <p><strong>Role:</strong> ${data.role || "N/A"}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <p><strong>Enquiry Type:</strong> ${data.enquiryType}</p>
          <p><strong>Message:</strong> ${data.message}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error("Resend rejected:", errorBody);
      throw new Error(JSON.stringify(errorBody));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 },
    );
  }
}
