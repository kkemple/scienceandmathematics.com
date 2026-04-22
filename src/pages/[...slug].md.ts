import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

export async function getStaticPaths() {
  const posts = await getCollection('posts')
  return posts
    .filter((post) => !post.id.startsWith('_'))
    .map((post) => ({
      params: { slug: post.id },
      props: { post },
    }))
}

export const GET: APIRoute = ({ props }) => {
  const { post } = props
  const body = `# ${post.data.title}\n\n${post.body}`
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
