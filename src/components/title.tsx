import styles from '../styles/title.module.css'

export const Title = () => {
    return (
        <>
            <header className={styles.wrapper}>
                <h1 className={styles.title}>Jin-hyeok Bang</h1>
                <hr className={styles.bottomLine}/>
            </header>
        </>
    )
}
