import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/common/Style.css';
import styles from '../../styles/thinking/Grade.module.css';

import HomeIcon from '../common/HomeIcon';
import NextIcon from '../common/NextIcon';

function Grade({ gradeData }) {
    const navigate = useNavigate();
    const [click, setClick] = useState(null);

    const clickItem = (index) => {
        setClick(index);
    }

    const homeClick = () => {
        navigate('/');
    }

    const nextClick = () => {
        navigate('/major');
    }

    return (
        <div className={styles['container']}>
            <img src='/images/click/Grade.png' />
            <div className={styles['iconContainer']}>
                <HomeIcon homeClick={homeClick} />
                <NextIcon nextClick={nextClick} />
            </div>
            <div className={styles['buttonDiv']}>
                {
                    gradeData.map((item, index) => (
                        <div className={`${styles['buttonContainer']} ${click === index ? styles['clickedContainer'] : styles['defaultContainer']}`} key={index}>
                            <button className={styles['button']} onClick={() => clickItem(index)}>
                                <p>{item.text}</p>
                            </button>
                            <p>{item.grade}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Grade;