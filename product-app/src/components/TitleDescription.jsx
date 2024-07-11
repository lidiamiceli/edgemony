import styles from "./TitleDescription.module.css";

const TitleDescription = () => {
    const price = "€698,80";
    const sizes = ["36", "37", "38", "39", "40"];
  
    return (
      <div className={styles.titleDescriptionContainer}>
        <div className={styles.titleDescription}>
          <h2>Jimmy Choo</h2>
          <p>Décolleté in raso color avorio con decorazione in cristallo</p>
          <p>Prezzo: {price}</p>
          <label htmlFor="sizes">Scegli la tua misura:</label>
          <select id="sizes" name="sizes">
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

export default TitleDescription;
