"use server";

import { db } from "@/lib/db";
import { profile } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { join } from "path";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";

export async function getProfile() {
  try {
    const results = await db.select().from(profile).where(eq(profile.id, "me")).limit(1);
    return results[0] || null;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

export async function updateProfile(formData: FormData) {
  try {
    let profileImageUrl = formData.get("profileImageUrl") as string;
    const profileImageFile = formData.get("profileImageFile") as File;

    if (profileImageFile && profileImageFile.size > 0) {
      const bytes = await profileImageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      const filename = `${Date.now()}-${profileImageFile.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const uploadDir = join(process.cwd(), "public", "uploads");
      
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }
      
      const filepath = join(uploadDir, filename);
      await writeFile(filepath, buffer);
      
      profileImageUrl = `/uploads/${filename}`;
    }

    const data = {
      name: formData.get("name") as string,
      role: formData.get("role") as string,
      headline: formData.get("headline") as string,
      subHeadline: formData.get("subHeadline") as string,
      bio: formData.get("bio") as string,
      location: formData.get("location") as string,
      education: formData.get("education") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      linkedin: formData.get("linkedin") as string,
      github: formData.get("github") as string,
      resumeUrl: formData.get("resumeUrl") as string,
      profileImageUrl: profileImageUrl,
      updatedAt: new Date(),
    };

    await db.update(profile).set(data).where(eq(profile.id, "me"));

    revalidatePath("/");
    revalidatePath("/admin");
    
    return { success: true };
  } catch (error) {
    console.error("Error updating profile:", error);
    return { success: false, error: "Failed to update profile" };
  }
}
