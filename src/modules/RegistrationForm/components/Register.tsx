import { FC, useState } from "react";
import { Button, Form, Input } from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  CheckOutlined,
} from "@ant-design/icons";

import "./Register.scss";
import { IRegForm } from "../../../values/globalValues";
import submitForm from "../../drivers/submitForm";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Register: FC = () => {
  const { t } = useTranslation();
  const [registrSuccess, setRegistrSuccess] = useState(false);

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: IRegForm) => {
    // console.log("Received values of form: ", values);
    const respCode = await submitForm("register", values);
    if (respCode === 201) {
      setRegistrSuccess(true);
      setTimeout(() => navigate("/login"), 4000);
    }
  };

  return (
    <div className="register__wrapper">
      <h2 className="register__title">{t("txtRegistration")}</h2>
      <p className="hint-text register__text">{t("txtHintRegister")}</p>
      {registrSuccess ? (
        <div className="register__success">
          <div>
            <CheckOutlined
              style={{ fontSize: "3rem", color: "#08c", margin: "10px 0" }}
            />
          </div>
          <h3>{t("txtVerify")}</h3>
          <p className="hint-text">{t("txtEmailConfirm")}</p>
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
                message: t("txtIncorretEmail"),
              },
              {
                required: true,
                message: t("txtEnterEmail"),
              },
            ]}
          >
            <Input placeholder={t("txtEmail")} prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            label=""
            rules={[
              {
                required: true,
                message: t("txtEnterPassword"),
              },
              { min: 3, message: t("txtPassMin3Sym") },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder={t("txtPassword")}
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
                message: t("txtConfirmPassword"),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t("txtPasswordMismatch")));
                },
              }),
            ]}
          >
            <Input.Password
              placeholder={t("txtRepeatPassword")}
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="name"
            label=""
            tooltip={t("txtThisNameVisible")}
            rules={[
              {
                required: true,
                message: t("txtEnterUsername"),
                whitespace: true,
              },
            ]}
          >
            <Input placeholder={t("txtUsername")} prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item>
            <Link to="/login">{t("logIn")}</Link>
            <Button
              type="primary"
              htmlType="submit"
              className="auth__form_reg-button"
            >
              {t("txtRegister")}
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Register;
