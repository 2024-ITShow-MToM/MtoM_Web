import { Icon } from '@iconify/react';
import styles from '../../styles/common/HomeIcon.module.css';

function HomeIcon({ homeClick }) {
    return (
        <div className={styles['homeIcon']} onClick={homeClick}>
            <Icon icon='mingcute:home-1-fill' color='var(--strong-color)' />
            <p>HOME</p>
        </div>
    )
}

export default HomeIcon;