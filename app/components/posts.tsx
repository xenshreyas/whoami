import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/featured/utils'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div className="space-y-9">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <article key={post.slug} className="space-y-2">
            <p className="text-sm text-[var(--subtle)]">
              {formatDate(post.metadata.publishedAt)}
            </p>
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              <Link className="link-subtle" href={`/blog/${post.slug}`}>
                {post.metadata.title}
              </Link>
            </h2>
            <p className="leading-[1.85] text-[var(--muted)]">
              {post.metadata.summary}
            </p>
          </article>
        ))}
    </div>
  )
}
