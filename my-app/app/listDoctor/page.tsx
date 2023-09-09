'use client'
import axios from 'axios';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import styles from './listDoctor.module.css';
import Example from '../Modal/page';


const listDoctor = () => {
    const [data, setData] = useState<any[]>([]);
    const [detail, setDetail] = useState<any[]>([]);
    const [search, setSearch] = useState('');

    const url = "https://api-medigo-development.mdsco.vn/doctors";
    const url1 = "https://api-medigo-development.mdsco.vn/doctor/detail?doctor_id=9";

    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                setData(response.data);
            }).catch(function (error) {
            });
    }, [])

    useEffect(() => {
        axios.get(url1)
            .then(function (response) {
                setDetail(response.data);
                console.log(response);
            }).catch(function (error) {
            });
    }, [])

    const handlSearch = (event: any) => {
        setSearch(event.target.value);
    }

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
                {/* <div className={styles.input}>
                    <div className="">
                        <input style={{ color: 'black' }} className={styles.inputname} type="text" placeholder='Tìm nhanh bác sĩ' onChange={handlSearch} />
                    </div>
                    <div className={styles.inputLists}>
                        <div>
                            <select name="gioitinh" id="gioitinh" className={styles.inputList}>
                                <option value="">Name</option>
                                {data.map((item, index) => {
                                    return (
                                        <option key={item.name} value={item.name}>{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <select name="hamhoc" id="hamhoc" className={styles.inputList}>
                                <option value="">Username</option>
                                {data.map((item, index) => {
                                    return (
                                        <option key={item.username} value={item.username} >{item.username}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <select name="gioitinh" id="chuyenkhoa" className={styles.inputList}>
                                <option value="">website</option>
                                {data.map((item, index) => {
                                    return (
                                        <option key={item.website} value={item.website}>{item.website}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <select name="lich" id="lichkham" className={styles.inputList}>
                                <option value="">Phone</option>
                                {data.map((item, index) => {
                                    return (
                                        <option key={item.phone} value={item.phone}>{item.phone}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                </div> */}

                {/* list */}
                <div className={styles.listInfors}>
                    {data.filter((item) => {
                        return search.toLocaleLowerCase() === '' ? item : item.full_name.toLocaleLowerCase().includes(search);
                    }).map((item, index) => {
                        return (
                            <div hidden className={styles.listInfor} key={index}>
                                <div className={styles.imgList}>
                                    <img src="https://medigo.mdsco.vn/img/doctor.svg" alt="" />
                                </div>
                                <div className={styles.chucnangList}>
                                    <p>{item.role}</p>
                                </div>
                                <div className={styles.nameList}>
                                    <p>{item.full_name}</p>
                                </div>
                                <div className={styles.detail}>
                                    <button >
                                        Detail
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* test */}
                {/* <div>
                    <ul>
                        {detail.map((item,index) => {
                            return(
                                <li key={index}>{item.full_name}</li>
                            )
                        })}
                    </ul>
                </div> */}
                <div>
                </div>
            </div>
        </div>
    );
};

export default listDoctor