import { generateComponents } from "@uploadthing/react";

import type { OurFileRouter } from "@/app/uploadthing/core";

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
