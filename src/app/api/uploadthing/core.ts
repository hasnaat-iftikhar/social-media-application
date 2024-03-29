import { currentUser } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const auth = async () => {
  const getUser = async () => await currentUser();

  const user = await getUser();

  if (!user) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  return true;
};

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await auth();

      return { user };
    })
    .onUploadComplete(async ({ file }) => {
      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
