'use client'
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './listDoctor.module.css';

const listDoctor = () => {

    const [data, setData] = useState<any[]>([]);
    const url = "https://jsonplaceholder.typicode.com/posts";

    const getPost = async () => {
        const { data } = await axios.get(url);
        setData(data);
        console.log(data);

    }

    useEffect(() => {

        getPost();
    }, [])

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link href={'/'}>Home</Link>
                <span>/</span>
                <Link href={'/listDoctor'}>Danh sách bác sĩ</Link>
            </header>
            <div className={styles.container}>

                <div className={styles.names}>
                    <h1 style={{ borderBottom: '2px solid green' }}>Danh sách bác sĩ</h1>
                </div>


                {/* input */}
                <div className={styles.input}>
                    <div className="">
                        <input className={styles.inputname} type="text" placeholder='Tìm nhanh bác sĩ' />
                    </div>
                    <div className={styles.inputLists}>
                        <div>
                            <select name="gioitinh" id="gioitinh" className={styles.inputList}>
                                <option value="">Giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nu">Nữ</option>
                            </select>
                        </div>
                        <div>
                            <select name="hamhoc" id="hamhoc" className={styles.inputList}>
                                <option value="">Hàm học / học vị</option>
                                <option value="Nam">Nam</option>
                                <option value="Nu">Nữ</option>
                            </select>
                        </div>
                        <div>
                            <select name="gioitinh" id="chuyenkhoa" className={styles.inputList}>
                                <option value="">Chuyên Khoa</option>
                                <option value="Nam">Nam</option>
                                <option value="Nu">Nữ</option>
                            </select>
                        </div>
                        <div>
                            <select name="lich" id="lichkham" className={styles.inputList}>
                                <option value="">Lịch khám</option>
                                <option value="Nam">Nam</option>
                                <option value="Nu">Nữ</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* list */}
                <div className={styles.listInfors}>
                    <ul>
                        {/* {data?.map((item, index) => {
                            return <li key={index} >
                                {
                                    JSON.stringify(item, undefined, 2)
                                }
                            </li>
                        })} */}
                    </ul>
                    <div hidden className={styles.listInfor}>
                        <div className={styles.imgList}>
                            <img src="https://medigo.mdsco.vn/img/doctor.svg" alt="" />
                        </div>
                        <div className={styles.chucnangList}>
                            <p>BS.CKI.</p>
                        </div>
                        <div className={styles.nameList}>
                            <p>Võ Thị Ngọc</p>
                        </div>
                        <div className={styles.detail}>
                            <button>Chi tiết</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default listDoctor