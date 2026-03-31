"use server";

import { db } from "@/lib/db";
import { projects } from "@/lib/schema";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

const schema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

export async function createProject(formData: FormData) {
  const parsed = schema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!parsed.success) throw new Error("Invalid input");

  await db.insert(projects).values({
    id: crypto.randomUUID(),
    title: parsed.data.title,
    description: parsed.data.description,
  });

  revalidatePath("/admin");
  revalidatePath("/projects");
}

export async function deleteProject(id: string) {
  await db.delete(projects).where(eq(projects.id, id));
  revalidatePath("/admin");
  revalidatePath("/projects");
}

export async function updateProject(id: string, formData: FormData) {
  const parsed = schema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!parsed.success) throw new Error("Invalid input");

  await db
    .update(projects)
    .set({
      title: parsed.data.title,
      description: parsed.data.description,
    })
    .where(eq(projects.id, id));

  revalidatePath("/admin");
  revalidatePath("/projects");
}
