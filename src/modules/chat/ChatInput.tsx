import { useContext, useState } from "react";
import { RoomContext } from "../../context/RoomContext";

export const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const { roomId, sendMessage, userId } = useContext(RoomContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message, roomId, userId);
          setMessage("");
        }}
      >
        <div className="flex ">
          <textarea
            className="border rounded"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button type="submit" className="btn btn-video">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "60px",
                height: "60px",
                transform: "rotate(90deg)",
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};
