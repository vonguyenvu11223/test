'use client'
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss'

export default function Home() {


  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Home Page</h1>
      </header>
    </div>
  )

}
