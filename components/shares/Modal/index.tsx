'use client'
import { useEffect, useState } from 'react';
import styles from './style.module.scss'
import instance from '@/components/screens/listdoctor/instance';

interface Prop {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    detail: never[];
}

function Modal({ setShowModal, detail }: Prop) {
    const [data, setData] = useState<any[]>([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [hocvi, setHocvi] = useState('');


    useEffect(() => {
        setId(detail.id);
        setHocvi(detail.role);
        setName(detail.full_name);
    }, [])

    return (
        <div>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h3>Thông tin bác sĩ</h3>
                        <span className={styles.modalClose} onClick={() => setShowModal(false)}>X</span>
                    </div>
                    <div className={styles.modalBody}>
                        <div className={styles.imgList}>
                            <img src="https://medigo.mdsco.vn/img/doctor.svg" alt="" />
                        </div>
                        <h2>{hocvi} {name}</h2>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Modal;