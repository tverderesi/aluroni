import styles from "./Dish.module.scss";
import foodMenu from "../itens.json";
import classNames from "classnames";
import Allergenics from "../allergenics";

type Props = (typeof foodMenu)[0];

export function Dish(props: Props) {
  const {
    title,
    description,
    category,
    size,
    serving,
    price,
    photo,
    allergenics,
  } = props;

  return (
    <div className={styles.dish}>
      <div className={styles.dish__picture}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.dish__description}>
        <div className={styles.dish__title}>
          <h2> {title} </h2>
          <Allergenics allergenics={allergenics} />
          <p> {description} </p>
        </div>
        <div className={styles.dish__tags}>
          <div
            className={classNames({
              [styles.dish__type]: true,
              [styles[`dish__type__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.dish__servings}>{size}g</div>
          <div className={styles.dish__people_served}>
            <span className="material-symbols-outlined">group</span>
            {serving}
          </div>
          <div className={styles.dish__price}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
