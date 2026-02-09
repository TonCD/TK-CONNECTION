import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import CaseDetailContent from '@/components/sections/case-studies/detail/Content'

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main className="min-h-screen bg-white pt-20">
        <CaseDetailContent slug={slug} />
      </main>
      <Footer />
    </>
  )
}

// Generate static paths for all case studies
export async function generateStaticParams() {
  const slugs = [
    'tulandut',
    'botare',
    'mooekiss',
    'independent-website',
    'livestream-outsourcing'
  ]

  return slugs.map((slug) => ({
    slug,
  }))
}
