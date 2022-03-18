export interface MessageItemProps {
  id: string;
  userId: number;
  userName: string;
  userMessage: string | undefined;
  time: string;
  image: File | undefined;
  onDeleteMessage: (id: string) => void;
  onEditMessage: (value: string | File, id: string) => void;
}
