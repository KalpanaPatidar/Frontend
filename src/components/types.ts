export interface Internship {
  id: string | number;
  title: string;
  description: string;
  company: string;
  location: string;
  duration: string;
  stipend?: string;
  mode?: "Remote" | "In-office" | "Hybrid";   // optional
  skills?: string[];                           // optional
  popularity_score?: number;                   // optional
  skillsMatch?: number;                        // optional
  tags?: string[];                             // optional
  deadline?: string;                           // optional
}
