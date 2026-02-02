
import { useTranslations } from "next-intl"

type Projects = {
  name: string
  img: string
  link: string
  github: string
  description: string
  shortDescription: string
  spotlight: boolean
}


export function getProjects(t: (key: string) => string): Projects[] {
  return  [
    {
      name: 'Motion-co',
      img: '/motion.png',
      link: 'https://motion-co.com/',
      github: 'https://github.com/abner-ferreira/Portfolio-2024',
      description: t("projects_motion_description"),
      shortDescription: t("projects_motion_short"),
      spotlight: true,
    },
  {
    name: 'GreenDrive',
    img: '/greendrive.png',
    link: 'https://green-drive.vercel.app/',
    github: 'https://github.com/abner-ferreira/GreenDrive',
    description: t("projects_greendrive_description"),
    shortDescription: t("projects_greendrive_short"),
    spotlight: true,
  },
  {
    name: 'Easy Bank',
    img: '/easybank.png',
    link: 'https://abner-easy-bank.vercel.app/',
    github: 'https://github.com/abner-ferreira/EasyBank',
    description: t("projects_easybank_description"),
    shortDescription: t("projects_easybank_short"),
    spotlight: true,
  },
  {
    name: 'My old portfolio',
    img: '/old-portfolio.png',
    link: 'https://portfolio-abner-2024.vercel.app/',
    github: 'https://github.com/abner-ferreira/Portfolio-2024',
    description: t("projects_portfolio_description"),
    shortDescription: t("projects_portfolio_short"),
    spotlight: false,
  },
  {
    name: 'Advice Generator',
    img: '/advice.png',
    link: 'https://advice-generator-abner.vercel.app/',
    github: 'https://github.com/abner-ferreira/AdviceGenerator',
    description: t("projects_advice_description"),
    shortDescription: t("projects_advice_short"),
    spotlight: false,
  },
  {
    name: 'Tip Calculator',
    img: '/tip.png',
    link: 'https://tip-calculator-abner.vercel.app/',
    github: 'https://github.com/abner-ferreira/Tip-calculator/tree/main/tip',
    description: t("projects_tipcalculator_description"),
    shortDescription: t("projects_tipcalculator_short"),
    spotlight: false,
  },
  {
    name: 'Cinetag',
    img: '/cinetag.png',
    link: 'https://cinetag-cyan.vercel.app/',
    github: 'https://github.com/abner-ferreira/cinetag',
    description: t("projects_cinetag_description"),
    shortDescription: t("projects_cinetag_short"),
    spotlight: false,
  },
  {
    name: 'Product Page',
    img: '/product.png',
    link: 'https://corinthians-shirt-product-page.vercel.app/',
    github: 'https://github.com/abner-ferreira/product-page',
    description: t("projects_productpage_description"),
    shortDescription: t("projects_productpage_short"),
    spotlight: false,
  },
]
}
