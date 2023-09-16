'use client'
import styles from './style.module.scss'

function Modal({ setShowModal }) {
    return (
        <div>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h3>Title</h3>
                        <span className={styles.modalClose} onClick={() => setShowModal(false)}>X</span>
                    </div>
                    <div className={styles.modalBody}>
                        <img src="" alt="" />
                        <p>name</p>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Modal;