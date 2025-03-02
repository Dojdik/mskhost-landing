import { useEffect, useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainContent } from "./MainContent";

export function BasePage({ headerClassName, headerLogo, burgerClassName, children }) {

    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false)

    useEffect(() => {
        const section = document.querySelectorAll('.scroll')
    
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('scroll--active');
                }
            });
        }
    
        let currThreshold = 0.3
    
        if (window.innerWidth <= 768) {
            currThreshold = 0.1
        } else {
            currThreshold = 0.3
        }
    
    
    
        let options = {
            threshold: [currThreshold]
        };
        let observer = new IntersectionObserver(onEntry, options);
    
        for (let elm of section) {
            observer.observe(elm);
        }

        return () => observer.disconnect()
      }, [])

    function toggleBurgerMenu() {
        setBurgerMenuOpen(v => !v)
    }

    return (
        <div className="wrapper">
            <Header customClassName={headerClassName} headerLogo={headerLogo} toggleBurgerMenu={toggleBurgerMenu}></Header>
            <MainContent>{children}</MainContent>
            <Footer></Footer>
            <img src="/img/start/bg-img.webp" alt="bg" className="bg-bottom"></img>
            <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} burgerClassName={burgerClassName}></BurgerMenu>
        </div>
    )
}