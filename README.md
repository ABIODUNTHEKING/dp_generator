# 📸 Personalized Display Picture (DP) / Flyer Generator

This is a single-page web application built with **React and TypeScript** that allows users to upload a custom photo and a name, which are then layered onto a predefined template image using **Cloudinary's dynamic transformation URLs**.

The project features a **frontend-only upload** mechanism using Axios to interact directly with the Cloudinary API for maximum security and simplicity, eliminating the need for a separate backend server.

---

## ✨ Features

- **Frontend-Only Upload:** Uses **Axios** to post files directly to Cloudinary's unsigned upload endpoint.
- **Dynamic Layering:** Generates a custom image URL using **Cloudinary Transformations** to:
  - Layer the user's uploaded photo (cropped and shaped) onto a base template image.
  - Overlay the user's name as text onto the final composition.
- **Temporary Data Cleanup:** Implements logic to securely **delete the user's uploaded image** from Cloudinary immediately after the final flyer is generated, ensuring user privacy and optimizing storage.
- **Modern Stack:** Built with **React, TypeScript, and Tailwind CSS** for a type-safe, component-based, and highly maintainable codebase.

---

## 🛠️ Technologies Used

- **Library:** [React](https://reactjs.org/) (with functional components and Hooks)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **API Interaction:** [Axios](https://axios-http.com/)
- **Image Service:** [Cloudinary](https://cloudinary.com/) (Transformations, Unsigned Uploads)
- **Form Handling:** `react-hook-form` (Likely used for validation and submission)

---

## ⚙️ Setup and Installation

### 1. Prerequisites

You must have [Node.js](https://nodejs.org/) (which includes npm) and [Git](https://git-scm.com/) installed on your system.

### 2. Cloudinary Configuration

This project requires a Cloudinary account to handle image uploads and transformations.

1.  **Create an Unsigned Upload Preset:**
    - Log into your Cloudinary account.
    - Go to **Settings -> Upload -> Upload presets**.
    - Create a new preset and ensure the **Signing Mode** is set to **Unsigned**.
    - Note down the **Preset Name**.
2.  **Base Image:** Ensure your flyer template image (e.g., `flyer_tacgg3.jpg`) is uploaded to your Cloudinary account.

### 3. Environment Variables

Create a file named `.env` (or `.env.local` if using Vite/Next.js) in the project root and add the following variables:

```bash
# Your Cloudinary account details
VITE_CLOUDINARY_ACCOUNT_NAME="your_cloud_name"

# The name of your unsigned upload preset
VITE_CLOUDINARY_UPLOAD_PRESET="your_preset_name"

# The name of your base image
VITE_BASE_IMAGE_PUBLIC_ID="your_base_image"
```
