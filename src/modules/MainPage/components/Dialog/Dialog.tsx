import { scrollMessages } from "../../utils/scrollMessages";
import Message from "../Message/Message";
import "./Dialog.scss";

const Dialog = () => {
  const status: "offline" | "online" = "online";
  window.onload = scrollMessages;

  return (
    <div className="message__container">
      <div className="dialog__user">
        <p className="user__name">Username</p>
        <div className="user__status">
          {status === "online" ? (
            <p className="user__status_online">в сети</p>
          ) : (
            <p className="user__status_offline">не в сети</p>
          )}
        </div>
      </div>
      <div className="dialog__chat">
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hello my friend hello my friend",
            answer: false,
            isReading: true,
          }}
        />{" "}
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
        <Message
          {...{
            avatar:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc7flqApawFOs_eWbeTZRPA-Uo92IObC1pQ&usqp=CAU",
            date: Date.now(),
            message: "hi, It's me",
            answer: true,
          }}
        />
      </div>
    </div>
  );
};

export default Dialog;
