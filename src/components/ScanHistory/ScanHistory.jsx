import { SCAN_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import s from './ScanHistory.module.css'

const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div className={s.container}>
            {data.map((text) => (
                <p className={s.title} key={text}>
                    {text}
                    <QRCodeSVG value={text} size={100} />
                </p>
            ))}
        </div>
    )
}

export default ScanHistory;