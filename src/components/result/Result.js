import styles from '../../styles/result/Result.module.css';

function Result() {
    return (
        <div className={styles['resultContainer']}>
            <img src="/images/result/result.png" style={{ width: '100%' }}/>
        </div>
    )
}

export default Result;