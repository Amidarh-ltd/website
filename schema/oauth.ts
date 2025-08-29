import z from "zod";

export const OAuthSchema = z.object({
  firstName: z.string().min(2).max(100),
  lastName: z.string().min(2).max(100),
  email: z.string().email(),
  image: z.string().url(),
});

export type OAuthFormData = z.infer<typeof OAuthSchema>;
