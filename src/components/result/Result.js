import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThinkingContext } from '../thinking/ThinkingProvider';
import { Icon } from '@iconify/react';

import styles from '../../styles/result/Result.module.css';

function Result() {
    const navigate = useNavigate();
    const { grade, category, major } = useContext(ThinkingContext);
    let CategoryImg = '';
    let NumberImg = '';
    let MajorImg = '';

    switch (category) {
        case '취업': NumberImg = 'Number1'; CategoryImg='type1'; break;
        case '진학': NumberImg = 'Number2'; CategoryImg='type2'; break;
        case '학교생활': NumberImg = 'Number3'; CategoryImg='type3'; break;
        case '외부활동': NumberImg = 'Number4'; CategoryImg='type4';  break;
    }

    switch (major) {
        case '소프트웨어과': MajorImg = 'Bule'; break;
        case '웹솔루션과': MajorImg = 'Yellow'; break;
        case '디자인과': MajorImg = 'Red'; break;
    }

    const homeClick = () => {
        navigate('/');
    }

    return (
        <div className={styles['resultContainer']}>
            <img src="/images/result/result.png" style={{ width: '100%', height: '100%', position: 'absolute' }}/>
            <div className={styles['imgContainer']}>
                <div className={styles['imgDiv']}>
                    <img src={`/images/result/${CategoryImg}.png`} />
                </div>
                <div className={styles['numberDiv']}>
                    <div className={`${MajorImg === 'Yellow' ? styles['yellowColor'] : styles['colorImg']}`}>
                        <p>Boll</p>
                        <img src={`/images/result/${MajorImg}.png`} />
                    </div>
                    <div className={styles['numberImg']}>
                        <p>Number</p>
                        <img src={`/images/result/${NumberImg}.png`} />
                    </div>
                </div>
            </div>
            <div className={styles['homeIcon']} onClick={homeClick}>
                <p>홈으로 가기</p>
                <Icon icon='ooui:arrow-next-ltr' />
            </div>
        </div>
    )
}

export default Result;