import Image from "next/image";
import Link from "next/link";

import styles from '@/components/header.module.css'

import LogoImg from '@/assets/logo.svg'
import UserImg from '@/assets/icon-user.svg'
import LoginImg from '@/assets/icon-login.svg'
import luzVerde from '@/assets/luz-verde.svg'
import luzRoxo from '@/assets/luz-roxa.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image src={LogoImg} alt=""/>
                    </Link>
                    <span className={styles.line}></span>
                    <span className="text-gray-100">Data Science Analytics</span>
                </div>
                <div className={styles.menu}>
                    <nav className={styles.nav}>
                        <Link href="#" className={styles.link}>Planos</Link>
                        <Link href="/personalizados" className={styles.link}>Projetos Personalizado</Link>
                        <Link href="#" className={styles.link}>Sobre Nós</Link>
                    </nav>

                    <span className={styles.line}></span>

                    <div className={styles.login}>

                        <Link href="https://openbi.reportload.com/" target="blanc" className={styles.btnUser}>
                            <Image src={UserImg} alt=""/>
                            <span>ENTRAR</span>
                        </Link>

                        <Link href="https://wa.me/5511972150763?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20a%20plataforma%20da%20OpenBI." target='blanck'  className={styles.btnLogin}>
                            <span>ASSINAR AGORA</span>
                            <Image src={LoginImg} alt=""/>
                        </Link>
                    </div>

                </div>
            </div>
            <span className={styles.linn}></span>
            <Image className={styles.luzVerde} src={luzVerde} alt=''/>
            <Image className={styles.luzRoxo} src={luzRoxo} alt=''/>
        </header>
    )
}