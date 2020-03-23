import React from "react";
import css from "./Statistics.module.css";

// Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.

// title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
// Компонент должен создавать DOM элемент следующей структуры.

const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const Statistics = ({ stats, title }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statistics_list}>
          {stats.map(({ id, label, percentage }) => {
            return (
            <li style={{backgroundColor: getRandomColor()}} className={css.item} key={id}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
