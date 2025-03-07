import { BasePage } from "@/components/common/BasePage";
import { SectionFaq } from "@/components/section/SectionFaq";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function IndexPage() {

    const [currentTime, setCurrentTime] = useState(getFormattedTime());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(getFormattedTime());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    function getFormattedTime() {
      const now = new Date();
      const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
      const time = now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
      return `${time}, ${days[now.getDay()]}`;
    }

    const headerLogo = (
        <svg xmlns="http://www.w3.org/2000/svg" width={146} height={40} viewBox="0 0 146 40" fill="none">
            <g clipPath="url(#clip0_1_67)">
                <path d="M27.0296 28.924L17.1285 38.7671C16.3348 39.5562 15.2582 39.9996 14.1357 39.9996C13.0132 39.9996 11.9366 39.5562 11.1428 38.7671L1.24185 28.924C0.848203 28.5335 0.535885 28.0697 0.322787 27.5592C0.109689 27.0486 0 26.5012 0 25.9485C0 25.3957 0.109689 24.8484 0.322787 24.3379C0.535885 23.8272 0.848203 23.3635 1.24185 22.9731L2.31068 21.9105L4.34168 19.8914L11.3597 26.8685C12.1535 27.6575 13.2301 28.1009 14.3525 28.1009C15.4751 28.1009 16.5517 27.6575 17.3454 26.8685L24.1467 20.107L27.0296 22.9755C27.423 23.366 27.7353 23.8297 27.9483 24.3402C28.1613 24.8509 28.271 25.3981 28.271 25.9509C28.271 26.5036 28.1613 27.051 27.9483 27.5615C27.7353 28.0721 27.423 28.5359 27.0296 28.9264V28.924Z" fill="#873BFF" />
                <path d="M27.8068 24.0334C27.6165 24.373 27.3792 24.6846 27.1022 24.959L17.2018 34.8022C16.408 35.5914 15.3315 36.0346 14.2089 36.0346C13.0865 36.0346 12.0099 35.5914 11.2161 34.8022L1.3151 24.959C0.921446 24.5686 0.609126 24.1049 0.396028 23.5943C0.182931 23.0838 0.0732422 22.5364 0.0732422 21.9836C0.0732422 21.4308 0.182931 20.8834 0.396028 20.3729C0.609126 19.8622 0.921446 19.3985 1.3151 19.0081L2.38392 17.9455L4.34243 19.8926L11.3605 26.8698C12.1543 27.6589 13.2308 28.1021 14.3533 28.1021C15.4759 28.1021 16.5524 27.6589 17.3462 26.8698L24.1474 20.1082L26.1784 18.0926L27.1022 19.0111C27.7542 19.6581 28.1759 20.4991 28.303 21.4061C28.4302 22.3133 28.256 23.2367 27.8068 24.0364V24.0334Z" fill="#AF7CFF" />
                <path d="M27.8795 20.0677C27.6887 20.4069 27.4516 20.7182 27.175 20.9927L26.106 22.0547L17.2739 30.8383C16.4802 31.6274 15.4036 32.0707 14.281 32.0707C13.1585 32.0707 12.082 31.6274 11.2882 30.8383L1.38779 20.9927C0.735652 20.3457 0.313968 19.5045 0.186895 18.5973C0.0598218 17.69 0.234317 16.7664 0.683831 15.9668C0.885837 16.3585 1.14868 16.7162 1.46268 17.0264L2.38651 17.9449L4.34502 19.892L11.3631 26.869C12.1568 27.6582 13.2335 28.1014 14.3559 28.1014C15.4785 28.1014 16.555 27.6582 17.3488 26.869L24.1475 20.1075L26.1785 18.092L27.2473 17.0294C27.524 16.7552 27.7608 16.444 27.9514 16.105C28.2671 16.7208 28.4256 17.4043 28.4131 18.0953C28.4006 18.7863 28.2173 19.4637 27.8795 20.0677Z" fill="#D7BEFF" />
                <path d="M27.9489 16.1021C27.7583 16.4411 27.5214 16.7522 27.2449 17.0265L26.1761 18.092L24.145 20.1106L17.3439 26.8691C16.5502 27.6583 15.4736 28.1015 14.3511 28.1015C13.2285 28.1015 12.1519 27.6583 11.3582 26.8691L4.34012 19.892L2.38161 17.9449L1.45778 17.0265C1.06441 16.6359 0.752347 16.1721 0.53943 15.6615C0.326513 15.151 0.216919 14.6038 0.216919 14.051C0.216919 13.4984 0.326513 12.9511 0.53943 12.4405C0.752347 11.93 1.06441 11.4662 1.45778 11.0756L11.3582 1.23239C12.1519 0.443299 13.2285 0 14.3511 0C15.4736 0 16.5502 0.443299 17.3439 1.23239L27.2449 11.0756C27.8964 11.7232 28.3175 12.5644 28.4445 13.4715C28.5716 14.3786 28.3975 15.3021 27.9489 16.1021Z" fill="white" />
                <path d="M55.4319 28.0138L55.4086 18.3969L50.6642 26.3186H48.9831L44.2614 18.6018V28.0125H40.7578V11.9844H43.8439L49.8782 21.9449L55.8201 11.9844H58.8834L58.9296 28.0125L55.4319 28.0138Z" fill="white" />
                <path d="M61.3037 26.8684L62.5019 24.3073C63.6073 25.0166 65.2884 25.4984 66.8083 25.4984C68.4667 25.4984 69.0885 25.063 69.0885 24.3763C69.0885 22.3613 61.6032 24.4221 61.6032 19.4994C61.6032 17.1634 63.7223 15.5146 67.3385 15.5146C69.0425 15.5146 70.9332 15.9041 72.1057 16.5909L70.9075 19.1325C69.8191 18.5209 68.588 18.2051 67.3379 18.217C65.7258 18.217 65.0343 18.7203 65.0343 19.3618C65.0343 21.4685 72.5196 19.4303 72.5196 24.2845C72.5196 26.5748 70.3778 28.2001 66.6699 28.2001C64.573 28.1966 62.4546 27.6243 61.3037 26.8684Z" fill="white" />
                <path d="M80.0504 23.1829L78.3231 24.8774V28.0139H74.7285V11.0244H78.3231V20.6414L83.5744 15.6976H87.8587L82.6991 20.9182L88.3194 28.0162H83.9662L80.0504 23.1829Z" fill="white" />
                <path d="M107.122 11.9863V28.0145H103.391V21.443H96.0663V28.0145H92.335V11.9863H96.0663V18.3059H103.391V11.9863H107.122Z" fill="white" />
                <path d="M109.773 21.8545C109.773 18.145 112.652 15.5117 116.591 15.5117C120.529 15.5117 123.385 18.145 123.385 21.8545C123.385 25.564 120.529 28.1972 116.591 28.1972C112.652 28.1972 109.773 25.564 109.773 21.8545ZM119.746 21.8545C119.746 19.7251 118.387 18.4427 116.591 18.4427C114.795 18.4427 113.412 19.7251 113.412 21.8545C113.412 23.9838 114.794 25.2662 116.591 25.2662C118.387 25.2662 119.744 23.9838 119.744 21.8545H119.746Z" fill="white" />
                <path d="M124.579 26.8684L125.777 24.3073C126.883 25.0166 128.565 25.4984 130.085 25.4984C131.743 25.4984 132.365 25.063 132.365 24.3763C132.365 22.3613 124.88 24.4221 124.88 19.4994C124.88 17.1634 126.999 15.5146 130.614 15.5146C132.318 15.5146 134.209 15.9041 135.382 16.5909L134.184 19.1325C133.095 18.5208 131.864 18.205 130.614 18.217C129.002 18.217 128.31 18.7203 128.31 19.3618C128.31 21.4685 135.796 19.4303 135.796 24.2845C135.796 26.5748 133.654 28.2001 129.946 28.2001C127.85 28.1966 125.731 27.6243 124.579 26.8684Z" fill="white" />
                <path d="M146 27.4179C145.263 27.9445 144.181 28.1964 143.074 28.1964C140.15 28.1964 138.446 26.7074 138.446 23.7769V18.7141H136.534V15.9665H138.446V12.9688H142.04V15.9683H145.126V18.7159H142.04V23.731C142.04 24.7841 142.616 25.3565 143.583 25.3565C144.112 25.3565 144.643 25.1962 145.033 24.8985L146 27.4179Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_1_67">
                    <rect width={146} height={40} fill="white" />
                </clipPath>
            </defs>
        </svg>
    )

    return (
        <BasePage headerClassName={"header-main"} headerLogo={headerLogo}>
            <section className="page__preview">
                <img src="img/bg.webp" alt="bg" className="preview-bg" />
                <div className="preview__container container">
                    <div className="preview__inner">
                        <div className="preview__head scroll">
                            <h1 className="preview__title">
                                Мощные серверы и домены — всё для вашего проекта
                            </h1>
                            <p className="preview__subtitle">
                                Надёжные виртуальные и выделенные серверы с высокой производительностью. Скорость,
                                безопасность и удобное управление в одном решении.
                            </p>
                            <div className="preview__btns">
                                <Link to="https://my.msk.host" className="preview__link preview__link-white">Личный кабинет</Link>
                                <Link to="/vds" className="preview__link preview__link-solutions">Наши решения</Link>
                            </div>
                        </div>
                        <div className="preview__cards">
                            <div className="preview__card preview__card-1 scroll">
                                <img src="img/preview/1.svg" alt="img" className="preview__card-img" />
                                <dl className="preview__card-list">
                                    <dt className="preview__card-name">15,000+</dt>
                                    <dd className="preview__card-desc">Активных серверов</dd>
                                </dl>
                            </div>
                            <div className="preview__card preview-card-bg scroll">
                                <img src="img/preview/bg-card.svg" alt="bg" className="preview__card-bg" />
                                <p className="preview__card-title">Масленичные скидки!</p>
                                <p className="preview__card-subtitle">
                                    Что может быть лучше вкусных блинов на завтрак понедельника? Только 50% скидка на
                                    все сервера и хостинги!
                                    Успевай, пока горячие!
                                </p>
                                <span className="preview__card-time">
                                    Акция действует до 01.03.2025 23:59
                                </span>
                            </div>
                            <div className="preview__card preview__card-3 scroll">
                                <img src="img/preview/2.svg" alt="img" className="preview__card-img" />
                                <dl className="preview__card-list">
                                    <dt className="preview__card-name preview__card-name-time">{currentTime}</dt>
                                    <dd className="preview__card-desc">Текущее время</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__advantages" id="advantages">
                <div className="advantages__container container">
                    <div className="advantages__inner">
                        <div className="advantages__head scroll">
                            <div className="advantages__name">
                                <span className="advantages__name-sp">Решения прямиком из сердца интернета</span>
                            </div>
                            <h2 className="advantages__title main-title">
                                На голову выше и на шаг впереди
                                привычных хостинг-сервисов
                            </h2>
                        </div>
                        <div className="advantages__columns">
                            <div className="advantages__column advantages__column-1">
                                <div className="advantages__card scroll advantages__card-1">
                                    <img src="img/advantages/elem-1.svg" alt="img" className="advantages__card-1-img" />
                                    <img src="img/advantages/elem-2.png" alt="img" className="advantages__card-1-elem advantages__card-1-elem-1" />
                                    <img src="img/advantages/elem-3.png" alt="img" className="advantages__card-1-elem advantages__card-1-elem-2" />
                                    <p className="advantages__card-1-desc">
                                        <span className="advantages__card-1-sp">
                                            Хостинг-сервис,
                                        </span>
                                        которому доверяют
                                        <span className="advantages__card-1-sp">
                                            уже более 5 лет
                                        </span>
                                    </p>
                                </div>
                                <div className="advantages__card scroll advantages__card-2">
                                    <img src="img/advantages/img.png" alt="img" className="advantages__card-2-img" />
                                </div>
                                <div className="advantages__card scroll advantages__card-3">
                                    <p className="advantages__card-3-text">
                                        Широкий выбор
                                        образов систем
                                    </p>
                                    <img src="img/advantages/bg-4.png" alt="img" className="advantages__card-3-img" />
                                </div>
                            </div>
                            <div className="advantages__column advantages__column-2">
                                <img src="img/advantages/center.svg" alt="img" className="advantages__column-center scroll" />
                                <div className="advantages__card scroll advantages__card-4">
                                    <img src="img/advantages/bg-1.png" alt="img" className="advantages__card-4-img" />
                                    <p className="advantages__card-4-name">
                                        <span className="advantages__card-4-name-sp">Высший уровень сервиса</span>
                                        серверных решений
                                    </p>
                                </div>
                                <div className="advantages__column-row">
                                    <div className="advantages__card scroll advantages__card-5-6">
                                        <img src="img/advantages/ic-1.svg" alt="img" className="advantages__card-5-6-img" />
                                        <img src="img/advantages/bg-5.png" alt="bg" className="advantages__card-5-6-bg" />
                                        <img src="img/advantages/img-2.png" alt="img" className="advantages__card-5-6-elem" />
                                        <dl className="advantages__card-5-6-list">
                                            <dt className="advantages__card-5-6-name">
                                                Флагманские конфигурации
                                            </dt>
                                            <dd className="advantages__card-5-6-desc">
                                                Регулярно обновляем компоненты до самых современных моделей
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="advantages__card scroll advantages__card-right advantages__card-5-6">
                                        <img src="img/advantages/ic-2.svg" alt="img" className="advantages__card-5-6-img" />
                                        <img src="img/advantages/bg-6.png" alt="bg" className="advantages__card-5-6-bg" />
                                        <img src="img/advantages/img-3.png" alt="img" className="advantages__card-5-6-elem" />
                                        <dl className="advantages__card-5-6-list">
                                            <dt className="advantages__card-5-6-name">
                                                Собственная <br />
                                                DDoS-защита
                                            </dt>
                                            <dd className="advantages__card-5-6-desc">
                                                Фильтруем все самые популярные виды L3-L7 DDoS-атак
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="advantages__column advantages__column-3">
                                <div className="advantages__card scroll advantages__card-7-8">
                                    <img src="img/advantages/bg-2.png" alt="img" className="advantages__card-7-8-bg" />
                                    <dl className="advantages__card-7-8-list">
                                        <dt className="advantages__card-7-8-name">3.5М+</dt>
                                        <dd className="advantages__card-7-8-desc">Объем хранилища (ГБ)</dd>
                                    </dl>
                                </div>
                                <div className="advantages__card scroll advantages__card-7-8">
                                    <img src="img/advantages/bg-3.png" alt="img" className="advantages__card-7-8-bg" />
                                    <dl className="advantages__card-7-8-list">
                                        <dt className="advantages__card-7-8-name">99.8%</dt>
                                        <dd className="advantages__card-7-8-desc">средний uptime</dd>
                                    </dl>
                                </div>
                                <div className="advantages__card scroll advantages__card-9">
                                    <img src="img/advantages/bg-7.png" alt="bg" className="advantages__card-9-bg" />
                                    <img src="img/advantages/img-4.png" className="advantages__card-9-elem" alt="img" />
                                    <dl className="advantages__card-9-list">
                                        <dt className="advantages__card-9-name">
                                            Сервера в сердце мирового интернета
                                        </dt>
                                        <dd className="advantages__card-9-desc">
                                            Выбираем исключительно самые надежные и мощные дата-центры, расположенные в
                                            центре Европы
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__solutions">
                <img src="img/solutions/bg.webp" alt="bg" className="solutions-bg" />
                <div className="solutions__container container">
                    <div className="solutions__inner">
                        <div className="solutions__head scroll">
                            <span className="solutions__name">Решения прямиком из сердца интернета</span>
                            <h2 className="solutions__title main-title">Хостинг-решения без головной боли</h2>
                            <p className="solutions__subtitle">Мощные серверы, продуманная инфраструктура и тарифы под любые
                                задачи.
                                Без ограничений, сложных настроек и танцев с бубном — бери и работай.</p>
                        </div>
                        <div className="solutions__cards">
                            <a href="#" className="solutions__card scroll">
                                <dl className="solutions__card-list">
                                    <dt className="solutions__card-name">Выделенные серверы</dt>
                                    <dd className="solutions__card-desc">Полная свобода, максимум мощности <br /> без соседей.
                                        Для серьезных проектов.</dd>
                                </dl>
                                <img src="img/solutions/1.svg" alt="img" className="solutions__card-img" />
                            </a>
                            <a href="#" className="solutions__card scroll">
                                <dl className="solutions__card-list">
                                    <dt className="solutions__card-name">Виртуальные серверы</dt>
                                    <dd className="solutions__card-desc">Работают как часы. Настроены, защищены, и всегда в
                                        боевой готовности.</dd>
                                </dl>
                                <img src="img/solutions/2.svg" alt="img" className="solutions__card-img" />
                            </a>
                            <a href="#" className="solutions__card scroll">
                                <dl className="solutions__card-list">
                                    <dt className="solutions__card-name">
                                        Доменные имена
                                        <span className="solutions__card-name-status">Скоро</span>
                                    </dt>
                                    <dd className="solutions__card-desc">Как проект назовешь - так он и поплывет. Быстрая
                                        регистрация и приятные цены.</dd>
                                </dl>
                                <img src="img/solutions/3.svg" alt="img" className="solutions__card-img" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__info-banner marb-160">
                <div className="info-banner__container container">
                    <div className="info-banner__inner">
                        <div className="info-banner__img scroll">
                            <img src="img/info-banner/2.webp" alt="img" className="info-banner__image" />
                        </div>
                        <div className="info-banner__content scroll">
                            <div className="info-banner__name">
                                <span className="info-banner__name-text">Надежное шифрование</span>
                            </div>
                            <h2 className="info-banner__title main-title">
                                Ваша безопасность на высочайшем уровне
                            </h2>
                            <p className="info-banner__subtitle">
                                Мы защищаем ваши данные от угроз и атак. Используем продвинутые методы безопасности,
                                чтобы ваши проекты работали без сбоев.
                            </p>
                            <div className="info-banner__cards">
                                <div className="info-banner__card">
                                    <img src="img/info-banner/3.svg" alt="img" className="info-banner__card-img" />
                                    <dl className="info-banner__card-list">
                                        <dt className="info-banner__card-name">SHA256 шифрование</dt>
                                        <dd className="info-banner__card-desc">
                                            Все данные начиная от паролей, заканчивая cookies шифруются
                                            в формате SHA256
                                        </dd>
                                    </dl>
                                </div>
                                <div className="info-banner__card">
                                    <img src="img/info-banner/4.svg" alt="img" className="info-banner__card-img" />
                                    <dl className="info-banner__card-list">
                                        <dt className="info-banner__card-name">Защита от L3-L7 атак</dt>
                                        <dd className="info-banner__card-desc">
                                            AntiDDoS защита от всех типов популярных атак (L3-L7), с real-time
                                            обновлением данных
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__info-banner marb-144">
                <div className="info-banner__container container">
                    <div className="info-banner__inner">
                        <div className="info-banner__content scroll">
                            <div className="info-banner__name">
                                <span className="info-banner__name-text">Топовые Ryzen EPYC и X9154</span>
                            </div>
                            <h2 className="info-banner__title main-title">
                                Флагманские процессоры с мощнейшей начинкой
                            </h2>
                            <p className="info-banner__subtitle">
                                Наши серверы оснащены современным оборудованием, что обеспечивает мгновенную реакцию,
                                стабильную работу и максимальную отдачу ресурсов.
                            </p>
                            <div className="info-banner__cards">
                                <div className="info-banner__card">
                                    <img src="img/info-banner/5.svg" alt="img" className="info-banner__card-img" />
                                    <dl className="info-banner__card-list">
                                        <dt className="info-banner__card-name">Свежие конфигурации</dt>
                                        <dd className="info-banner__card-desc">
                                            Наша команда всегда предлагает только современные компоненты, доступные на
                                            рынке
                                        </dd>
                                    </dl>
                                </div>
                                <div className="info-banner__card">
                                    <img src="img/info-banner/6.svg" alt="img" className="info-banner__card-img" />
                                    <dl className="info-banner__card-list">
                                        <dt className="info-banner__card-name">1000+ Mbit/s сеть</dt>
                                        <dd className="info-banner__card-desc">
                                            Все стойки подключены по оптике, что позволяет достигать скорости свыше 1000
                                            мбит/с
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="info-banner__img scroll">
                            <img src="img/info-banner/3.webp" alt="img" className="info-banner__image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__control-panel">
                <div className="control-panel__container container">
                    <div className="control-panel__inner">
                        <img src="img/control-panel/elem-3.png" alt="img" className="control-panel-elem control-panel-elem-3" />
                        <div className="control-panel__head">
                            <div className="control-panel__head-left scroll">
                                <h2 className="control-panel__title main-title main-title-white">
                                    Панель управления собственной разработки
                                </h2>
                                <div className="control-panel__head-bottom">
                                    <img src="img/control-panel/1.svg" alt="img" className="control-panel__head-bottom-img" />
                                    <div className="control-panel__head-bottom-desc">
                                        <span className="control-panel__head-bottom-desc-name">React + Typescript +
                                            Node.JS</span>
                                        <p className="control-panel__head-bottom-desc-text">Используем топовые технологии
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="control-panel__head-right scroll">
                                <p className="control-panel__head-subtitle">
                                    Интуитивно понятный интерфейс и полный контроль над хостингом. Управляйте серверами,
                                    доменами и бекапами
                                    в пару кликов. Максимальная автоматизация для удобной и быстрой работы.
                                </p>
                                <a href="#" className="control-panel__head-link btn-main">
                                    Попробовать сейчас
                                </a>
                            </div>
                        </div>
                        <div className="control-panel__img scroll">
                            <img src="img/control-panel/elem-1.png" alt="img" className="control-panel-elem control-panel-elem-1" />
                            <img src="img/control-panel/elem-2.png" alt="img" className="control-panel-elem control-panel-elem-2" />
                            <img src="img/control-panel/img.png" alt="img" className="control-panel__image" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__reviews" id="reviews">
                <div className="reviews__container container">
                    <div className="reviews__inner">
                        <div className="reviews__head scroll">
                            <div className="reviews__name">
                                <span className="reviews__name-sp">
                                    Фидбек от клиентов
                                </span>
                            </div>
                            <div className="reviews__content">
                                <h2 className="reviews__title main-title">
                                    Неподкупное мнение клиентов об опыте работы с нами
                                </h2>
                                <p className="reviews__subtitle">
                                    За много лет работы в сфере хостинг-решений,
                                    мы координально изменили подход к клиентам
                                    и контролю качества оборудования.
                                </p>
                            </div>
                        </div>
                        <div className="reviews__cards">
                            <div className="reviews__card scroll">
                                <p className="reviews__card-comment">
                                    <img src="img/reviews/1.svg" alt="img" className="reviews__card-img" />
                                    &nbsp;Вчера обратился в поддержку, безумно благодарен помощникам. Ответили за пять минут, помогли разобраться с моим маленьким вопросом.
                                </p>
                                <div className="reviews__card-author">
                                    <img src="img/reviews/AVA1.png" alt="img" className="reviews__card-author-ava" />
                                    <div className="reviews__card-author-content">
                                        <span className="reviews__card-author-name">Александр</span>
                                        <span className="reviews__card-author-post">Пользователь MSK.HOST</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__card scroll">
                                <p className="reviews__card-comment">
                                    <img src="img/reviews/1.svg" alt="img" className="reviews__card-img" />
                                    &nbsp;Хостинг ожил в начале сентября с новой командой, даже на момент MVP никаких проблем замечено не было, цены приемлемые
                                </p>
                                <div className="reviews__card-author">
                                    <img src="img/reviews/AVA2.png" alt="img" className="reviews__card-author-ava" />
                                    <div className="reviews__card-author-content">
                                        <span className="reviews__card-author-name">Слава</span>
                                        <span className="reviews__card-author-post">Пользователь MSK.HOST</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__card scroll">
                                <p className="reviews__card-comment">
                                    <img src="img/reviews/1.svg" alt="img" className="reviews__card-img" />
                                    &nbsp;Самый лучший хостинг, что я встречал вообще за все время. Интерфейс удобный, очень легко пользоваться услугами, взаимодействовать с ними. В общем, класс! 
                                </p>
                                <div className="reviews__card-author">
                                    <img src="img/reviews/AVA3.png" alt="img" className="reviews__card-author-ava" />
                                    <div className="reviews__card-author-content">
                                        <span className="reviews__card-author-name">Михаил</span>
                                        <span className="reviews__card-author-post">Пользователь MSK.HOST</span>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews__card scroll">
                                <p className="reviews__card-comment">
                                    <img src="img/reviews/1.svg" alt="img" className="reviews__card-img" />
                                    &nbsp;Ребята реально классные, постоянно что-то улучшают, с каждым днем все лучше и лучше становятся, крутые ребята. В сердечке хостинг
                                </p>
                                <div className="reviews__card-author">
                                    <img src="img/reviews/AVA1.png" alt="img" className="reviews__card-author-ava" />
                                    <div className="reviews__card-author-content">
                                        <span className="reviews__card-author-name">Иоанн</span>
                                        <span className="reviews__card-author-post">Пользователь MSK.HOST</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionFaq></SectionFaq>
            <section className="page__start">
                <img src="img/start/bg-img.png" alt="bg" className="start-bgb" />
                <div className="start__container container">
                    <div className="start__inner">
                        <div className="start__head scroll">
                            <h2 className="start__title main-title">Готовы к запуску? Мы взлетаем!</h2>
                            <p className="start__subtitle">
                                Выберите сервер или зарегистрируйте домен уже сегодня и получите мощное и скоростное
                                решение для вашего проекта.
                            </p>
                            <div className="start__btns scroll">
                                <a href="https://my.msk.host" className="start__link btn-main">Взлетаем!</a>
                                <a href="https://my.msk.host" className="start__link btn-2">Взлетаем!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    )
}