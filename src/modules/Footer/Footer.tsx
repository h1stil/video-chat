import { GithubOutlined } from "@ant-design/icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__authors">
        <ul className="authors__list">
          <li className="authors__item">
            <a
              href="https://github.com/h1stil"
              target="_blank"
              className="authors__link"
            >
              <GithubOutlined /> Ilmir
            </a>
            <a
              href="https://github.com/Andrey78945"
              target="_blank"
              className="authors__link"
            >
              <GithubOutlined /> Andrey
            </a>
            <a
              href="https://github.com/istairina"
              target="_blank"
              className="authors__link"
            >
              <GithubOutlined /> Irina
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__year">2023</p>
    </div>
  );
};

export default Footer;
