'use client'
import styles from './paginate.module.scss';
import Link from "next/link";
interface Props {
    onPageChange: any,
    value: any,
    click: any
}

function Pagination({ onPageChange, value, click }: Props) {

    const handlePageChange = (newpage: any) => {
        if (onPageChange) {
            onPageChange(newpage)
        }
    }

    return (
        <div className={styles.container}>
            <button
                disabled={value <= 1}
                onClick={() => {
                    handlePageChange(value - 1);
                    window.scrollTo(0, 0);
                    click();
                }}
            >
                &lt;
            </button>

            <button
                onClick={() => {
                    handlePageChange(value = 1);
                    window.scrollTo(0, 0);
                    click();
                }}
            >
                1
            </button>

            <button
                onClick={() => {
                    handlePageChange(value = 2);
                    window.scrollTo(0, 0);
                    click();
                }}
            >
                2
            </button>

            <button
                onClick={() => {
                    handlePageChange(value = 3);
                    window.scrollTo(0, 0);
                    click();
                }}
            >
                3
            </button>

            <button
                onClick={() => {
                    handlePageChange(value = 4);
                    window.scrollTo(0, 0);
                    click();
                }}
            >
                4
            </button>

            <button
                disabled={value >= 4}
                onClick={() => {
                    handlePageChange(value + 1)
                    window.scrollTo(0, 0);
                    click();
                }}
            >
                &gt;
            </button>
        </div >
    );
}

export default Pagination;

