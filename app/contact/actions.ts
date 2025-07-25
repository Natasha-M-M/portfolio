"use server"

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !message) {
    return {
      success: false,
      error: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "Please enter a valid email address.",
    }
  }

  try {
    // For now, we'll simulate sending an email
    // In production, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    // - EmailJS

    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

    // Create the email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject || "Contact Form Submission"}

Message:
${message}

---
Sent from your portfolio contact form
    `

    // For demonstration, we'll log the email content
    console.log("Email would be sent with content:", emailContent)

    // Here you would integrate with your preferred email service
    // Example with fetch to an email API:
    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'contact@yourdomain.com',
        to: 'natamunamubaiwa@gmail.com',
        subject: subject || 'New Contact Form Submission',
        text: emailContent,
        reply_to: email,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }
    */

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error:
        "Sorry, there was an error sending your message. Please try again or contact me directly at natamunamubaiwa@gmail.com",
    }
  }
}
