import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { siteConfig, siteUrl } from 'app/data/site'

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((entry) => entry.slug === params.slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image
    ? image
    : `${siteUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${siteUrl}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getBlogPosts().find((entry) => entry.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="space-y-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${siteUrl}${post.metadata.image}`
              : `${siteUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${siteUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: siteConfig.name,
            },
          }),
        }}
      />

      <header className="space-y-3">
        <p className="text-sm text-[var(--subtle)]">
          {formatDate(post.metadata.publishedAt)}
        </p>
        <h1 className="title font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.metadata.title}
        </h1>
        <p className="max-w-2xl leading-[1.8] text-[var(--muted)]">
          {post.metadata.summary}
        </p>
      </header>

      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
