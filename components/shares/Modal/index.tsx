'use client'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './style.module.scss'
import instance from '@/components/shares/instance/instance';

interface Props {
    setShowModal: any,
    content: any,
    title: string
}


function Modal({ setShowModal, content, title }: Props) {

    return (
        <div>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h3>{title}</h3>
                        {/* handle */}
                        <span className={styles.modalClose} onClick={() => setShowModal(false)}>X</span>
                    </div>
                    <div className={styles.modalBody}>
                        <h2>
                            <img src="https://medigo.mdsco.vn/img/doctor.svg" alt="" />
                            {content}
                        </h2>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Modal;