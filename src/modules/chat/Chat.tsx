import { useContext } from "react";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";
import { RoomContext } from "../../context/RoomContext";

export interface Message {
  content: string;
  author?: string;
  timestamp: number;
}

export const Chat: React.FC = () => {
  const { chat } = useContext(RoomContext);

  return (
    <div className="flex flex-col h-full justify-between" data-testid="chat">
      <div style={{ height: "300px", border: "2px solid black" }}>
        {chat?.messages.length > 0 &&
          chat?.messages.map((message: Message) => (
            <ChatBubble
              message={message}
              key={message.timestamp + (message?.author || "anonymous")}
            />
          ))}
      </div>
      <ChatInput />
    </div>
  );
};
