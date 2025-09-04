# 📱 Social Media Post Generator  

A web application that generates **AI-powered social media posts** based on vendor details, images, logos, and tone of voice.  
Built with **Next.js, TypeScript, TailwindCSS, and Google Gemini API**.  

---

## 🚀 Features  

- 📤 **Upload Vendor Image** & optional **Brand Logo**  
- 🎨 Select a **tone of voice** (Friendly, Professional, Casual, Formal)  
- 📝 Enter desired **post text template**  
- ⚡ AI-generated **social media post content** using **Google Gemini API**  
- 🖼️ Post preview with branding applied  
- ⏳ Loading & ❌ Error components included  
- 🔧 ESLint & TypeScript setup with warnings disabled for smooth builds  

---

## 🛠️ Tech Stack  

- **Frontend:** Next.js (TypeScript), TailwindCSS  
- **Backend:** Next.js API routes  
- **AI Model:** Google Gemini (via API key)  
- **Styling:** TailwindCSS + custom components  
- **Linting:** ESLint (with FlatConfig)  

---

## 📂 Project Structure  

```plaintext
social-media-post-generator/
│── src/
│   ├── components/        # UI components
│   │   ├── BrandColorPicker.tsx
│   │   ├── Error.tsx
│   │   ├── GenerateButton.tsx
│   │   ├── Header.tsx
│   │   ├── Loading.tsx
│   │   ├── PostPreview.tsx
│   │   ├── PostTextInput.tsx
│   │   ├── ToneSelector.tsx
│   │   └── UploadImage.tsx
│   │
│   ├── pages/             # Next.js pages & API routes
│   │   ├── api/
│   │   │   ├── gemini.js  # Gemini API integration
│   │   │   └── hello.ts   # Test API route
│   │   ├── index.tsx      # Main UI page
│   │   ├── _app.tsx
│   │   └── _document.tsx
│   │
│   ├── styles/            # Global styles
│   │
│── .env.local             # API keys & secrets
│── eslint.config.js       # ESLint configuration
│── package.json
│── tsconfig.json
│── README.md
