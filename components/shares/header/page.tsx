'use client';
import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';

function Head() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ul>
                    <li className={styles.left}>
                        <img src="https://template.s3-hcm-r1.longvan.net//hospitals/13cffa44-77d8-456a-9a68-1c7a636798b1.png?response-content-disposition=inline%3B%20filename%3D%229fb88831-c85c-45f1-b8a6-ac3ac7cd8a9b.png%22%3B%20filename%2A%3DUTF-8%27%279fb88831-c85c-45f1-b8a6-ac3ac7cd8a9b.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=WDLRKG4GPDOA8HUC00AV%2F20230921%2Fdefault%2Fs3%2Faws4_request&X-Amz-Date=20230921T104016Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=0a51c02ef74c2f0ee01c81052acc85b79398ca5c87be9bf7487f7522907c924b" alt="" />
                    </li>
                    <li className={styles.right}>
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
                            <li>
                                <Link href={'/pagination'} className="nav-link">
                                    Pagination
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Head;
