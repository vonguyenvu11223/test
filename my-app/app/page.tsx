'use client'
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css'
import Example from './Modal/Example';

export default function Home() {


  return (
    <div className={styles.wrapper}>
        <header className={styles.header}>
          <Link href={'/'}>Home</Link>
          <span>/</span>
          <Link href={'/listDoctor'}>Danh sách bác sĩ</Link>
        </header>
      <Example/>
    </div>
  )

}
