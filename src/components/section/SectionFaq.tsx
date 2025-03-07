import { Accordion } from "../ui/accordion/Accordion"

export function SectionFaq() {

    const accordions = [
        <Accordion key={1}>
            <div className="faq__accordion scroll" data-toggable-group="a1">
                <div className="faq__accordion-head" data-toggable-class="accordion__item-head--show" data-toggable-item="a1">
                    <p className="faq__accordion-name">
                        Есть ли оверселл на тарифах виртуальных серверов?
                    </p>
                    <svg className="faq__accordion-arrow" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.0534 17.5432L3.51078 10.0006L5.39611 8.11523L11.9961 14.7152L18.5961 8.11523L20.4814 10.0006L12.9388 17.5432C12.6887 17.7932 12.3497 17.9336 11.9961 17.9336C11.6426 17.9336 11.3035 17.7932 11.0534 17.5432Z" fill="#333333" />
                    </svg>
                </div>
                <div className="faq__accordion-contetnt" data-content-scroll data-toggable-class="accordion__item-content--show" data-toggable-item="a1">
                    <div className="faq__accordion-body">
                        <p className="faq__accordion-desc">
                            На всех тарифах линейки Dedicated предоставляются гарантированно выделенные
                            ресурсы, на линейке Shared гарантированно предоставляется RAM и объем
                            накопителя, ядра — общие.
                        </p>
                    </div>
                </div>
            </div>
        </Accordion>
    ]

    return (
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
                        {accordions}
                    </div>
                    <div className="faq__banner scroll">
                        <img src="img/faq/bg.webp" alt="img" className="faq__banner-bg" />
                        <h2 className="faq__banner-title main-title main-title-white">
                            Ответим на Ваши вопросы
                            в любое время суток
                        </h2>
                        <p className="faq__banner-subtitle">Наша поддержка работает круглосуточно</p>
                        <a href="https://t.me/mskhost_sup" className="faq__banner-link">
                            Написать нам
                            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} viewBox="0 0 19 19" fill="none">
                                <path d="M3.16634 9.5L15.833 9.5M15.833 9.5L11.083 14.25M15.833 9.5L11.083 4.75" stroke="#873BFF" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}