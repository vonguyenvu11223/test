'use client';
import axios from 'axios';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './listDoctor.module.scss';
import instance from './instance';
import { isArray } from 'lodash';

const cx = classNames.bind(styles);

const listDoctor = () => {
    const [data, setData] = useState<any[]>([]);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [array, setArray] = useState([]);

    console.log(data);

    // 1. instance : -> set headers
    // 2. instance call method

    useEffect(() => {
        const api = async () => {
            const res = await instance.get('/doctors/list', {
                params: {
                    limit: 999,
                },
            });
            setData(res.data.doctors);
        };
        api();
    }, []);

    if (!isArray(data)) {
        return null;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={styles.container}>
                {/* {showModal && <Modal close={setShowModal} />} */}
                <div className={styles.names}>
                    <h1 style={{ borderBottom: '2px solid green' }}>Danh sách bác sĩ</h1>
                </div>

                {/* input */}
                {/* <div className={styles.input}>
                    <div className="">
                        <input
                            style={{ color: 'black' }}
                            className={styles.inputname}
                            type="text"
                            placeholder="Tìm nhanh bác sĩ"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputLists}>
                        <div>
                            <select name="gioitinh" id="gioitinh" className={styles.inputList}>
                                <option value="">Name</option>
                                {data?.map((item, index) => {
                                    return (
                                        <option key={item.index} value={item.sex}>
                                            {item.sex}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <select name="hamhoc" id="hamhoc" className={styles.inputList}>
                                <option value="">Username</option>
                                {data?.map((item, index) => {
                                    return (
                                        <option key={item.index} value={item.full_name}>
                                            {item.full_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <select name="gioitinh" id="chuyenkhoa" className={styles.inputList}>
                                <option value="">website</option>
                                {data?.map((item, index) => {
                                    return (
                                        <option key={item.index} value={item.role}>
                                            {item.role}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <select name="lich" id="lichkham" className={styles.inputList}>
                                <option value="">Phone</option>
                                {data?.map((item, index) => {
                                    return (
                                        <option key={item.index} value={item.id}>
                                            {item.phone}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div> */}

                {/* list */}
                <div className={styles.listInfors}>
                    {data
                        ?.filter((item) => {
                            return search.toLocaleLowerCase() === ''
                                ? item
                                : item.full_name.toLocaleLowerCase().includes(search);
                        })
                        ?.map((item, index) => {
                            return (
                                <div hidden className={styles.listInfor} key={item.id}>
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
                                        <button onClick={() => setShowModal(true)}>Detail1</button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default listDoctor;
