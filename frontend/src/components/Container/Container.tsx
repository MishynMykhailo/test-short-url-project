import React from "react";
import s from "./Container.module.css";
interface IProps {
  children: React.ReactNode;
}
const Container: React.FC<IProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
