import "./StartPage.scss";
import { greetings } from "../values/greetings";

const ind = Math.floor(Math.random() * greetings.length);

const StartPage = () => {
  return (
    <div className="startpage__mainzone">
      <div className="startpage__picbox">
        <img src="../../../001.png"></img>
        <div className="startpage__greetbox">
          <span className="">{greetings[ind][0]}</span>
        </div>
        <div className="startpage__greetcat">
          <span className="">{greetings[ind][1]}</span>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
