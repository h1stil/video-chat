import Message from "../../Message/Message";
import "./Dialog.scss";

const Dialog = () => {
  return (
    <div className="message__container">
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
      />
    </div>
  );
};

export default Dialog;
