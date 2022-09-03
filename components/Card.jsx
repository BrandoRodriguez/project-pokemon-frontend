import styles from "../styles/Card.module.css";

export default function Card({ id, name, img, types }) {
  return (
    <div className={`${styles.card} ${types[0].type.name}`}>
      <h2 className={styles.h2}>{id}</h2>
      <div className={styles.description}>
        <h3 className={styles.h3}>{name}</h3>
        <div className={styles.type}>
          {types.map((e, index) => {
            return (
              <div key={index} className={styles.type_background}>
                {e.type.name}
              </div>
            );
          })}
        </div>
      </div>
      <img
        className={styles.imagen}
        src={img}
        alt="pokemon"
        width="95px"
        height="95px"
      />
    </div>
  );
}