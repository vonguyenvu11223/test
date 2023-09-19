'use client';
import axios from 'axios';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/components/screens/listdoctor/listdoctor.module.scss'
import instance from '@/components/screens/listdoctor/instance';
import Modal from '@/components/shares/Modal/index'

const cx = classNames.bind(styles);

const Page1 = () => {
    const [data, setData] = useState<any[]>([]);
    const [search, setSearch] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [array, setArray] = useState([]);
    const [detail, setDetail] = useState([]);


    useEffect(() => {
        const api = async () => {
            const res = await instance.get('/doctors/list', {
                params: {
                    limit: 9,
                    page: 1,
                },
            });
            setData(res.data.doctors);
            setSearch(res.data.doctors);
        };
        api();
    }, []);

    const filter = (event: any) => {
        setSearch(data.filter(f => f.full_name.toLowerCase().includes(event.target.value)))
    }

    return (
        <div className={cx('wrapper')}>
            {showModal && <Modal
                setShowModal={setShowModal}
                detail={detail}
            />}
            <div className={styles.container}>


                {/* input */}
                <div className={styles.input}>
                    <div className="">
                        <input
                            style={{ color: 'black' }}
                            className={styles.inputname}
                            type="text"
                            placeholder="Tìm nhanh bác sĩ"
                            onChange={filter}
                        />
                    </div>
                    <div className={styles.inputLists}>
                        <div>
                            <select name="gioitinh" id="gioitinh" className={styles.inputList}>
                                <option value="">Giới tính</option>
                                {data?.map((item) => {
                                    return (
                                        <option value={item.sex}>{item.sex}</option>
                                    )
                                })}
                                {/* <option value="1">Nam</option>
                                <option value="0">Nữ</option> */}
                            </select>
                        </div>
                        <div>
                            <select name="hamhoc" id="hamhoc" className={styles.inputList}>
                                <option value="">Hàm học / Học vị</option>
                                {data?.map((item) => {
                                    return (
                                        <option key={item.id} value={item.role}>
                                            {item.role}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <select name="gioitinh" id="chuyenkhoa" className={styles.inputList}>
                                <option value="">Chuyên khoa</option>
                                {data?.map((item) => {
                                    return (
                                        <option key={item.id} value={item.role}>
                                            {item.role}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <select name="lich" id="lichkham" className={styles.inputList}>
                                <option value="">Lịch khám</option>
                                <option value="">Thứ 2</option>
                                <option value="">Thứ 3</option>
                                <option value="">Thứ 4</option>
                                <option value="">Thứ 5</option>
                                <option value="">Thứ 6</option>
                                <option value="">Thứ 7</option>
                                <option value="">CN</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* list */}
                <div className={styles.listInfors}>
                    {search?.map((item, index) => {
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
                                    <button onClick={() => {
                                        setShowModal(true);
                                        setDetail(item);
                                    }}>Detail</button>
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

export default Page1;
