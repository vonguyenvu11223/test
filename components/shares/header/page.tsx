'use client';
import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

function Head() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul>
                    <li>
                        <Link href={'/'} className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/masonry'} className="nav-link">
                            masonry
                        </Link>
                    </li>
                    <li>
                        <Link href={'/listDoctor'} className="nav-link">
                            Listdoctor
                        </Link>
                    </li>
                    <li>
                        <Link href={'/countdown'} className="nav-link">
                            countdown
                        </Link>
                    </li>
                    <li>
                        <Link href={'/todo'} className="nav-link">
                            Todo
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Head;
