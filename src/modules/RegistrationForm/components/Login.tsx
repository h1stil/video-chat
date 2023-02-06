import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import "./Login.scss";
import submitForm from "../../drivers/submitForm";
import { ILogForm } from "../../../globalValues";

const Login: FC = () => {
  const onFinish = (values: ILogForm) => {
    console.log("Received values of form: ", values);
    submitForm("login", values);
  };
  return (
    <div className="auth__wrapper">
      <div className="auth__top">
        <h2 className="auth__top__title">Войти в аккаунт</h2>
        <p className="hint-text auth__top__text">
          Пожалуйста, войдите в свой аккаунт
        </p>
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
                message: "Пожалуйста, введите имя пользователя",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="auth__form_item-icon" />}
              placeholder="Имя пользователя"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Пожалуйста, введите корректный e-mail!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="auth__form_item-icon" />}
              placeholder="E-mail пользователя"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
          >
            <Input
              prefix={<LockOutlined className="auth__form_item-icon" />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="auth__form_login-button"
            >
              Войти
            </Button>
            <Link to="/register">Зарегистрироваться!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
