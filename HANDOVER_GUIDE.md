# 📘 Shibil S Portfolio - Handover & Quick Start Guide

Welcome to your new portfolio platform! This guide will walk you through the essential steps to manage your profile, projects, and site settings.

---

## 🚦 Getting Started (Local Development)

If you need to run the project on your own computer:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Configure Environment**:
    Create a file named `.env.local` in the root folder and add the following:
    ```env
    DATABASE_URL="your-neon-database-url"
    ADMIN_USERNAME="admin"
    ADMIN_PASSWORD="your-strong-password"
    ```
3.  **Launch the App**:
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` in your browser.

---

## 🛡️ Admin Panel Access

The management area is protected. To log in:

1.  Go to: `https://shibil.xyz/login` (or `/admin` which will redirect you).
2.  **Default Credentials**:
    - **Username**: `admin`
    - **Password**: `@qwertyuiop1234567890A` (Change this in `.env.local` for production!)

---

## 🛠️ Managing Content

Once logged in, you can manage the following sections through the dashboard:

### 1. **Projects (Case Studies)**
- Navigate to the **Projects** tab.
- Add or edit marketing campaigns, including Client name, Strategy, and Results.
- Tags should be comma-separated (e.g., `SEO, SEM, E-commerce`).

### 2. **Professional Experience**
- Update your job history under the **Experience** tab.
- Each entry includes Role, Company, Period, and a detailed description.

### 3. **Services**
- Listed under the **Services** tab.
- You can add/edit the core digital marketing services you offer (e.g., SEO, SMM).
- Choose an icon name from the [Lucide React library](https://lucide.dev/icons).

### 4. **Skills**
- Group skills by category (e.g., "Digital Marketing", "Tools").
- Skill lists should be comma-separated.

---

## 🚀 Deployment (Going Live)

This project is optimized for **Vercel** and **Neon PostgreSQL**.

### 1. Database (Neon)
- Sign up at [neon.tech](https://neon.tech).
- Create a new project and copy the **Connection String**.
- Paste this into your Vercel Environment Variables as `DATABASE_URL`.

### 2. Frontend (Vercel)
- Connect your GitHub repository to [Vercel](https://vercel.com).
- Add the following **Environment Variables** in the Vercel dashboard:
  - `DATABASE_URL`
  - `ADMIN_USERNAME`
  - `ADMIN_PASSWORD`
- Click **Deploy**.

---

## 🔍 SEO & Personal Info

Global settings like your name, title, and social links are located in:
`src/lib/site.ts`

To update:
1. Open the file.
2. Edit the `siteConfig` object.
3. Save and redeploy.

---

## 📧 Contact Form (Future Config)

The contact form is currently set up for simulation. To enable real emails:
1. Sign up for [Resend](https://resend.com).
2. Get your **API Key**.
3. Add `RESEND_API_KEY` to your environment variables.
4. (Optional) Implement a server action to send the email (Developer task).

---

## 🤝 Need Help?
For technical issues or advanced updates, contact the original developer, **Ashif E.K**, or refer to the `README.md` for full architecture details.
