import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import "./Login.scss";
import submitForm from "../../drivers/submitForm";
import { ILogForm } from "../../../globalValues";
import { useTranslation } from "react-i18next";

const Login: FC = () => {
  const { t } = useTranslation();

  const onFinish = (values: ILogForm) => {
    console.log("Received values of form: ", values);
    submitForm("login", values);
  };
  return (
    <div className="auth__wrapper">
      <div className="auth__top">
        <h2 className="auth__top__title">{t("txtEnterAcc")}</h2>
        <p className="hint-text auth__top__text">{t("txtHintEnter")}</p>
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
