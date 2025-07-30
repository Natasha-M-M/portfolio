# Natasha M Mubaiwa - Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring dark/light theme switching, contact forms, and showcasing work in software development, graphic design, digital marketing, and Scratch programming.

## Features

- 🌓 Dark/Light theme switching with persistence
- 📱 Fully responsive design
- 📧 Working contact form with Resend integration
- 🎨 Modern UI with Framer Motion animations
- 🖼️ Project portfolio with multiple categories
- 📄 Resume/CV display and download
- 🎯 SEO optimized

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Email Service**: Resend
- **Icons**: Lucide React
- **Type Animation**: react-type-animation
- **Lottie Animations**: lottie-react

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend account for email functionality

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd natasha-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Add your Resend API key to `.env.local`:
\`\`\`env
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Setup with Resend

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the [API Keys page](https://resend.com/api-keys)
3. Add the API key to your `.env.local` file
4. (Optional) Verify your domain for custom sender addresses

### Email Configuration

The contact form sends emails to `natamunamubaiwa@gmail.com` by default. To change this:

1. Update the `to` field in `app/contact/actions.ts`
2. Optionally customize the email template in the same file

## Project Structure

\`\`\`
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with form
│   ├── projects/       # Projects portfolio
│   ├── resume/         # Resume/CV page
│   ├── context/        # Theme context
│   └── globals.css     # Global styles
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── Navigation.tsx # Main navigation
│   └── Footer.tsx     # Footer component
├── public/
│   └── images/        # Project images and assets
└── lib/
    └── utils.ts       # Utility functions
\`\`\`

## Customization

### Theme Colors
The theme uses a golden yellow accent color. To change this, update the CSS variables in `app/globals.css` and the corresponding Tailwind classes throughout the components.

### Content
- Update personal information in the page components
- Replace project images in the `public/images/` directory
- Modify the projects data in `app/projects/ProjectsClient.tsx`
- Update the resume/CV image and download link

### Email Templates
Customize the email template in `app/contact/actions.ts` to match your branding.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

Make sure to set the `RESEND_API_KEY` environment variable on your deployment platform.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Your Resend API key for sending emails | Yes |
| `RESEND_FROM_EMAIL` | Custom sender email (optional) | No |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: natamunamubaiwa@gmail.com
- **LinkedIn**: [Natasha Mubaiwa](https://www.linkedin.com/in/natasha-mubaiwa-420b10347)
- **GitHub**: [Natasha-M-M](https://github.com/Natasha-M-M)

---

Built with ❤️ by Natasha M Mubaiwa
