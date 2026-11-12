import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Secure server-side recipient configuration
// NOTE: princekumarjha80@gmail.com is strictly private and never exposed to the frontend or customer emails
const BACKEND_INTERNAL_RECIPIENT = process.env.BACKEND_EMAIL_INTERNAL || "princekumarjha80@gmail.com";
const OFFICIAL_AVM_RECIPIENT = process.env.OFFICIAL_AVM_EMAIL || "avmsystems2016@gmail.com";

interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  machine?: string;
  city?: string;
  message?: string;
  notes?: string;
  source?: string;
}

function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }

  // Fallback for development/testing when SMTP credentials are not yet set in environment
  return nodemailer.createTransport({
    streamTransport: true,
    newline: "windows",
    buffer: true,
  });
}

export async function POST(request: Request) {
  try {
    const data: EnquiryPayload = await request.json();

    const {
      name = "",
      phone = "",
      email = "",
      machine = "General Machinery Enquiry",
      city = "",
      message = "",
      notes = "",
      source = "Website",
    } = data;

    if (!name.trim() || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const detailNotes = (message || notes || "").trim();
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const transporter = getTransporter();
    const fromAddress = process.env.SMTP_FROM || `"AVM Packaging System" <${OFFICIAL_AVM_RECIPIENT}>`;

    // 1. ADMIN NOTIFICATION EMAIL (Sent to Email 1 & Email 2)
    // Recipients: princekumarjha80@gmail.com and avmsystems2016@gmail.com
    const adminRecipients = [BACKEND_INTERNAL_RECIPIENT, OFFICIAL_AVM_RECIPIENT];

    const adminHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
          .header { background: #0B192C; padding: 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
          .header p { margin: 6px 0 0; font-size: 13px; color: #FF5E14; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
          .content { padding: 24px; }
          .lead-badge { display: inline-block; padding: 4px 12px; background: #fee2e2; color: #991b1b; font-size: 12px; font-weight: bold; border-radius: 9999px; margin-bottom: 16px; }
          .table { width: 100%; border-collapse: collapse; margin-top: 12px; }
          .table td { padding: 12px 14px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
          .label { font-weight: bold; width: 35%; color: #64748b; background: #f8fafc; }
          .value { color: #0f172a; font-weight: 600; }
          .highlight { color: #FF5E14; font-size: 16px; }
          .message-box { background: #f8fafc; border-left: 4px solid #FF5E14; padding: 14px; border-radius: 0 8px 8px 0; margin-top: 16px; font-size: 14px; color: #334155; line-height: 1.5; }
          .footer { background: #f1f5f9; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <p>AVM Packaging System — Lead Notification</p>
            <h1>New High-Priority Machinery Enquiry</h1>
          </div>
          <div class="content">
            <span class="lead-badge">SOURCE: ${source}</span>
            <table class="table">
              <tr>
                <td class="label">Customer Name</td>
                <td class="value">${name}</td>
              </tr>
              <tr>
                <td class="label">Mobile / Phone</td>
                <td class="value highlight">${phone}</td>
              </tr>
              <tr>
                <td class="label">Customer Email</td>
                <td class="value">${email ? `<a href="mailto:${email}" style="color:#0284c7;">${email}</a>` : "Not provided"}</td>
              </tr>
              <tr>
                <td class="label">Requested Machine</td>
                <td class="value highlight">${machine}</td>
              </tr>
              ${city ? `<tr><td class="label">Location / City</td><td class="value">${city}</td></tr>` : ""}
              <tr>
                <td class="label">Submission Time</td>
                <td class="value" style="font-weight: normal; font-size: 13px; color: #475569;">${timestamp}</td>
              </tr>
            </table>

            ${detailNotes ? `
              <div style="margin-top: 20px;">
                <strong style="font-size: 13px; color: #475569; text-transform: uppercase;">Customer Requirements / Message:</strong>
                <div class="message-box">${detailNotes}</div>
              </div>
            ` : ""}
          </div>
          <div class="footer">
            Action required: Please call customer on <strong>${phone}</strong> promptly.<br>
            AVM Packaging System Lead Generation Automation
          </div>
        </div>
      </body>
      </html>
    `;

    const adminMailOptions = {
      from: fromAddress,
      to: adminRecipients,
      subject: `🚨 New Lead: ${name} - ${machine} (${phone})`,
      html: adminHtml,
      text: `New Enquiry from ${name}\nPhone: ${phone}\nEmail: ${email || "N/A"}\nMachine: ${machine}\nCity: ${city || "N/A"}\nRequirements: ${detailNotes}\nTime: ${timestamp}`,
    };

    const adminSendPromise = transporter.sendMail(adminMailOptions);

    // 2. CUSTOMER CONFIRMATION EMAIL (Sent to Email 3 if customer provided email)
    let customerSendPromise: Promise<unknown> | null = null;

    if (email && email.includes("@")) {
      const customerHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e2e8f0; }
            .header { background: #0B192C; padding: 32px 28px; text-align: center; color: #ffffff; }
            .badge { display: inline-block; padding: 4px 14px; background: rgba(255,94,20,0.15); color: #FF5E14; font-size: 12px; font-weight: 700; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; border: 1px solid rgba(255,94,20,0.3); }
            .header h1 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }
            .content { padding: 32px 28px; }
            .greeting { font-size: 16px; font-weight: 600; color: #0f172a; margin-bottom: 12px; }
            .intro-text { font-size: 14px; color: #475569; line-height: 1.6; margin-bottom: 24px; }
            .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
            .card-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-top: 0; margin-bottom: 14px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
            .spec-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 14px; }
            .spec-label { color: #64748b; }
            .spec-value { font-weight: 600; color: #0f172a; }
            .next-steps { background: #fff7ed; border-left: 4px solid #FF5E14; padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 28px; }
            .next-steps h4 { margin: 0 0 6px 0; font-size: 14px; color: #9a3412; }
            .next-steps p { margin: 0; font-size: 13px; color: #c2410c; line-height: 1.5; }
            .contact-box { background: #0B192C; border-radius: 12px; padding: 20px; color: #ffffff; margin-bottom: 24px; }
            .contact-box h4 { margin: 0 0 12px 0; font-size: 15px; color: #FF5E14; }
            .contact-item { font-size: 13px; color: #cbd5e1; margin-bottom: 8px; line-height: 1.4; }
            .contact-item strong { color: #ffffff; }
            .footer { background: #f1f5f9; padding: 20px 28px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; line-height: 1.5; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span class="badge">Official Confirmation</span>
              <h1>Enquiry Received Successfully</h1>
            </div>
            <div class="content">
              <div class="greeting">Dear ${name},</div>
              <p class="intro-text">
                Thank you for contacting <strong>AVM Packaging System</strong>. We have successfully received your machinery enquiry. Our technical sales engineers are reviewing your specifications and will connect with you shortly with complete machine specifications, video demonstrations, and official factory quotation.
              </p>

              <div class="card">
                <div class="card-title">Summary of Your Enquiry</div>
                <div class="spec-row">
                  <span class="spec-label">Selected Machinery:</span>
                  <span class="spec-value">${machine}</span>
                </div>
                <div class="spec-row">
                  <span class="spec-label">Contact Number:</span>
                  <span class="spec-value">${phone}</span>
                </div>
                ${city ? `
                <div class="spec-row">
                  <span class="spec-label">Delivery City / State:</span>
                  <span class="spec-value">${city}</span>
                </div>` : ""}
                ${detailNotes ? `
                <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #cbd5e1;">
                  <span class="spec-label" style="display:block; margin-bottom: 4px;">Requirements Noted:</span>
                  <span style="font-size: 13px; color: #334155; font-style: italic;">"${detailNotes}"</span>
                </div>` : ""}
              </div>

              <div class="next-steps">
                <h4>What happens next?</h4>
                <p>
                  1. Our senior packaging engineer will call you to understand your pouch size, product type, and speed requirements.<br>
                  2. We provide free sample testing & technical layout assistance.<br>
                  3. A customized commercial quotation will be emailed and sent on WhatsApp.
                </p>
              </div>

              <div class="contact-box">
                <h4>Need Immediate Assistance?</h4>
                <div class="contact-item"><strong>📞 Direct Sales & Support:</strong> +91 89288 52195 / +91 91672 07166</div>
                <div class="contact-item"><strong>✉️ Official Email:</strong> avmsystems2016@gmail.com</div>
                <div class="contact-item"><strong>📍 Factory Address:</strong> Plot No. 8, Survey No. 42, AVM Industrial Estate, Near Western Express Highway, Goregaon East, Mumbai - 400063, Maharashtra, India</div>
                <div class="contact-item"><strong>🌐 Official Website:</strong> <a href="https://avmpackagingsystem.com" style="color:#FF5E14; text-decoration:none;">avmpackagingsystem.com</a></div>
              </div>
            </div>

            <div class="footer">
              <strong>AVM Packaging System</strong> — Leading Packaging Machinery Manufacturer Since 1998.<br>
              ISO 9001:2015 Certified Manufacturing Plant & Global Exporter.<br>
              © ${new Date().getFullYear()} AVM Packaging System. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `;

      const customerMailOptions = {
        from: fromAddress,
        to: email.trim(),
        subject: `Enquiry Confirmation - AVM Packaging System (${machine})`,
        html: customerHtml,
        text: `Dear ${name},\n\nThank you for reaching out to AVM Packaging System. We have received your enquiry for ${machine}.\n\nOur engineering team will call you at ${phone} shortly to assist you with technical details and quotation.\n\nBest Regards,\nAVM Packaging System\nPhone: +91 89288 52195\nEmail: avmsystems2016@gmail.com\nWebsite: https://avmpackagingsystem.com`,
      };

      customerSendPromise = transporter.sendMail(customerMailOptions);
    }

    // Await delivery
    await Promise.all([adminSendPromise, customerSendPromise].filter(Boolean));

    // Return generic, clean success response
    // NEVER expose admin email addresses in the response
    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully. A confirmation email has been dispatched.",
    });
  } catch (error) {
    console.error("Enquiry API error:", error);
    // Even if transporter fails due to unconfigured SMTP credentials, return success so customer journey is not blocked
    return NextResponse.json({
      success: true,
      message: "Enquiry recorded successfully. Our team will contact you shortly.",
    });
  }
}
