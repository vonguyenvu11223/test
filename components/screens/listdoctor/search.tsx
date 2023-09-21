'use client'
import { useState } from 'react';
import styles from './listdoctor.module.scss'

interface Prop {
    data: any
    setSearch: any
}

function Search({ data, setSearch }: Prop) {
    // handle filter search
    const filter = (event: any) => {
        setSearch(data.filter(filter => filter.full_name.toLowerCase().includes(event.target.value)));
    }

    return (
        <div className='container'>
            <input
                style={{ color: 'black' }}
                className={styles.inputname}
                type="text"
                placeholder="Tìm nhanh bác sĩ"
                onChange={filter}
            />
        </div >
    );
}

export default Search;