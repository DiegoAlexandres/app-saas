import styles from '@/components/hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

import boasVindas from '@/assets/boas-vindas.svg'
import ERPS from '@/assets/erps.png'
import grafico from '@/assets/grafico-hero.svg'
import grafico1 from '@/assets/grafico-move-1.svg'
import grafico2 from '@/assets/grafico-move-2.svg'
import grafico2Icon from '@/assets/grafico-move-2-icon.svg'
import grafico3 from '@/assets/grafico-move-3.svg'
import pessoas from '@/assets/pessoas.svg'


export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <Image src={boasVindas} alt='' className={styles.boasVindas}/>
        <h1>Insights que impulsionam o crescimento do seu negócio com o <span>Power BI.</span></h1>

        <p className={styles.text}><span>Tenha acesso ao <strong>Dashboard Financeiro Estratégico</strong> através da plataforma de análise e ciência de dados da OpenBI.</span>
        Dados organizados, integrados e atualizados de formaautomática com o seu sistema, sem necessidade de preenchimento de planilhas manuais.
        </p>

        <p className={styles.description}>Se sua empresa utiliza algum dos sistemas ERPs abaixo, a plataforma é para você!</p>

        <Image className={styles.erp} src={ERPS} width={578} height={68} alt='ERPs de Gestão Empresrial'/>
        <div className={styles.btnHero}>
          <Link href="#" className={styles.btnAssinatura}>
            <span>ASSINAR PLATAFORMA</span>
          </Link>
          <Link href="#" className={styles.btnEspecialista}>
            <span>Conversar com um Especialista</span>
          </Link>
        </div>
        <Image className={styles.pessoas} src={pessoas} alt=''/>
      </div>
      <div className={styles.graficos}>
        <Image className={styles.grafico} src={grafico} alt=''/>
        <div>
          <Image className={styles.grafico1} src={grafico1} alt=''/>
          <Image className={styles.grafico2} src={grafico2} alt=''/>
          <Image className={styles.grafico2Icon} src={grafico2Icon} alt=''/>
          <Image className={styles.grafico3} src={grafico3} alt=''/>
        </div>


      </div>
    </div>
  )
}
