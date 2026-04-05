"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const USERNAME = process.env.ADMIN_USERNAME || "admin";
const PASSWORD = process.env.ADMIN_PASSWORD || "@qwertyuiop1234567890A";

export async function login(formData: FormData) {
  const user = formData.get("username");
  const pass = formData.get("password");

  if (user === USERNAME && pass === PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    redirect("/admin");
  }

  return { error: "Invalid credentials" };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  redirect("/login");
}
