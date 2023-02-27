import "./Message.scss";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

interface IMessage {
  answer: boolean;
  message: string;
  avatar: string;
  date: number;
  isReading?: boolean;
}

const Message = (body: IMessage) => {
  return body.answer ? (
    <div className="message">
      <div className="message__avatar">
        <img src={body.avatar} alt="avatar" className="avatar__image" />
      </div>
      <div className="message__content">
        <div className="message__border">
          <p className="message__text">{body.message}</p>
        </div>
        <span className="message__date">
          {formatDistanceToNow(body.date, {
            addSuffix: true,
            locale: ruLocale,
          })}
        </span>
      </div>
    </div>
  ) : (
    <div className="message_answer">
      <div className="message__avatar">
        <img src={body.avatar} alt="avatar" className="avatar__image" />
      </div>
      <div className="message__content_answer">
        <div className="message__border">
          <p className="message__text">{body.message}</p>
        </div>
        <span className="message__date">
          {formatDistanceToNow(body.date, {
            addSuffix: true,
            locale: ruLocale,
          })}
        </span>
      </div>
      {body.isReading ? (
        <span className="message__checked">&#10003;&#10003;</span>
      ) : (
        <span className="message__checked">&#10003;</span>
      )}
    </div>
  );
};

export default Message;
