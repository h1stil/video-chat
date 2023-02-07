import { Empty } from "antd";
import { FC } from "react";
import Message from "../components/Message/Message";

interface IMessages {
  avatar: string;
  message: string;
  date: number;
  answer: boolean;
  isReading: boolean;
}

interface IMessagesProps {
  items: IMessages[];
}

const MessagesList: FC<IMessagesProps> = ({ items }) => {
  return items.length ? (
    <div className="dialog__chat">
      {items.map((message) => (
        <Message
          avatar={message.avatar}
          date={message.date}
          message={message.message}
          answer={message.answer}
          isReading={message.isReading}
        />
      ))}
    </div>
  ) : (
    <Empty className="epty__messages" description="Нет сообщений" />
  );
};

export default MessagesList;
