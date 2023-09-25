'use client'
import styles from './listdoctor.module.scss'
import Select from '@/components/shares/select/index'

interface Props {
    data: any
    setSearch: any
}

function FilterSelect({ data, setSearch }: Props) {
    const role = [...new Set(data.map(item => item.role))];
    const sex = [...new Set(data.map(item => item.sex))];

    const handleSelectChangeRole = (event: any) => {
        setSearch(data.filter((f: { role: string | any[] }) => f.role.includes(event.target.value)));
    }

    // handle filter select
    const handleSelectChangeSex = (e: any) => {
        setSearch(data.filter((item: { sex: number }) => item.sex === parseInt(e.target.value)))
    }

    return (
        <div className={styles.inputLists}>
            <Select
                title='Giới tính'
                value={sex}
                handleSelectChangeRole={handleSelectChangeSex}
            />
            <Select
                title='Hàm học / Học vị'
                value={role}
                handleSelectChangeRole={handleSelectChangeRole}
            />
            <Select
                title='Chuyên khoa'
                value={role}
                {...{
                    handleSelectChangeRole
                }}
            />
            <Select
                title='Lịch khám'
                value={role}
                handleSelectChangeRole={handleSelectChangeRole}
            />
        </div>
    );
}

export default FilterSelect;