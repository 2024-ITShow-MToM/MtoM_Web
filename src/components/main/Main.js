import { Icon } from "@iconify/react";

import '../../styles/common/Style.css';
import styles from '../../styles/main/main.module.css';

function Main() {
    return (
        <div className={styles['container']}>
            <img src="/images/click/Main.png" />
            <div className={styles['buttonContainer']}>
                <button className={styles['button']}>
                    조언 매칭 테스트 시작하기
                    <Icon icon='ooui:arrow-next-ltr' />
                </button>
            </div>
        </div>
    )
}

export default Main;