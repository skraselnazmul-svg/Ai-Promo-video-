export type Profile = {
  id: string;
  full_name: string | null;
  email: string | null;
  credits: number;
  created_at: string;
};

export type Project = {
  id: string;
  user_id: string;
  title: string;
  prompt: string;
  status: "draft" | "processing" | "completed" | "failed";
  video_url: string | null;
  thumbnail_url: string | null;
  duration: number | null;
  aspect_ratio: string;
  style: string;
  created_at: string;
  updated_at: string;
};
