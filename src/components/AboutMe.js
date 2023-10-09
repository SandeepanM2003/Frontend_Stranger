import React from 'react'
import styles from '../styles/faqs.module.css';
import pigeonLogo from '../images/pigeonLogo.png';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className={styles.card}>
      <img src={pigeonLogo} style={{ objectFit: 'contain' }} />
      <p style={{
        fontSize: "20px"
      }}>
        Hi, My name is Sandeepan Mohanty. Final Year CSE under grad.
      </p>
    </div>
  )
}

export default AboutMe
