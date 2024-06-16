import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

import '../../styles/common/Style.css';
import styles from '../../styles/thinking/Category.module.css';

import HomeIcon from '../common/HomeIcon';
import NextIcon from '../common/NextIcon';

function Category({ categoryData }) {
    const navigate = useNavigate();
    const [click, setClick] = useState(null);

    const clickItem = (index) => {
        setClick(index);
    }

    const homeClick = () => {
        navigate('/');
    }

    const nextClick = () => {
        navigate('/result');
    }

    return (
        <div className={styles['container']}>
            <img src='/images/click/Thinking.png' />
            <div className={styles['iconContainer']}>
                <HomeIcon homeClick={homeClick} />
                <div className={styles['nextIcon']} onClick={nextClick}>
                    <p>결과 확인하기</p>
                    <Icon icon='ooui:arrow-next-ltr' />
                </div>
            </div>
            <div className={styles['buttonDiv']}>
                {
                    categoryData.map((item, index) => (
                        <div className={`${styles['buttonContainer']} ${click === index ? styles['clickedContainer'] : styles['defaultContainer']}`} key={index}>
                            <button className={styles['button']} onClick={() => clickItem(index)}>
                                <p>{item.imoji}</p>
                                <p>{item.text}</p>
                                <pre>{item.content}</pre>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category;