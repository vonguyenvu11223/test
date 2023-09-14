import cx from "classnames";
import styles from './modal.module.scss';



function Modal({ close }) {
    return (
        <div id="myModal" className={cx(styles.modal, styles.demo)}>
            <div className={cx("modal-content", "db")}>
                <span className={cx("close")} onClick={() => close(false)}>&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </div >
    );
}

export default Modal;