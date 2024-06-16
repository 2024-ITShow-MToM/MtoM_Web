import { Icon } from "@iconify/react";

import '../../styles/common/Style.css';
import styles from '../../styles/main/main.module.css';
import { useNavigate } from "react-router-dom";

function Main() {
    const nagivate = useNavigate();

    const next = () => {
        nagivate('/grade');
    }

    return (
        <div className={styles['container']}>
            <img src="/images/click/Main.png" />
            <div className={styles['buttonContainer']}>
                <button className={styles['button']} onClick={next}>
                    조언 매칭 테스트 시작하기
                    <Icon icon='ooui:arrow-next-ltr' />
                </button>
            </div>
        </div>
    )
}

export default Main;