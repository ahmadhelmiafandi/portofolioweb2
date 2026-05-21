export async function translateIdToEn(text: string): Promise<string> {
  if (!text || typeof text !== 'string') return ''
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=id&tl=en&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    })
    if (!res.ok) {
      console.error(`Google Translate API returned status: ${res.status}`)
      return text
    }
    const data = await res.json()
    if (data && data[0]) {
      return data[0].map((segment: any) => segment[0] || '').join('')
    }
    return text
  } catch (error) {
    console.error('Translation failed:', error)
    return text
  }
}
