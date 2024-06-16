import React, { useState } from 'react';

import '../../styles/common/Style.css';
import styles from '../../styles/grade/Grade.module.css';

function Grade({ gradeData }) {
    const [click, setClick] = useState(null);

    const clickItem = (index) => {
        setClick(index);
    }

    return (
        <div className={styles['container']}>
            <img src='/images/click/Grade.png' />
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