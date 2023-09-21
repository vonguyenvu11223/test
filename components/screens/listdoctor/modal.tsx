'use client'
import Modal from "@/components/shares/Modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
    setShowModal: Dispatch<SetStateAction<boolean>>,
    detail: never[],
}

function ModalDoctor({ setShowModal, detail }: Props) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [hocvi, setHocvi] = useState('');

    useEffect(() => {
        setName(detail.full_name)
        setHocvi(detail.role)
    }, [])

    const title = "Thông tin bác sĩ";

    return (
        <div>
            <Modal
                title={title}
                setShowModal={setShowModal}
                content={[hocvi, name]}
            />
        </div>
    );
}

export default ModalDoctor;