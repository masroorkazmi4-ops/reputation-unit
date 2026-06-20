import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Honeypot check - silently accept but do nothing to thwart basic bots
    if (data.website) {
      return NextResponse.json({ success: true });
    }

    const {
      name,
      businessName,
      email,
      projectType,
      budgetRange,
      timeline,
      message,
    } = data;

    // 1. Basic validation for required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // 2. Email format validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    // 3. Length validation (sane maximums/minimums)
    if (message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Message is too short." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, message: "Message is too long." },
        { status: 400 }
      );
    }

    // 4. Configuration Check
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      // Return safe configuration error.
      // (Do not expose whether it's missing or invalid key, just that it's not configured)
      return NextResponse.json(
        { success: false, message: "Contact form is not configured yet." },
        { status: 500 }
      );
    }

    // 5. Submit to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New project inquiry from Reputation Unit",
        from_name: "Reputation Unit Website",
        name,
        businessName,
        email,
        projectType,
        budgetRange,
        timeline,
        message,
        source: "reputationunit.com",
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: "Submission failed at the provider." },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
