import Link from "next/link";
import styles from '@/components/screens/listdoctor/listdoctor.module.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className={styles.names} style={{ textAlign: 'center' }}>
                <h1 style={{ borderBottom: '2px solid green' }}>Danh sách bác sĩ</h1>
            </div>
            {children}
            <div className={styles.page}>
                <ul>
                    <Link href={'/listDoctor/page1'}><li>1</li></Link>
                    <Link href={'/listDoctor/page2'}><li>2</li></Link>
                    <Link href={'/listDoctor/page3'}><li>3</li></Link>
                    <Link href={'/listDoctor/page4'}><li>4</li></Link>
                </ul>
            </div>
        </div>
    );
}
