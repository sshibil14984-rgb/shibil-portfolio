"use server";

import { db } from "@/lib/db";
import { profile } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

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
      profileImageUrl: formData.get("profileImageUrl") as string,
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
