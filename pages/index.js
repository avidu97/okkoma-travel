import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>This is the Homepage</h1>
        <h2>
          <Link href="/hotels">Hotels</Link>
        </h2>
        <h2>
          <Link href="/destinations">Destinations</Link>
        </h2>
      </div>
      {/* ______________________________________________________________________HERO */}
      <div className={styles.hero_container}>
        <div className={styles.hero_heading}>
          <h1>This is the hero title</h1>
        </div>
        <div className={styles.hero_description}>
          <p>
            This is the hero description, where you add all the necessary
            details.
          </p>
        </div>
      </div>
      {/* ___________________________________________________________________SERVICES */}
      <div className={styles.services_container}>
        <h2>OUR SERVICES</h2>
        <div className={styles.service}>Service 1</div>
        <div className={styles.service}>Service 2</div>
        <div className={styles.service}>Service 3</div>
        <div className={styles.service}>Service 4</div>
        <div className={styles.service}>Service 5</div>
        <div className={styles.service}>Service 6</div>
      </div>
      {/* ______________________________________________________________________STEPS */}
      <div className={styles.steps_container}>
        <h2>OUR SERVICES</h2>
        <div className={styles.steps}>Step 1</div>
        <div className={styles.steps}>Step 2</div>
        <div className={styles.steps}>Step 3</div>
      </div>
      {/* _____________________________________________________________________HOTELS */}
      <div className={styles.hotels_container}>
        <h2>POPULAR HOTELS</h2>
        <div className={styles.hotel}>
          <div className={styles.hotel_image}></div>
          <p>Hotel Name 1</p>
          <div className={styles.hotel_tags}></div>
        </div>
        <div className={styles.hotel}>
          <div className={styles.hotel_image}></div>
          <p>Hotel Name 2</p>
          <div className={styles.hotel_tags}></div>
        </div>
        <div className={styles.hotel}>
          <div className={styles.hotel_image}></div>
          <p>Hotel Name 3</p>
          <div className={styles.hotel_tags}></div>
        </div>
      </div>
      {/* ______________________________________________________________________PLACES */}
      <div className={styles.places_container}>
        <h2>POPULAR PLACES</h2>
        <div className={styles.place}>
          <div className={place_image}></div>
          <div className={place_dsc_holder}>place 1</div>
        </div>
        <div className={styles.place}>
          <div className={place_image}></div>
          <div className={place_dsc_holder}>place 2</div>
        </div>
        <div className={styles.place}>
          <div className={place_image}></div>
          <div className={place_dsc_holder}>place 3</div>
        </div>
      </div>
      {/* ______________________________________________________________________REVIEWS */}
      <div className={styles.review_container}>
        <div className={styles.review}>Review 1</div>
        <div className={styles.review}>Review 2</div>
        <div className={styles.review}>Review 3</div>
        <div className={styles.review}>Review 4</div>
        <div className={styles.review}>Review 5</div>
      </div>
      {/* _________________________________________________________________________FAQs */}
      <div className={styles.faq_container}>
        <h2>FAQ</h2>
        <div className={styles.faq}>
          <div className={styles.faq_question}>Question 1</div>
          <div className={styles.faq_answer}>Answer 1</div>
        </div>
        <div className={styles.faq}>
          <div className={styles.faq_question}>Question 2</div>
          <div className={styles.faq_answer}>Answer 2</div>
        </div>
        <div className={styles.faq}>
          <div className={styles.faq_question}>Question 3</div>
          <div className={styles.faq_answer}>Answer 3</div>
        </div>
        <div className={styles.faq}>
          <div className={styles.faq_question}>Question 4</div>
          <div className={styles.faq_answer}>Answer 4</div>
        </div>
      </div>
    </div>
  );
}
