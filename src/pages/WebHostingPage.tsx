import { BasePage } from "@/components/common/BasePage";

export function WebHostingPage() {

    const headerLogo = (
        <svg xmlns="http://www.w3.org/2000/svg" width={146} height={40} viewBox="0 0 146 40" fill="none">
            <g clipPath="url(#clip0_12_54)">
                <path d="M27.0296 28.924L17.1285 38.7671C16.3348 39.5562 15.2582 39.9996 14.1357 39.9996C13.0132 39.9996 11.9366 39.5562 11.1428 38.7671L1.24185 28.924C0.848203 28.5335 0.535885 28.0697 0.322787 27.5592C0.109689 27.0486 0 26.5012 0 25.9485C0 25.3957 0.109689 24.8484 0.322787 24.3379C0.535885 23.8272 0.848203 23.3635 1.24185 22.9731L2.31068 21.9105L4.34168 19.8914L11.3597 26.8685C12.1535 27.6575 13.2301 28.1009 14.3525 28.1009C15.4751 28.1009 16.5517 27.6575 17.3454 26.8685L24.1467 20.107L27.0296 22.9755C27.423 23.366 27.7353 23.8297 27.9483 24.3402C28.1613 24.8509 28.271 25.3981 28.271 25.9509C28.271 26.5036 28.1613 27.051 27.9483 27.5615C27.7353 28.0721 27.423 28.5359 27.0296 28.9264V28.924Z" fill="#873BFF" />
                <path d="M27.8068 24.0334C27.6165 24.373 27.3792 24.6846 27.1022 24.959L17.2018 34.8022C16.408 35.5914 15.3315 36.0346 14.2089 36.0346C13.0865 36.0346 12.0099 35.5914 11.2161 34.8022L1.3151 24.959C0.921446 24.5686 0.609126 24.1049 0.396028 23.5943C0.182931 23.0838 0.0732422 22.5364 0.0732422 21.9836C0.0732422 21.4308 0.182931 20.8834 0.396028 20.3729C0.609126 19.8622 0.921446 19.3985 1.3151 19.0081L2.38392 17.9455L4.34243 19.8926L11.3605 26.8698C12.1543 27.6589 13.2308 28.1021 14.3533 28.1021C15.4759 28.1021 16.5524 27.6589 17.3462 26.8698L24.1474 20.1082L26.1784 18.0926L27.1022 19.0111C27.7542 19.6581 28.1759 20.4991 28.303 21.4061C28.4302 22.3133 28.256 23.2367 27.8068 24.0364V24.0334Z" fill="#AF7CFF" />
                <path d="M27.8795 20.0677C27.6887 20.4069 27.4516 20.7182 27.175 20.9927L26.106 22.0547L17.2739 30.8383C16.4802 31.6274 15.4036 32.0707 14.281 32.0707C13.1585 32.0707 12.082 31.6274 11.2882 30.8383L1.38779 20.9927C0.735652 20.3457 0.313968 19.5045 0.186895 18.5973C0.0598218 17.69 0.234317 16.7664 0.683831 15.9668C0.885837 16.3585 1.14868 16.7162 1.46268 17.0264L2.38651 17.9449L4.34502 19.892L11.3631 26.869C12.1568 27.6582 13.2335 28.1014 14.3559 28.1014C15.4785 28.1014 16.555 27.6582 17.3488 26.869L24.1475 20.1075L26.1785 18.092L27.2473 17.0294C27.524 16.7552 27.7608 16.444 27.9514 16.105C28.2671 16.7208 28.4256 17.4043 28.4131 18.0953C28.4006 18.7863 28.2173 19.4637 27.8795 20.0677Z" fill="#D7BEFF" />
                <path d="M27.9488 16.1021C27.7582 16.4411 27.5213 16.7522 27.2447 17.0265L26.1759 18.092L24.1449 20.1106L17.3438 26.8691C16.55 27.6583 15.4735 28.1015 14.3509 28.1015C13.2284 28.1015 12.1518 27.6583 11.358 26.8691L4.34 19.892L2.38149 17.9449L1.45766 17.0265C1.06429 16.6359 0.752225 16.1721 0.539308 15.6615C0.32639 15.151 0.216797 14.6038 0.216797 14.051C0.216797 13.4984 0.32639 12.9511 0.539308 12.4405C0.752225 11.93 1.06429 11.4662 1.45766 11.0756L11.358 1.23239C12.1518 0.443299 13.2284 0 14.3509 0C15.4735 0 16.55 0.443299 17.3438 1.23239L27.2447 11.0756C27.8962 11.7232 28.3174 12.5644 28.4444 13.4715C28.5715 14.3786 28.3974 15.3021 27.9488 16.1021Z" fill="#333333" />
                <path d="M55.4319 28.0138L55.4086 18.3969L50.6642 26.3186H48.9831L44.2614 18.6018V28.0125H40.7578V11.9844H43.8439L49.8782 21.9449L55.8201 11.9844H58.8834L58.9296 28.0125L55.4319 28.0138Z" fill="#333333" />
                <path d="M61.3037 26.8684L62.5019 24.3073C63.6073 25.0166 65.2884 25.4984 66.8083 25.4984C68.4667 25.4984 69.0885 25.063 69.0885 24.3763C69.0885 22.3613 61.6032 24.4221 61.6032 19.4994C61.6032 17.1634 63.7223 15.5146 67.3385 15.5146C69.0425 15.5146 70.9332 15.9041 72.1057 16.5909L70.9075 19.1325C69.8191 18.5209 68.588 18.2051 67.3379 18.217C65.7258 18.217 65.0343 18.7203 65.0343 19.3618C65.0343 21.4685 72.5196 19.4303 72.5196 24.2845C72.5196 26.5748 70.3778 28.2001 66.6699 28.2001C64.573 28.1966 62.4546 27.6243 61.3037 26.8684Z" fill="#333333" />
                <path d="M80.0504 23.1829L78.3231 24.8774V28.0139H74.7285V11.0244H78.3231V20.6414L83.5744 15.6976H87.8587L82.6991 20.9182L88.3194 28.0162H83.9662L80.0504 23.1829Z" fill="#333333" />
                <path d="M107.122 11.9863V28.0145H103.391V21.443H96.0663V28.0145H92.335V11.9863H96.0663V18.3059H103.391V11.9863H107.122Z" fill="#333333" />
                <path d="M109.773 21.8545C109.773 18.145 112.652 15.5117 116.591 15.5117C120.529 15.5117 123.385 18.145 123.385 21.8545C123.385 25.564 120.529 28.1972 116.591 28.1972C112.652 28.1972 109.773 25.564 109.773 21.8545ZM119.746 21.8545C119.746 19.7251 118.387 18.4427 116.591 18.4427C114.795 18.4427 113.412 19.7251 113.412 21.8545C113.412 23.9838 114.794 25.2662 116.591 25.2662C118.387 25.2662 119.744 23.9838 119.744 21.8545H119.746Z" fill="#333333" />
                <path d="M124.579 26.8684L125.777 24.3073C126.883 25.0166 128.565 25.4984 130.085 25.4984C131.743 25.4984 132.365 25.063 132.365 24.3763C132.365 22.3613 124.88 24.4221 124.88 19.4994C124.88 17.1634 126.999 15.5146 130.614 15.5146C132.318 15.5146 134.209 15.9041 135.382 16.5909L134.184 19.1325C133.095 18.5208 131.864 18.205 130.614 18.217C129.002 18.217 128.31 18.7203 128.31 19.3618C128.31 21.4685 135.796 19.4303 135.796 24.2845C135.796 26.5748 133.654 28.2001 129.946 28.2001C127.85 28.1966 125.731 27.6243 124.579 26.8684Z" fill="#333333" />
                <path d="M146 27.4179C145.263 27.9445 144.181 28.1964 143.074 28.1964C140.15 28.1964 138.446 26.7074 138.446 23.7769V18.7141H136.534V15.9665H138.446V12.9688H142.04V15.9683H145.126V18.7159H142.04V23.731C142.04 24.7841 142.616 25.3565 143.583 25.3565C144.112 25.3565 144.643 25.1962 145.033 24.8985L146 27.4179Z" fill="#333333" />
            </g>
            <defs>
                <clipPath id="clip0_12_54">
                    <rect width={146} height={40} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )

    return (
        <BasePage headerLogo={headerLogo} burgerClassName={" burger-menu-wh"}>
            <section className="page__preview-banner scroll">
                <div className="preview-banner__container container">
                    <div className="preview-banner__inner">
                        <img src="img/preview-banner/elem-1.webp" alt="img" className="preview-banner__elem scroll" />
                        <div className="preview-banner">
                            <img src="img/preview-banner/bg-1.webp" alt="bg" className="preview-banner__bg" />
                            <h2 className="preview-banner__title main-title main-title-white">
                                <span className="preview-banner__title-sp">
                                    Веб-хостинг для
                                </span>
                                небольших сайтов
                            </h2>
                            <p className="preview-banner__subtitle preview-banner__subtitle-white">
                                Облачные серверы - это услуга, когда одном физическом сервере выделяется несколько
                                виртуальных машин, изолированных друг от друга.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__about-host" id="advantages">
                <div className="about-host__container container">
                    <div className="about-host__inner">
                        <h2 style={{ display: 'none' }}>about-host</h2>
                        <div className="about-host__cards">
                            <div className="about-host__card scroll">
                                <img src="img/about-host/bg-1.webp" alt="img" className="about-host__card-bg" />
                                <img src="img/about-host/ICON1.svg" alt="img" className="about-host__card-icon" />
                                <dl className="about-host__card-list">
                                    <dt className="about-host__card-name">Гибкий выбор регулярности оплат серверов</dt>
                                    <dd className="about-host__card-desc">
                                        Наши клиенты могут выбрать срок, на который хотят арендовать сервер. Мы
                                        позволяем выбрать один из нескольких графиков: дневная, месячная, квартальная,
                                        годовая оплата.
                                    </dd>
                                </dl>
                            </div>
                            <div className="about-host__card scroll about-host__card-border">
                                <img src="img/about-host/bg-2.webp" alt="img" className="about-host__card-bg" />
                                <img src="img/about-host/ICON2.svg" alt="img" className="about-host__card-icon" />
                                <dl className="about-host__card-list">
                                    <dt className="about-host__card-name">Флагманские процессоры от AMD Ryzen</dt>
                                    <dd className="about-host__card-desc">
                                        Ориентируемся исключительно на лучших технических компонентах. Предлагаем выбор
                                        как серверных, так и просто лучших процессоров на базе производителя AMD.
                                    </dd>
                                </dl>
                            </div>
                            <div className="about-host__card scroll about-host__card-min">
                                <img src="img/about-host/bg-3.webp" alt="img" className="about-host__card-bg" />
                                <img src="img/about-host/ICON3.svg" alt="img" className="about-host__card-icon" />
                                <dl className="about-host__card-list">
                                    <dt className="about-host__card-name">Техническая поддержка </dt>
                                    <dd className="about-host__card-desc">
                                        Наши специалисты работают круглосуточно, всегда готовы решить любой Ваш вопрос.
                                    </dd>
                                </dl>
                            </div>
                            <div className="about-host__card scroll about-host__card-black">
                                <img src="img/about-host/bg-4.webp" alt="img" className="about-host__card-bg" />
                                <img src="img/about-host/ICON4.svg" alt="img" className="about-host__card-icon" />
                                <dl className="about-host__card-list">
                                    <dt className="about-host__card-name">Обновляемый в Real-Time Анти-DDoS </dt>
                                    <dd className="about-host__card-desc">
                                        Все наши решения сопровождаются базовой защитой от популярных видов DDoS-атак:
                                        уровни от L2 до L7. Регулярно обновляем.
                                    </dd>
                                </dl>
                            </div>
                            <div className="about-host__card scroll about-host__card-min">
                                <img src="img/about-host/bg-5.webp" alt="img" className="about-host__card-bg" />
                                <img src="img/about-host/ICON5.svg" alt="img" className="about-host__card-icon" />
                                <dl className="about-host__card-list">
                                    <dt className="about-host__card-name">Удобное управление</dt>
                                    <dd className="about-host__card-desc">
                                        Панель управления серверами собственной разработки: интуитивная, удобная,
                                        быстрая.
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__tariffs">
                <img src="img/tariffs/bg.webp" alt="bg" className="tariffs-bg" />
                <div className="tariffs__container container">
                    <div className="tariffs__inner">
                        <div className="tariffs__head scroll">
                            <h2 className="tariffs__title main-title">Тарифные планы</h2>
                            <p className="tariffs__subtitle">
                                Все что нужно для быстрого запуска сайта без танцев с бубном.
                                Выбрали тариф - оплатили - запустились в течение 5 минут.
                            </p>
                        </div>
                        <div className="tariffs__cards">
                            <div className="tariffs__card scroll">
                                <div className="tariffs__card-main">
                                    <div className="tariffs__card-head">
                                        <p className="tariffs__card-name">Site-16</p>
                                        <p className="tariffs__card-desc">Идеальное решение для размещения лендинга или
                                            сайта-визитки</p>
                                    </div>
                                    <ul className="tariffs__card-list">
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 базы данных</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь БД</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь FTP</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 веб-домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">16 ГБ NVMe</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 почтовых домена</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tariffs__card-bottom">
                                    <div className="tariffs__card-price">
                                        <span className="tariffs__card-price-value">179.90 ₽</span> /мес
                                    </div>
                                    <a href="#" className="tariffs__card-btn btn-grad">
                                        Заказать
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} viewBox="0 0 20 19" fill="none">
                                            <path d="M3.66634 9.5L16.333 9.5M16.333 9.5L11.583 14.25M16.333 9.5L11.583 4.75" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="tariffs__card scroll">
                                <div className="tariffs__card-main">
                                    <div className="tariffs__card-head">
                                        <p className="tariffs__card-name">Site-32</p>
                                        <p className="tariffs__card-desc">Идеальное решение для размещения лендинга или
                                            сайта-визитки</p>
                                    </div>
                                    <ul className="tariffs__card-list">
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 базы данных</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь БД</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь FTP</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 веб-домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">16 ГБ NVMe</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 почтовых домена</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tariffs__card-bottom">
                                    <div className="tariffs__card-price">
                                        <span className="tariffs__card-price-value">179.90 ₽</span> /мес
                                    </div>
                                    <a href="#" className="tariffs__card-btn btn-grad">
                                        Заказать
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} viewBox="0 0 20 19" fill="none">
                                            <path d="M3.66634 9.5L16.333 9.5M16.333 9.5L11.583 14.25M16.333 9.5L11.583 4.75" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="tariffs__card scroll">
                                <div className="tariffs__card-main">
                                    <div className="tariffs__card-head">
                                        <p className="tariffs__card-name">Site-64</p>
                                        <p className="tariffs__card-desc">Идеальное решение для размещения лендинга или
                                            сайта-визитки</p>
                                    </div>
                                    <ul className="tariffs__card-list">
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 базы данных</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь БД</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь FTP</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 веб-домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">16 ГБ NVMe</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 почтовых домена</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tariffs__card-bottom">
                                    <div className="tariffs__card-price">
                                        <span className="tariffs__card-price-value">179.90 ₽</span> /мес
                                    </div>
                                    <a href="#" className="tariffs__card-btn btn-grad">
                                        Заказать
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} viewBox="0 0 20 19" fill="none">
                                            <path d="M3.66634 9.5L16.333 9.5M16.333 9.5L11.583 14.25M16.333 9.5L11.583 4.75" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="tariffs__card scroll">
                                <div className="tariffs__card-main">
                                    <div className="tariffs__card-head">
                                        <p className="tariffs__card-name">Site-128</p>
                                        <p className="tariffs__card-desc">Идеальное решение для размещения лендинга или
                                            сайта-визитки</p>
                                    </div>
                                    <ul className="tariffs__card-list">
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 базы данных</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь БД</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь FTP</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 веб-домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">16 ГБ NVMe</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 почтовых домена</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tariffs__card-bottom">
                                    <div className="tariffs__card-price">
                                        <span className="tariffs__card-price-value">179.90 ₽</span> /мес
                                    </div>
                                    <a href="#" className="tariffs__card-btn btn-grad">
                                        Заказать
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} viewBox="0 0 20 19" fill="none">
                                            <path d="M3.66634 9.5L16.333 9.5M16.333 9.5L11.583 14.25M16.333 9.5L11.583 4.75" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="tariffs__card scroll">
                                <div className="tariffs__card-main">
                                    <div className="tariffs__card-head">
                                        <p className="tariffs__card-name">Site-128</p>
                                        <p className="tariffs__card-desc">Идеальное решение для размещения лендинга или
                                            сайта-визитки</p>
                                    </div>
                                    <ul className="tariffs__card-list">
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 базы данных</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь БД</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь FTP</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 веб-домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">16 ГБ NVMe</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 почтовых домена</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tariffs__card-bottom">
                                    <div className="tariffs__card-price">
                                        <span className="tariffs__card-price-value">179.90 ₽</span> /мес
                                    </div>
                                    <a href="#" className="tariffs__card-btn btn-grad">
                                        Заказать
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} viewBox="0 0 20 19" fill="none">
                                            <path d="M3.66634 9.5L16.333 9.5M16.333 9.5L11.583 14.25M16.333 9.5L11.583 4.75" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="tariffs__card scroll tariffs__card-limitless">
                                <div className="tariffs__card-main">
                                    <div className="tariffs__card-head">
                                        <p className="tariffs__card-name">
                                            <span className="tariffs__card-name-limitless">Limitless</span>
                                            <span className="tariffs__card-name-limitless-sp"> ∞</span>
                                        </p>
                                        <p className="tariffs__card-desc">Идеальное решение для размещения лендинга или
                                            сайта-визитки</p>
                                    </div>
                                    <ul className="tariffs__card-list">
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 базы данных</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь БД</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">1 пользователь FTP</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 веб-домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 домена</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">16 ГБ NVMe</span>
                                        </li>
                                        <li className="tariffs__card-item">
                                            <img src="img/tariffs/gg_check.svg" alt="check" className="tariffs__card-item-img" />
                                            <span className="tariffs__card-item-text">2 почтовых домена</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tariffs__card-bottom">
                                    <div className="tariffs__card-price">
                                        <span className="tariffs__card-price-value">179.90 ₽</span> /мес
                                    </div>
                                    <a href="#" className="tariffs__card-btn btn-grad">
                                        Заказать
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={19} viewBox="0 0 20 19" fill="none">
                                            <path d="M3.66634 9.5L16.333 9.5M16.333 9.5L11.583 14.25M16.333 9.5L11.583 4.75" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__host-solution">
                <div className="host-solution__container container">
                    <div className="host-solution__inner">
                        <div className="host-solution__head scroll">
                            <h2 className="host-solution__title main-title">
                                Небольшое хостинговое решение, решающее серьезные задачи
                            </h2>
                            <p className="host-solution__subtitle">
                                Веб-хостинг, преимущественно маломощное хостинговое решение, используемое для небольших
                                веб-сайтов и ботов, но это лишь верхушка всех его возможностей.
                            </p>
                        </div>
                        <div className="host-solution__cards">
                            <div className="host-solution__card scroll">
                                <img src="img/host-solution/1.svg" alt="img" className="host-solution__card-icon" />
                                <dl className="host-solution__card-list">
                                    <dt className="host-solution__card-name">Лендинг</dt>
                                    <dd className="host-solution__card-desc">Продающие одностраничники для всех типов
                                        бизнеса</dd>
                                </dl>
                            </div>
                            <div className="host-solution__card scroll">
                                <img src="img/host-solution/2.svg" alt="img" className="host-solution__card-icon" />
                                <dl className="host-solution__card-list">
                                    <dt className="host-solution__card-name">Корпоративный сайт</dt>
                                    <dd className="host-solution__card-desc">
                                        Сайты компаний для знакомства клиента с услугами и товарами
                                    </dd>
                                </dl>
                            </div>
                            <div className="host-solution__card scroll">
                                <img src="img/host-solution/3.svg" alt="img" className="host-solution__card-icon" />
                                <dl className="host-solution__card-list">
                                    <dt className="host-solution__card-name">Телеграм боты</dt>
                                    <dd className="host-solution__card-desc">
                                        Боты для автоматизации бизнеса или рутинных задач
                                    </dd>
                                </dl>
                            </div>
                            <div className="host-solution__card scroll">
                                <img src="img/host-solution/4.svg" alt="img" className="host-solution__card-icon" />
                                <dl className="host-solution__card-list">
                                    <dt className="host-solution__card-name">Тестирование проектов</dt>
                                    <dd className="host-solution__card-desc">
                                        Проверка программного кода или демонстрации клиентам
                                    </dd>
                                </dl>
                            </div>
                            <div className="host-solution__card scroll">
                                <img src="img/host-solution/4.svg" alt="img" className="host-solution__card-icon" />
                                <dl className="host-solution__card-list">
                                    <dt className="host-solution__card-name">Тестирование проектов</dt>
                                    <dd className="host-solution__card-desc">
                                        Проверка программного кода или демонстрации клиентам
                                    </dd>
                                </dl>
                            </div>
                            <div className="host-solution__card scroll">
                                <img src="img/host-solution/4.svg" alt="img" className="host-solution__card-icon" />
                                <dl className="host-solution__card-list">
                                    <dt className="host-solution__card-name">Тестирование проектов</dt>
                                    <dd className="host-solution__card-desc">
                                        Проверка программного кода или демонстрации клиентам
                                    </dd>
                                </dl>
                            </div>
                            <div className="host-solution__card scroll">
                                <img src="img/host-solution/4.svg" alt="img" className="host-solution__card-icon" />
                                <dl className="host-solution__card-list">
                                    <dt className="host-solution__card-name">Тестирование проектов</dt>
                                    <dd className="host-solution__card-desc">
                                        Проверка программного кода или демонстрации клиентам
                                    </dd>
                                </dl>
                            </div>
                            <div className="host-solution__card scroll">
                                <img src="img/host-solution/4.svg" alt="img" className="host-solution__card-icon" />
                                <dl className="host-solution__card-list">
                                    <dt className="host-solution__card-name">Тестирование проектов</dt>
                                    <dd className="host-solution__card-desc">
                                        Проверка программного кода или демонстрации клиентам
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__statistics">
                <div className="statistics__container container">
                    <div className="statistics__inner">
                        <div className="statistics__content">
                            <div className="statistics__name scroll">
                                <span className="statistics__name-text">
                                    Цифры в реальном времени
                                </span>
                            </div>
                            <h2 className="statistics__title scroll main-title">
                                Статистика по облачным серверам за 2025 год
                            </h2>
                            <p className="statistics__subtitle scroll">
                                Мы предоставляем нашим клиентам выбор из десятков дистрибутивов операционных систем и
                                приложений, которые уже готовы к настройке, просто выбирайте и пользуйтесь!
                            </p>
                            <a href="#" className="statistics__link btn-main">
                                В личный кабинет
                                <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 21 21" fill="none">
                                    <path d="M3.5 10.5L17.5 10.5M17.5 10.5L12.25 15.75M17.5 10.5L12.25 5.25" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                        <div className="statistics__rows">
                            <div className="statistics__row">
                                <div className="statistics__card scroll">
                                    <dl className="statistics__card-list">
                                        <dt className="statistics__card-name">
                                            9,000<span className="statistics__card-name-sp">+</span>
                                        </dt>
                                        <dd className="statistics__card-desc">Арендованых серверов</dd>
                                    </dl>
                                </div>
                                <div className="statistics__card scroll statistics__card-grad">
                                    <dl className="statistics__card-list">
                                        <dt className="statistics__card-name">
                                            4,000+
                                        </dt>
                                        <dd className="statistics__card-desc">Новых клиентов на VDS</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="statistics__row statistics__row-start">
                                <div className="statistics__card scroll">
                                    <dl className="statistics__card-list">
                                        <dt className="statistics__card-name">
                                            <span className="statistics__card-name-sp">&gt;</span>99.8<span className="statistics__card-name-sp">%</span>
                                        </dt>
                                        <dd className="statistics__card-desc">Средний uptime серверов</dd>
                                    </dl>
                                </div>
                                <div className="statistics__card scroll">
                                    <dl className="statistics__card-list">
                                        <dt className="statistics__card-name">
                                            621<span className="statistics__card-name-sp">%</span>
                                        </dt>
                                        <dd className="statistics__card-desc">Прирост за I кв 2025 года</dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="statistics__row">
                                <div className="statistics__card scroll">
                                    <dl className="statistics__card-list">
                                        <dt className="statistics__card-name">
                                            35<span className="statistics__card-name-sp">+</span>
                                        </dt>
                                        <dd className="statistics__card-desc">Загрузочных образов</dd>
                                    </dl>
                                </div>
                                <div className="statistics__card scroll">
                                    <dl className="statistics__card-list">
                                        <dt className="statistics__card-name">
                                            03<span className="statistics__card-name-sp">:</span>57
                                        </dt>
                                        <dd className="statistics__card-desc">От покупки до запуска</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="statistics__link statistics__link-mob btn-main">
                            В личный кабинет
                            <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 21 21" fill="none">
                                <path d="M3.5 10.5L17.5 10.5M17.5 10.5L12.25 15.75M17.5 10.5L12.25 5.25" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section className="page__faq" id="faq">
                <div className="faq__container container">
                    <div className="faq__inner">
                        <div className="faq__head scroll">
                            <div className="faq__name">
                                <span className="faq__name-sp">
                                    F.A.Q.
                                </span>
                            </div>
                            <h2 className="faq__title main-title">Ответы на частозадаваемые вопросы</h2>
                            <p className="faq__subtitle">
                                Исчерпывающие ответы на большинство интересующих Вас вопросов.
                                Не нашли ответ на Ваш вопрос? - Свяжитесь с нами!
                            </p>
                        </div>
                        <div className="faq__accordions">
                            <div className="faq__accordion scroll">
                                <div className="faq__accordion-head">
                                    <p className="faq__accordion-name">
                                        Есть ли оверселл на тарифах виртуальных серверов?
                                    </p>
                                    <svg className="faq__accordion-arrow" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0534 17.5432L3.51078 10.0006L5.39611 8.11523L11.9961 14.7152L18.5961 8.11523L20.4814 10.0006L12.9388 17.5432C12.6887 17.7932 12.3497 17.9336 11.9961 17.9336C11.6426 17.9336 11.3035 17.7932 11.0534 17.5432Z" fill="#333333" />
                                    </svg>
                                </div>
                                <div className="faq__accordion-contetnt">
                                    <div className="faq__accordion-body">
                                        <p className="faq__accordion-desc">
                                            На всех тарифах линейки Dedicated предоставляются гарантированно выделенные
                                            ресурсы, на линейке Shared гарантированно предоставляется RAM и объем
                                            накопителя, ядра — общие.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="faq__accordion scroll">
                                <div className="faq__accordion-head">
                                    <p className="faq__accordion-name">
                                        Есть ли оверселл на тарифах виртуальных серверов?
                                    </p>
                                    <svg className="faq__accordion-arrow" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0534 17.5432L3.51078 10.0006L5.39611 8.11523L11.9961 14.7152L18.5961 8.11523L20.4814 10.0006L12.9388 17.5432C12.6887 17.7932 12.3497 17.9336 11.9961 17.9336C11.6426 17.9336 11.3035 17.7932 11.0534 17.5432Z" fill="#333333" />
                                    </svg>
                                </div>
                                <div className="faq__accordion-contetnt">
                                    <div className="faq__accordion-body">
                                        <p className="faq__accordion-desc">
                                            На всех тарифах линейки Dedicated предоставляются гарантированно выделенные
                                            ресурсы, на линейке Shared гарантированно предоставляется RAM и объем
                                            накопителя, ядра — общие.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="faq__accordion scroll">
                                <div className="faq__accordion-head">
                                    <p className="faq__accordion-name">
                                        Есть ли оверселл на тарифах виртуальных серверов?
                                    </p>
                                    <svg className="faq__accordion-arrow" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0534 17.5432L3.51078 10.0006L5.39611 8.11523L11.9961 14.7152L18.5961 8.11523L20.4814 10.0006L12.9388 17.5432C12.6887 17.7932 12.3497 17.9336 11.9961 17.9336C11.6426 17.9336 11.3035 17.7932 11.0534 17.5432Z" fill="#333333" />
                                    </svg>
                                </div>
                                <div className="faq__accordion-contetnt">
                                    <div className="faq__accordion-body">
                                        <p className="faq__accordion-desc">
                                            На всех тарифах линейки Dedicated предоставляются гарантированно выделенные
                                            ресурсы, на линейке Shared гарантированно предоставляется RAM и объем
                                            накопителя, ядра — общие.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="faq__accordion scroll">
                                <div className="faq__accordion-head">
                                    <p className="faq__accordion-name">
                                        Есть ли оверселл на тарифах виртуальных серверов?
                                    </p>
                                    <svg className="faq__accordion-arrow" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0534 17.5432L3.51078 10.0006L5.39611 8.11523L11.9961 14.7152L18.5961 8.11523L20.4814 10.0006L12.9388 17.5432C12.6887 17.7932 12.3497 17.9336 11.9961 17.9336C11.6426 17.9336 11.3035 17.7932 11.0534 17.5432Z" fill="#333333" />
                                    </svg>
                                </div>
                                <div className="faq__accordion-contetnt">
                                    <div className="faq__accordion-body">
                                        <p className="faq__accordion-desc">
                                            На всех тарифах линейки Dedicated предоставляются гарантированно выделенные
                                            ресурсы, на линейке Shared гарантированно предоставляется RAM и объем
                                            накопителя, ядра — общие.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="faq__accordion scroll">
                                <div className="faq__accordion-head">
                                    <p className="faq__accordion-name">
                                        Есть ли оверселл на тарифах виртуальных серверов?
                                    </p>
                                    <svg className="faq__accordion-arrow" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0534 17.5432L3.51078 10.0006L5.39611 8.11523L11.9961 14.7152L18.5961 8.11523L20.4814 10.0006L12.9388 17.5432C12.6887 17.7932 12.3497 17.9336 11.9961 17.9336C11.6426 17.9336 11.3035 17.7932 11.0534 17.5432Z" fill="#333333" />
                                    </svg>
                                </div>
                                <div className="faq__accordion-contetnt">
                                    <div className="faq__accordion-body">
                                        <p className="faq__accordion-desc">
                                            На всех тарифах линейки Dedicated предоставляются гарантированно выделенные
                                            ресурсы, на линейке Shared гарантированно предоставляется RAM и объем
                                            накопителя, ядра — общие.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="faq__accordion scroll">
                                <div className="faq__accordion-head">
                                    <p className="faq__accordion-name">
                                        Есть ли оверселл на тарифах виртуальных серверов?
                                    </p>
                                    <svg className="faq__accordion-arrow" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0534 17.5432L3.51078 10.0006L5.39611 8.11523L11.9961 14.7152L18.5961 8.11523L20.4814 10.0006L12.9388 17.5432C12.6887 17.7932 12.3497 17.9336 11.9961 17.9336C11.6426 17.9336 11.3035 17.7932 11.0534 17.5432Z" fill="#333333" />
                                    </svg>
                                </div>
                                <div className="faq__accordion-contetnt">
                                    <div className="faq__accordion-body">
                                        <p className="faq__accordion-desc">
                                            На всех тарифах линейки Dedicated предоставляются гарантированно выделенные
                                            ресурсы, на линейке Shared гарантированно предоставляется RAM и объем
                                            накопителя, ядра — общие.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="faq__banner scroll">
                            <img src="img/faq/bg.webp" alt="img" className="faq__banner-bg" />
                            <h2 className="faq__banner-title main-title main-title-white">
                                Ответим на Ваши вопросы
                                в любое время суток
                            </h2>
                            <p className="faq__banner-subtitle">Наша поддержка работает круглосуточно</p>
                            <a href="#" className="faq__banner-link">
                                Написать нам
                                <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none">
                                    <path d="M3.16634 9.5L15.833 9.5M15.833 9.5L11.083 14.25M15.833 9.5L11.083 4.75" stroke="#873BFF" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    )
}