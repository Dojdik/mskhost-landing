import { BasePage } from "@/components/common/BasePage";
import { SectionFaq } from "@/components/section/SectionFaq";
import { useState } from "react";

export function VdsPage() {

    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [activeCountry, setActiveCountry] = useState<number | null>(0);

    function declOfNum(number: number, words: [string, string, string]) {
        const cases = [2, 0, 1, 1, 1, 2];
        return words[
            number % 100 > 4 && number % 100 < 20
                ? 2
                : cases[number % 10 < 5 ? number % 10 : 5]
        ];
    };

    const country = [
        {
            name: 'Россия',
            img: 'r.png'
        },
        {
            name: 'Германия',
            img: 'g.png'
        },
        {
            name: 'Финляндия',
            img: 'f.png'
        }
    ];

    const standart = [
        {
            "id": "f432a72e-49d4-423f-942d-ac2ff09fba55",
            "name": "R-1",
            "description": "desc",
            "cost": 499,
            "old_cost": null,
            "location": "ru",
            "preset_id": 18,
            "cpu_number": 1,
            "hdd_mib": 20480,
            "ram_mib": 2048
        },
        {
            "id": "6760947c-1468-42f7-aa6c-de40c942ae80",
            "name": "R-2",
            "description": "desc",
            "cost": 799,
            "old_cost": null,
            "location": "ru",
            "preset_id": 19,
            "cpu_number": 2,
            "hdd_mib": 40960,
            "ram_mib": 4096
        },
        {
            "id": "49192a4d-e436-46de-9cab-32d17c4e8a73",
            "name": "R-3",
            "description": "desc",
            "cost": 1499,
            "old_cost": null,
            "location": "ru",
            "preset_id": 20,
            "cpu_number": 4,
            "hdd_mib": 61440,
            "ram_mib": 8192
        },
        {
            "id": "8cde9b0b-b7e7-4db8-a015-cca921d9554a",
            "name": "R-4",
            "description": "desc",
            "cost": 2499,
            "old_cost": null,
            "location": "ru",
            "preset_id": 31,
            "cpu_number": 8,
            "hdd_mib": 92160,
            "ram_mib": 16384
        },
        {
            "id": "23ff6a04-1e0c-4343-980e-c5cf2ee1e236",
            "name": "R-5",
            "description": "desc",
            "cost": 4999,
            "old_cost": null,
            "location": "ru",
            "preset_id": 32,
            "cpu_number": 16,
            "hdd_mib": 184320,
            "ram_mib": 32768
        }
    ]

    const highCpu = [
        {
            "id": "423a3fa7-5be2-4be8-898a-ab61449457fb",
            "name": "G-1",
            "description": "desc",
            "cost": 1699,
            "old_cost": null,
            "location": "ru",
            "preset_id": 23,
            "cpu_number": 4,
            "hdd_mib": 81920,
            "ram_mib": 4096
        },
        {
            "id": "6273c246-0564-4bc2-8008-8444fa3ae8fc",
            "name": "G-2",
            "description": "desc",
            "cost": 2499,
            "old_cost": null,
            "location": "ru",
            "preset_id": 24,
            "cpu_number": 8,
            "hdd_mib": 163840,
            "ram_mib": 8192
        },
        {
            "id": "86585e3a-b104-4115-a03e-61dc52491e02",
            "name": "G-3",
            "description": "desc",
            "cost": 4999,
            "old_cost": null,
            "location": "ru",
            "preset_id": 25,
            "cpu_number": 16,
            "hdd_mib": 245760,
            "ram_mib": 16384
        }
    ]

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
        <BasePage headerLogo={headerLogo} burgerClassName=" burger-menu-wh">
            <section className="page__preview-banner scroll">
                <div className="preview-banner__container container">
                    <div className="preview-banner__inner">
                        <img src="img/preview-banner/elem-2.webp" alt="img" className="preview-banner__elem scroll" />
                        <div className="preview-banner">
                            <img src="img/preview-banner/bg-2.webp" alt="bg" className="preview-banner__bg" />
                            <h2 className="preview-banner__title main-title">
                                <span className="preview-banner__title-sp">
                                    Веб-хостинг для
                                </span>
                                небольших сайтов
                            </h2>
                            <p className="preview-banner__subtitle">
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
            <section className="page__solutions-choice">
                <img src="img/solutions-choice/bg.webp" alt="bg" className="solutions-choice__img" />
                <div className="solutions-choice__container container">
                    <div className="solutions-choice__inner">
                        <div className="solutions-choice__head scroll">
                            <h2 className="solutions-choice__title main-title">
                                <span className="solutions-choice__title-sp">Standart</span> решения
                            </h2>
                            <p className="solutions-choice__subtitle">
                                Серверы базового уровня по сбалансированной цене на базе AMD Ryzen 9 7950x3D, с общим
                                vCPU и NVMe накопителем. <span className="solutions-choice__subtitle-sp">Идеальный вариант
                                    для веб-сайтов и VPN.</span>
                            </p>
                            <div className="solutions-choice__tabs">
                                <div className="solutions-choice__tabs-country">
                                    {country.map((x, i) => (
                                        <div className={`solutions-choice__tab-country ${activeCountry === i ? "solutions-choice__tab-country--active" : ""}`} key={i} onClick={() => setActiveCountry(i)}>
                                            <img src={`img/solutions-choice/${x.img}`} alt="img" className="solutions-choice__tab-country-img" />
                                            {x.name}
                                        </div>
                                    ))}
                                </div>
                                <div className="solutions-choice__tabs-date">
                                    <div className="solutions-choice__tab-date solutions-choice__tab-date--active">
                                        Месяц
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="solutions-choice__item solutions-choice__item--active">
                        <img src="img/solutions-choice/img-1.png" alt="img" className="solutions-choice__item-bg scroll" />
                        <div className="solutions-choice__item-left scroll">
                            <h3 className="solutions-choice__item-title">
                                На базе процессора
                                <span className="solutions-choice__item-title-sp">AMD Ryzen 9 7950X3D</span>
                            </h3>
                            <p className="solutions-choice__item-desc">
                                Процессор Ryzen 9 7950x3D <br />
                                Частота 4.2 - 5.7 ГГц <br />
                                Базовая DDoS-защита <br />
                                Публичный адрес IPv4 <br />
                                Интернет до 1 Гбит/с <br />
                                Трафик ∞
                            </p>
                        </div>
                        <div className="solutions-choice__item-right">
                            {standart.map((x, i) => (
                                <div className={`solutions-choice__item-tab scroll ${activeIndex === i ? "solutions-choice__item-tab--active" : ""}`} key={i} onClick={() => setActiveIndex(i)}>
                                    <span className="solutions-choice__item-tab-value">
                                        {x.cpu_number} {declOfNum(x.cpu_number, ["ядро", "ядра", "ядер"])}
                                    </span>
                                    <span className="solutions-choice__item-tab-value">{x.ram_mib / 1024} ГБ DDR4</span>
                                    <span className="solutions-choice__item-tab-value">{x.hdd_mib / 1024} ГБ NMVe</span>
                                    <span className="solutions-choice__item-tab-value">1 Гбит/с</span>
                                    <span className="solutions-choice__item-tab-value solutions-choice__item-tab-value-price">{x.cost} ₽ /мес</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__solutions-choice page__solutions-choice-2">
                <img src="img/solutions-choice/bg-2.webp" alt="bg" className="solutions-choice__img" />
                <div className="solutions-choice__container container">
                    <div className="solutions-choice__inner">
                        <div className="solutions-choice__head scroll">
                            <h2 className="solutions-choice__title main-title">
                                <span className="solutions-choice__title-sp">High CPU</span> решения
                            </h2>
                            <p className="solutions-choice__subtitle">
                                Серверы базового уровня по сбалансированной цене на базе AMD Ryzen 9 7950x3D, с общим
                                vCPU и NVMe накопителем. <span className="solutions-choice__subtitle-sp">Идеальный вариант
                                    для веб-сайтов и VPN.</span>
                            </p>
                            <div className="solutions-choice__tabs">
                                <div className="solutions-choice__tabs-country">
                                    {country.map((x, i) => (
                                        <div className={`solutions-choice__tab-country ${activeCountry === i ? "solutions-choice__tab-country--active" : ""}`} key={i} onClick={() => setActiveCountry(i)}>
                                            <img src={`img/solutions-choice/${x.img}`} alt="img" className="solutions-choice__tab-country-img" />
                                            {x.name}
                                        </div>
                                    ))}
                                </div>
                                <div className="solutions-choice__tabs-date">
                                    <div className="solutions-choice__tab-date solutions-choice__tab-date--active">
                                        Месяц
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="solutions-choice__item solutions-choice__item--active">
                        <img src="img/solutions-choice/img-2.png" alt="img" className="solutions-choice__item-bg scroll" />
                        <div className="solutions-choice__item-left scroll">
                            <h3 className="solutions-choice__item-title">
                                На базе процессора
                                <span className="solutions-choice__item-title-sp">AMD Ryzen 9 7950X3D</span>
                            </h3>
                            <p className="solutions-choice__item-desc">
                                Процессор Ryzen 9 7950x3D <br />
                                Частота 4.2 - 5.7 ГГц <br />
                                Базовая DDoS-защита <br />
                                Публичный адрес IPv4 <br />
                                Интернет до 1 Гбит/с <br />
                                Трафик ∞
                            </p>
                        </div>
                        <div className="solutions-choice__item-right">
                            {highCpu.map((x, i) => (
                                <div className={`solutions-choice__item-tab scroll ${activeIndex === i ? "solutions-choice__item-tab--active" : ""}`} key={i} onClick={() => setActiveIndex(i)}>
                                    <span className="solutions-choice__item-tab-value">
                                        {x.cpu_number} {declOfNum(x.cpu_number, ["ядро", "ядра", "ядер"])}
                                    </span>
                                    <span className="solutions-choice__item-tab-value">{x.ram_mib / 1024} ГБ DDR4</span>
                                    <span className="solutions-choice__item-tab-value">{x.hdd_mib / 1024} ГБ NMVe</span>
                                    <span className="solutions-choice__item-tab-value">1 Гбит/с</span>
                                    <span className="solutions-choice__item-tab-value solutions-choice__item-tab-value-price">{x.cost} ₽ /мес</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__info-banner">
                <div className="info-banner__container container">
                    <div className="info-banner__inner">
                        <div className="info-banner__content scroll">
                            <div className="info-banner__name">
                                <span className="info-banner__name-text">Лично проверенные нами</span>
                            </div>
                            <h2 className="info-banner__title main-title">
                                Десятки дистрибутивов систем и приложений
                            </h2>
                            <p className="info-banner__subtitle">
                                Мы предоставляем нашим клиентам выбор из десятков дистрибутивов операционных систем и
                                приложений, которые уже готовы к настройке, просто выбирайте и пользуйтесь!
                            </p>
                            <div className="info-banner__cards">
                                <div className="info-banner__card">
                                    <img src="img/info-banner/1.svg" alt="img" className="info-banner__card-img" />
                                    <dl className="info-banner__card-list">
                                        <dt className="info-banner__card-name">Операционные системы</dt>
                                        <dd className="info-banner__card-desc">
                                            Доступны: Windows Server, Ubuntu, Debian, CentOS, AlmaLinux, RockyLinux,
                                            FreeBSD, AstraLinux
                                        </dd>
                                    </dl>
                                </div>
                                <div className="info-banner__card">
                                    <img src="img/info-banner/2.svg" alt="img" className="info-banner__card-img" />
                                    <dl className="info-banner__card-list">
                                        <dt className="info-banner__card-name">Приложения</dt>
                                        <dd className="info-banner__card-desc">
                                            CMS, панели управление и другие: Bitrix, ISPmanager, Docker, Node.JS,
                                            WireGuard, GitLab, FastPanel, Vest...
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="info-banner__img scroll">
                            <img src="img/info-banner/1.webp" alt="img" className="info-banner__image" />
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
                            <a href="https://my.msk.host" className="statistics__link btn-main">
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
                                            00<span className="statistics__card-name-sp">:</span>37
                                        </dt>
                                        <dd className="statistics__card-desc">От покупки до запуска</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <a href="https://my.msk.host" className="statistics__link statistics__link-mob btn-main">
                            В личный кабинет
                            <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 21 21" fill="none">
                                <path d="M3.5 10.5L17.5 10.5M17.5 10.5L12.25 15.75M17.5 10.5L12.25 5.25" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <SectionFaq></SectionFaq>
        </BasePage>
    )
}