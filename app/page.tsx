'use client'
import moment from 'moment';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './page.module.scss'


export default function Home() {


  return (
    <div className={styles.wrapper}>
      {/* header */}
      <header className={styles.header}>
        <div className={styles.top}>
          <p>Xin chào</p>
        </div>
        <div className={styles.login}>
          <p>Đăng ký/Đăng nhập</p>
        </div>
      </header>

      {/* content */}
      <div className={styles.content}>

        <div className={styles.contentTop}>
          <div className={styles.contentTopT}>
            <ul>
              <li>Đặt khám</li>
              <li>Hồ sơ sức khoẻ</li>
              <li>Gói dịch vụ</li>
              <li>Thanh toán</li>
              <li>Hướng dẫn</li>
              <li>Phiếu hẹn</li>
              <li></li>
            </ul>
          </div>
          <div className={styles.contentTopB}>
            <ul>
              <li>Đặt khám</li>
              <li>Đặt khám bác sĩ</li>
              <li>Đặt tư vấn từ xa</li>
            </ul>
          </div>
        </div>
      </div>

      {/* take care */}
      <div className={styles.takecare}>
        <div className={styles.header}>

        </div>
        <div className={styles.takeItem}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )

}
