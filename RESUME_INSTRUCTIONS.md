# IMPORTANT: Add Your Resume PDF

To enable the resume download feature, please add your resume PDF file to the `public` directory with the filename `resume.pdf`.

## Steps to Add Your Resume:

1. Place your resume PDF file in: `/Users/aviothic/Documents/Portfolio/portfolio/public/resume.pdf`
2. The download buttons are already set up in:
   - Hero section (main page)
   - Navbar (desktop and mobile)

Once you add the PDF file, visitors will be able to download your resume by clicking the "Resume" buttons throughout your portfolio.

## Alternative Filename

If you prefer to use a different filename (e.g., `Ananya_Singh_Choudhary_Resume.pdf`), you'll need to update the following files:
- `components/hero.tsx` - Line with `href="/resume.pdf"`
- `components/navbar.tsx` - Two lines with `href="/resume.pdf"`
