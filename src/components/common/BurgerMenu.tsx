import { useEffect } from "react"
import { Accordion } from "../ui/accordion/Accordion"
import { NavLink } from "react-router-dom"

export function BurgerMenu({ isBurgerMenuOpen, burgerClassName }) {

    const activeClassName = isBurgerMenuOpen ? " burger-menu--visible" : ""

    useEffect(() => {
        if (isBurgerMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [isBurgerMenuOpen])

    return (
        <div className={"burger-menu" + (burgerClassName ?? "") + activeClassName}>
            <div className="burger-menu__window">
                <ul className="header__list">
                <Accordion>
                    <li className="header__item header__item--active" data-toggable-group="h1">
                        <div className="header__item-name" data-toggable-item="h1" data-toggable-class="header__sub--active">
                        Хостинг-решения
                        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} viewBox="0 0 15 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.90828 11.4648L2.19411 6.7506L3.37245 5.57227L7.49745 9.69727L11.6224 5.57227L12.8008 6.7506L8.08661 11.4648C7.93034 11.621 7.71842 11.7088 7.49745 11.7088C7.27648 11.7088 7.06455 11.621 6.90828 11.4648Z" fill="white" />
                        </svg>
                        </div>
                        <div className="header__sub" data-toggable-item="h1" data-toggable-class="header__item-name--active" data-content-scroll>
                        <ul className="header__list-sub">
                            <li className="header__item-sub">
                            <NavLink to="/vds" className="header__item-link-sub">
                                <img src="img/header/1.svg" alt="img" className="header__item-sub-img" />
                                <div className="header__item-sub-content">
                                <p className="header__item-subname">Облачные серверы</p>
                                <p className="header__item-sub-desc">
                                    Мощные и безотказные серверы, <br />
                                    с сетью до 1 Гбит/с
                                </p>
                                </div>
                            </NavLink>
                            </li>
                            <li className="header__item-sub">
                            <NavLink to="/web-hosting" className="header__item-link-sub">
                                <img src="img/header/2.svg" alt="img" className="header__item-sub-img" />
                                <div className="header__item-sub-content">
                                <p className="header__item-subname">Веб-хостинг</p>
                                <p className="header__item-sub-desc">
                                    Лучшее решение для размещения
                                    сайтов и мини-сервисов
                                </p>
                                </div>
                            </NavLink>
                            </li>
                            <li className="header__item-sub">
                            <a href="#" className="header__item-link-sub">
                                <img src="img/header/3.svg" alt="img" className="header__item-sub-img" />
                                <div className="header__item-sub-content">
                                <p className="header__item-subname">
                                    Домены
                                    <span className="header__item-status">Cкоро</span>
                                </p>
                                <p className="header__item-sub-desc">
                                    Любому бизнесу нужен домен, который будет всех встречать
                                </p>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </li>
                </Accordion>
                <li className="header__item">
                    <a href="#advantages" className="header__item-link">Преимущества</a>
                </li>
                <li className="header__item">
                    <a href="#faq" className="header__item-link">Вопрос-ответ</a>
                </li>
                <li className="header__item">
                    <a href="#reviews" className="header__item-link">Мнение пользователей</a>
                </li>
                </ul>
                <a href="#" className="header__link">
                Личный кабинет
                </a>
            </div>
            </div>

    )
}