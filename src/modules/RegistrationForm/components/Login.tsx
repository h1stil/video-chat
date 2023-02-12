import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import "./Login.scss";
import submitForm from "../../drivers/submitForm";
import { ILogForm } from "../../../values/globalValues";
import { useTranslation } from "react-i18next";
import isBan from "../../drivers/isBan";

const Login: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onFinish = async (values: ILogForm) => {
    const errText = document.getElementById("errorLogin");
    const respCode = await submitForm("login", values);
    if (respCode === 201) {
      if (isBan() === true) {
        window.localStorage.setItem("AUTH", "true");
        setTimeout(() => navigate("/im"), 100);
      }
    }
    if (respCode === 401) {
      window.localStorage.removeItem("AUTH");
      if (errText) errText.style.display = "block";
    } else {
      if (errText) errText.style.display = "none";
    }
  };

  return (
    <div className="auth__wrapper">
      <div className="auth__top">
        <h2 className="auth__top__title">{t("txtEnterAcc")}</h2>
        <p className="hint-text auth__top__text">{t("txtHintEnter")}</p>
        <div className="err-text ant-form-item-explain-error" id="errorLogin">
          {t("txtErrorLogin")}
        </div>
      </div>
      <div className="auth__bot">
        <Form
          name="normal_login"
          className="auth__form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: t("txtEnterUsername"),
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="auth__form_item-icon" />}
              placeholder={t("txtUsername")}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: t("txtEnterEmail"),
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="auth__form_item-icon" />}
              placeholder={t("txtUserEmail")}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: t("txtEnterPassword") }]}
          >
            <Input
              prefix={<LockOutlined className="auth__form_item-icon" />}
              type="password"
              placeholder={t("txtPassword")}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="auth__form_login-button"
            >
              {t("txtEnter")}
            </Button>
            <Link to="/register">{t("txtRegister")}</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
