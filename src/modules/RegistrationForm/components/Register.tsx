import { FC } from "react";
import { Button, Form, Input } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import "./Register.scss";

const Register: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const registrSuccess = false;
  return (
    <div className="register__wrapper">
      <h2 className="register__title">Регистрация</h2>
      <p className="hint-text register__text">
        Для входа, Вам необходимо зарегестрироваться
      </p>
      {registrSuccess ? (
        <div className="register__success">
          <div>
            <CheckOutlined
              style={{ fontSize: "3rem", color: "#08c", margin: "10px 0" }}
            />
          </div>
          <h3>Подтвердите свой аккаунт</h3>
          <p className="hint-text">
            На Вашу почту отправлено письмо с ссылкой на подтверждение!
          </p>
        </div>
      ) : (
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label=""
            rules={[
              {
                type: "email",
                message: "Введен неверный адрес электронной почты!",
              },
              {
                required: true,
                message: "Пожалуйста, введите адрес электронной почты!",
              },
            ]}
          >
            <Input
              placeholder="Адрес электронной почты"
              prefix={<MailOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label=""
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите пароль!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Введите пароль"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label=""
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Пожалуйста, подтвердите пароль!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Пароли не совпадают!"));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Повторите пароль"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="nickname"
            label=""
            tooltip="Это имя будут видеть другие пользователи"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите имя пользователя!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Имя пользователя" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Зарегестрироваться
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Register;
