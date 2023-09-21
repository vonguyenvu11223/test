'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './listdoctor.module.scss'
import instance from '@/components/shares/instance/instance';
import Pagination from '@/components/shares/paginate/index';
import ModalDoctor from './modal';
import Search from './search';
import FilterSelect from './filterSelect';

const cx = classNames.bind(styles);

const ListDoctor = () => {
    const [data, setData] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [array, setArray] = useState([]);
    const [detail, setDetail] = useState([]);
    const [pages, setPages] = useState(1)
    const [selectedFilter, setSelectedFilter] = useState('');
    const [search, setSearch] = useState<any[]>([]);

    useEffect(() => {
        const api = async () => {
            const res = await instance.get('/doctors/list?limit=9', {
                params: {
                    page: pages,
                }
            });
            setData(res.data.doctors);
            setSearch(res.data.doctors);
        };
        api();
    }, [pages]);

    // Handle page change
    const handlePageChange = (newpage: any) => {
        setPages(newpage)
    }


    return (
        <div className={cx('wrapper')}>
            {showModal && <ModalDoctor
                setShowModal={setShowModal}
                detail={detail}
            />}
            <div className={styles.container}>
                {/* input */}
                <div className={styles.input}>
                    <Search
                        data={data}
                        setSearch={setSearch}
                    />
                </div>
                <FilterSelect
                    data={data}
                    setSearch={setSearch}
                />
                {/* list */}
                <div className={styles.listInfors}>
                    {search?.map((item, index) => {
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
                                <div className={styles.nameList}>
                                    <p>{item.sex}</p>
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
            <Pagination
                value={pages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ListDoctor;
