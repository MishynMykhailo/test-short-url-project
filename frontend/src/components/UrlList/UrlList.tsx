import React from "react";
import s from "./UrlList.module.css";
import { Item } from "../../services/interfaces";
import { DeleteIcon } from "../../images";
import { LINK_BACKEND } from "../../services/variables";
interface IProps {
  items: Item[];
  deleteById: (id: number) => void;
}
const UrlList: React.FC<IProps> = ({ items, deleteById }) => {
  return (
    <ul className={s.ul}>
      {items &&
        items.map(({ id, originalUrl, shortUrl }) => {
          return (
            <li className={s.li} key={id}>
              <div className={s.div}>
                <div className={s.contLi}>
                  <p className={s.p}>OriginalUrl: </p>
                  <a
                    className={s.a}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={originalUrl}
                  >
                    {originalUrl}
                  </a>
                </div>
                <div className={s.contLi}>
                  <p className={s.p}>shortUrl: </p>
                  <a
                    className={s.a}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${LINK_BACKEND}/shortUrl/${shortUrl}`}
                  >
                    {shortUrl}
                  </a>
                </div>
              </div>
              <button
                type="button"
                className={s.btn}
                onClick={() => deleteById(id)}
              >
                <DeleteIcon />
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default UrlList;
