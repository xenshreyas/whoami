import { ImageResponse } from 'next/og'
import { siteConfig } from 'app/data/site'

export function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || siteConfig.defaultTitle

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          background: '#f6f2ea',
          color: '#171411',
          padding: '72px',
          fontFamily: 'Georgia, serif',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '860px',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#746b63',
              fontFamily: 'monospace',
            }}
          >
            Shreyas
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 600,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
