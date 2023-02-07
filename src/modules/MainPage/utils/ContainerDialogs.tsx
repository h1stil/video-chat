import { useState, FC } from "react";
import ContactList, { PostsProps } from "../components/ContactList/ContactList";

const ContainerDialog: FC<PostsProps> = ({ props, userId }) => {
  const [inputValue, setInputValue] = useState("");
  const [filtred, setFiltred] = useState(Array.from(props));

  const onChangeInput = (value: string) => {
    setFiltred(
      props.filter(
        (dialog) =>
          dialog.user.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setInputValue(value);
  };

  return (
    <ContactList
      userId={userId}
      props={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default ContainerDialog;
