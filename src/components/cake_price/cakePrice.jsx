import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './cakePrice.module.css';

// 🔹 Import Local Images
import cake_price1 from "../../assets/cake_price/cake_price1.avif";
import cake_price2 from "../../assets/cake_price/cake_price2.avif";
import cake_price3 from "../../assets/cake_price/cake_price3.avif";
import cake_price4 from "../../assets/cake_price/cake_price4.avif";

const CakePrice = () => {
  const cakes = [
    {
      id: 1,
      image: cake_price1,
      name: 'Decadent Red Velvet Cake',
      price: 685,
      rating: 4.9,
      reviews: 319,
      delivery: 'In 3 hours'
    },
    {
      id: 2,
      image: cake_price2,
      name: 'Chocolate Truffle Cake',
      price: 595,
      rating: 4.9,
      reviews: 828,
      delivery: 'In 3 hours'
    },
    {
      id: 3,
      image: cake_price3,
      name: 'Divine Butterscotch Cake',
      price: 545,
      rating: 4.9,
      reviews: 728,
      delivery: 'In 3 hours'
    },
    {
      id: 4,
      image: cake_price4,
      name: 'Choco Butterscotch Cake',
      price: 645,
      rating: 5,
      reviews: 1,
      delivery: 'In 3 hours'
    }
  ];

  return (
    <div className={styles.cakeContainer}>
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h2 className={styles.mainTitle}>Bestseller Cakes Online</h2>
          <p className={styles.subtitle}>Delectably Delicious in Every Layers!</p>
        </div>
        <button className={styles.viewAllBtn}>View All</button>
      </div>

      <div className={styles.cakesGrid}>
        {cakes.map((cake) => (
          <div key={cake.id} className={styles.cakeCard}>
            <div className={styles.imageWrapper}>
              <img
                src={cake.image}
                alt={cake.name}
                className={styles.cakeImage}
              />

              <button className={styles.wishlistBtn}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>

              <span className={styles.vegBadge}>
                <span className={styles.vegDot}></span>
              </span>
            </div>

            <div className={styles.cardBody}>
              <h5 className={styles.cakeName}>{cake.name}</h5>
              <p className={styles.cakePrice}>₹ {cake.price}</p>

              <div className={styles.ratingSection}>
                <span className={styles.ratingBadge}>★ {cake.rating}</span>
                <span className={styles.reviewsText}>({cake.reviews} Reviews)</span>
              </div>

              <p className={styles.deliveryText}>
                <span className={styles.deliveryLabel}>Earliest Delivery :</span> {cake.delivery}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakePrice;
