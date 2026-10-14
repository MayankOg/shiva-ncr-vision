import { useEffect } from 'react'
import { site } from '../content/site'
function setMeta(sel: string, attr: string, val: string) { const el = document.head.querySelector(sel); if (el) el.setAttribute(attr, val) }
export function useSeo(title: string, description: string, path = '') {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', site.url + path)
    setMeta('link[rel="canonical"]', 'href', site.url + path)
  }, [title, description, path])
}
