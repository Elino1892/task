import { User } from "./User";

export interface Message {
  id: string;
  text?: string;
  image?: File;
  user: User | null | undefined;
  time: string;
}
