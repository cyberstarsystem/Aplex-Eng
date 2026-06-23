import SEO from '../seo/SEO'
import { seoMeta } from '../seo/seoConfig'
import PortfolioSection from '../components/Portfolio'

export default function Portfolio() {
  const meta = seoMeta['/portfolio']
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
      />
      <div className="space">
        <PortfolioSection />
      </div>
    </>
  )
}
