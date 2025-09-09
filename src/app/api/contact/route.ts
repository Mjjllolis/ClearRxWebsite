import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  console.log('📧 Contact form API called');
  
  try {
    const body = await request.json();
    console.log('📝 Received form data:', { ...body, message: body.message?.substring(0, 50) + '...' });
    
    const { firstName, lastName, email, phone, message } = body;
    const fullName = `${firstName} ${lastName}`.trim();

    // Validation
    if (!firstName || !email || !message) {
      console.log('❌ Validation failed: missing required fields');
      return NextResponse.json(
        { error: 'First name, email, and message are required' },
        { status: 400 }
      );
    }

    console.log('✅ Validation passed, preparing emails...');

    // Email to admin
    const adminEmailData = {
      from: 'admin@myclearrx.com',
      to: ['Admin@myclearrx.com'],
      subject: `New ClearRx Contact Form Submission`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission - ClearRx
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName || 'Not provided'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 6px; padding: 15px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This contact form submission was received from the ClearRx website.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to user with ClearRx mission
    const userEmailData = {
      from: 'admin@myclearrx.com',
      to: [email],
      subject: 'Welcome to ClearRx - Making Medication Labels Universally Accessible',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2563eb; margin-bottom: 10px;">ClearRx</h1>
            <h2 style="color: #1e40af; font-size: 24px; margin: 0;">Scan Listen Thrive</h2>
          </div>
          
          <div style="background-color: #f0f9ff; border-left: 4px solid #2563eb; padding: 20px; margin: 20px 0;">
            <h2 style="color: #1e40af; margin-top: 0;">Thank You for Your Interest, ${firstName}!</h2>
            <p>We've received your message and appreciate you reaching out to us.</p>
          </div>
          
          <div style="margin: 30px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Our Mission</h3>
            <p style="font-size: 16px; line-height: 1.6; color: #4b5563;">
              <strong>To make medication labels universally accessible, empowering individuals of all abilities to easily understand and manage their prescriptions.</strong>
            </p>
          </div>

          <div style="background-color: #f9fafb; padding: 25px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #374151; margin-top: 0; margin-bottom: 20px;">What ClearRx Will Do:</h3>
            
            <div style="margin-bottom: 20px;">
              <h4 style="color: #2563eb; margin-bottom: 8px; display: flex; align-items: center;">
                📱 <span style="margin-left: 8px;">Scan Your Medication</span>
              </h4>
              <p style="margin: 0; color: #6b7280; margin-left: 28px;">
                Automatically hear important information about your prescriptions through advanced scanning technology.
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h4 style="color: #2563eb; margin-bottom: 8px; display: flex; align-items: center;">
                🎧 <span style="margin-left: 8px;">Listen & Learn</span>
              </h4>
              <p style="margin: 0; color: #6b7280; margin-left: 28px;">
                Ask questions about your medications and receive clear, accessible answers.
              </p>
            </div>
            
            <div>
              <h4 style="color: #2563eb; margin-bottom: 8px; display: flex; align-items: center;">
                ⏰ <span style="margin-left: 8px;">Set Reminders & Thrive</span>
              </h4>
              <p style="margin: 0; color: #6b7280; margin-left: 28px;">
                Stay on top of your health with personalized reminders and medication management tools.
              </p>
            </div>
          </div>
          
          <div style="background-color: #fef3c7; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
            <h3 style="color: #92400e; margin-top: 0;">🚀 App Coming Soon!</h3>
            <p style="color: #92400e; margin-bottom: 15px;">
              Our revolutionary medication accessibility app is currently in development.
            </p>
            <p style="color: #92400e; margin: 0; font-weight: 500;">
              Stay tuned to your email for updates on our launch and early access opportunities!
            </p>
          </div>
          
          <div style="margin: 30px 0;">
            <h3 style="color: #374151;">What's Next?</h3>
            <ul style="color: #4b5563; line-height: 1.6;">
              <li>We'll review your message and respond within 24-48 hours</li>
              <li>You'll receive email updates about our app development progress</li>
              <li>Be among the first to know when ClearRx launches</li>
              <li>Get early access to beta testing opportunities</li>
            </ul>
          </div>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
            <p><strong style="color: #2563eb;">Making medication management accessible for everyone.</strong></p>
            <p style="margin-top: 15px;">
              Best regards,<br><strong>The ClearRx Team</strong>
            </p>
            <p style="margin-top: 20px;">
              © ${new Date().getFullYear()} ClearRx. All rights reserved.<br>
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    console.log('📤 Sending admin email to:', adminEmailData.to);
    console.log('📤 Sending user email to:', userEmailData.to);

    // Send both emails
    const [adminEmail, userEmail] = await Promise.all([
      resend.emails.send(adminEmailData),
      resend.emails.send(userEmailData),
    ]);

    console.log('✅ Admin email sent successfully. ID:', adminEmail.data?.id);
    console.log('✅ User email sent successfully. ID:', userEmail.data?.id);

    return NextResponse.json({
      message: 'Emails sent successfully',
      adminEmailId: adminEmail.data?.id,
      userEmailId: userEmail.data?.id,
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
