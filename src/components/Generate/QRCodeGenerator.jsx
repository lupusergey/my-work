import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import s from './QRCodeGenerator.module.css';

import { GENERATE_DATA } from '../../constants';


const QRCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState(false);

    const onClickHandler = () => {

        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    };

    console.log(result);
    return (
        <div className={s.container}>
            <input
                type='text'
                value={value}
                onChange={onChangeHandler}
                className={s.input}
                placeholder='Введите текст'
            />
            <button
                type='button'
                onClick={onClickHandler}
                className={s.button}
            >
                Сгенерировать QR
            </button>
            {result !== '' && (
                <div className={s.qrWrapper}>
                    <QRCodeSVG value={value} size={200} />
                </div>
            )}
        </div>
    )
}

export default QRCodeGenerator;