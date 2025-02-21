import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';
import { GoHome } from "react-icons/go";
import { CiCamera } from "react-icons/ci";
import { TbMushroom } from "react-icons/tb";
import styles from '../styles/NavBar.module.css'; // Import the styles for the NavBar

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/mushroom" passHref>
        <div className={styles.navItem}>
          <TbMushroom />
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div className={styles.navItem}>
          <GoHome />
        </div>
      </Link>
      <Link href="/photosearch" passHref>
        <div className={styles.navItem}>
          <CiCamera />
        </div>
      </Link>
    </div>
  );
}
