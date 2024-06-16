import { Icon } from '@iconify/react';
import styles from '../../styles/common/NextIcon.module.css';

function NextIcon({ nextClick }) {
    return (
        <div className={styles['nextIcon']} onClick={nextClick}>
            <p>다음</p>
            <Icon icon='ooui:arrow-next-ltr' />
        </div>
    )
}

export default NextIcon;