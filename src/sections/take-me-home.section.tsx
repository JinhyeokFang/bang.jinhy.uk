import Image from 'next/image'
import styles from '../styles/sections.module.css'
import profileImage from '../../public/screenshots/cafe4me/profile.png'
import significanceImage1 from '../../public/screenshots/take-me-home/1.png'
import significanceImage2 from '../../public/screenshots/take-me-home/2.png'
import significanceImage3 from '../../public/screenshots/take-me-home/3.png'
import significanceImage4 from '../../public/screenshots/take-me-home/4.png'

export const TakeMeHomeSection = () => {
    return (
        <>
            <div className={styles.wrapper}>
              <header className={styles.header}>
                <div className={styles.imageSection}>
                    <Image className={styles.image} src={profileImage} alt="" width="500" height={500 / 16 * 9} />
                </div>
                <div className={styles.infoSection}>
                    <div>
                        <h1 className={styles.name}>take-me-home</h1>
                        <p className={styles.description}>TDD로 DDD를 점진적으로 적용한 Nest.js 기반 API 서버</p>
                        <p className={styles.link}>
                          Github: <a href="https://github.com/JinhyeokFang/take-me-home">https://github.com/JinhyeokFang/take-me-home</a>
                        </p>
                    </div>
                    <hr className='lighter' />
                    <div>
                      <p>
                        <span className={styles.tag}>NestJS</span>
                        <span className={styles.tag}>Jest</span>
                        <span className={styles.tag}>TypeORM</span>
                        <span className={styles.tag}>MySQL</span>
                      </p>
                    </div>
                </div>
              </header>
              <article className={styles.article}>
                <div>
                    <h2 className={styles.subtitle}>주요 기능</h2>
                    <p className={styles.description}>Shelter 모두 불러오기</p>
                    <p className={styles.description}>Shelter에서 Pet 전체 확인</p>
                    <p className={styles.description}>Owner가 입양한 모든 Pet을 확인</p>
                    <p className={styles.description}>Shelter로 들어온 입양 신청 내역을 확인</p>
                    <p className={styles.description}>Shelter가 PetInformation을 입력해 Pet을 등록</p>
                    <p className={styles.description}>PetID를 입력받아 Shelter에서 Pet을 삭제</p>
                    <p className={styles.description}>Owner가 Shelter와 Pet을 입력, 입양을 신청</p>
                    <p className={styles.description}>입양 신청 내역 ID를 입력, 승인또는 거절</p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>프로젝트 의의</h2>
                    <ol className={styles.significanceList}>
                      <li className={styles.significance}>
                        <h3 className={styles.description}>1. TDD를 처음으로 웹 서버개발에 적용 + Jest와 Supertest로 자동화된 테스트를 구현</h3>
                        <div>
                          <Image className={styles.image} src={significanceImage1} alt="" width="600" height="400" />
                          <p>
                            &nbsp;
                          </p>
                        </div>
                      </li>
                      <li className={styles.significance}>
                        <h3 className={styles.description}>2. 테스트와 리팩토링을 활용, DDD를 점진적으로 도입</h3>
                        <div>
                          <p>
                            &nbsp;
                          </p>
                          <Image className={styles.image} src={significanceImage2} alt="" width="600" height="400" />
                        </div>
                      </li>
                      <li className={styles.significance}>
                        <h3 className={styles.description}>3. TypeOrm으로 데이터베이스와 연동, 마이그레이션까지 추가</h3>
                        <div>
                          <Image className={styles.image} src={significanceImage3} alt="" width="600" height="400" />
                          <p>
                            &nbsp;
                          </p>
                        </div>
                      </li>
                      <li className={styles.significance}>
                        <h3 className={styles.description}>4. Event로 비즈니스 로직의 결합도를 낮춤</h3>
                        <div>
                          <p>
                            &nbsp;
                          </p>
                          <Image className={styles.image} src={significanceImage4} alt="" width="600" height="400" />
                        </div>
                      </li>
                    </ol>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>배운점 및 느낀점</h2>
                    <p className={styles.description}>
                      &nbsp;
                    </p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>개선이 필요한 점</h2>
                    <p className={styles.description}>더 많은 경우의 수를 커버하는 테스트 케이스</p>
                    <p className={styles.description}>예외처리 미흡한 부분 개선</p>
                    <p className={styles.description}>Transaction 지원</p>
                    <p className={styles.description}>CD를 적용하여 자동 무중단 배포 지원</p>
                </div>
                <hr className='lighter' />
                <div>
                    <h2 className={styles.subtitle}>기타</h2>
                </div>
              </article>
            </div>
            <hr />
        </>
    )
}