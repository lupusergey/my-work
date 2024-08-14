import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './QRCodeScanned.module.css';

import { SCAN_DATA } from '../../constants';

const QRCodeScanner = () => {
    const [scanned, setScanned] = useState(null);

    const scanHandler = (result) => {
        setScanned(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify([...prevData, result[0].rawValue]))
    };

    return (
        <div className={s.container}>
            <Scanner
                onScan={scanHandler}
                styles={{
                    container: { width: 300 }
                }}
                components={{
                    audio: false,
                    finder: false,
                }}
            />
            <p className={s.result}>{scanned}</p>
        </div>
    )
}

export default QRCodeScanner;