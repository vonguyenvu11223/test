'use clent'
import styles from '@/components/screens/listdoctor/listdoctor.module.scss'

interface Props {
    handleSelectChangeRole: any;
    value: any[];
    title: string
}

function Select({ value, handleSelectChangeRole, title }: Props) {

    return (
        <select onChange={handleSelectChangeRole} className={styles.inputList} >
            <option value="" selected>{title}</option>
            {
                value.map((item, index) => {
                    return (
                        <option value={item} key={index}>{item}</option>
                    )
                })
            }
        </select >
    );
}

export default Select;