export default async function getFeed() {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&limit=6&access_token=${token}`);

    const resJson:any = await res.json();

    const result = resJson.data;

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return result;
  }
