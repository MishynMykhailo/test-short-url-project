import React, { ChangeEvent, useState } from "react";
import s from "./Form.module.css";
import { Notify } from "notiflix";

Notify.init({
  width: "300px",
  position: "right-bottom",
  closeButton: false,
  clickToClose: true,
  timeout: 2000,
});
interface IProps {
  createNewItem: (originalUrl: string) => void;
}
const Form: React.FC<IProps> = ({ createNewItem }) => {
  const [originalUrl, setOriginalUrl] = useState<string>("");

  const handlerChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    switch (name) {
      case "originalUrl":
        setOriginalUrl(value);
        break;
      default:
        break;
    }
  };

  const validateData = (originalUrl: string) => {
    console.log(originalUrl.includes("https"));
    if (
      originalUrl.includes("http") ||
      originalUrl.includes("https") ||
      originalUrl.includes("www")
    ) {
      return true;
    } else {
      Notify.failure("Incorrect original URL");
      return false;
    }
  };

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateData(originalUrl)) {
      createNewItem(originalUrl);
    }
  };

  return (
    <>
      <h1 className={s.h1}>Paste the URL to be shortened</h1>
      <form className={s.form} onSubmit={handlerSubmit}>
        <input
          className={s.input}
          name="originalUrl"
          id="originalUrl"
          placeholder="Enter your link"
          autoComplete="false"
          value={originalUrl}
          onChange={handlerChange}
        ></input>
        <button className={s.btn} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
