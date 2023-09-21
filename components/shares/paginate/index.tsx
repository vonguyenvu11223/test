'use client'
import styles from './paginate.module.scss';

interface Props {
    onPageChange: any,
    value: any
}


function Pagination({ onPageChange, value }: Props) {

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
                }}
            >
                &lt;
            </button>

            <button
                onClick={() => {
                    handlePageChange(value = 1);
                    window.scrollTo(0, 0);
                }}
            >
                1
            </button>

            <button
                onClick={() => {
                    handlePageChange(value = 2);
                    window.scrollTo(0, 0);
                }}
            >
                2
            </button>

            <button
                onClick={() => {
                    handlePageChange(value = 3);
                    window.scrollTo(0, 0);
                }}
            >
                3
            </button>

            <button
                onClick={() => {
                    handlePageChange(value = 4);
                    window.scrollTo(0, 0);
                }}
            >
                4
            </button>

            <button
                disabled={value >= 4}
                onClick={() => {
                    handlePageChange(value + 1)
                    window.scrollTo(0, 0);
                }}
            >
                &gt;
            </button>
        </div >
    );
}

export default Pagination;