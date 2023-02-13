import { Empty } from "antd";
import { FC } from "react";
import Message from "../components/Message/Message";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
    <Empty className="epty__messages" description={t("txtNoMessages")} />
  );
};

export default MessagesList;
