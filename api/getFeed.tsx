export default async function getFeed() {
    const longLivedAccessToken = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    const apiUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${longLivedAccessToken}`;

    const refreshAccessToken = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&limit=6&access_token=${data.access_token}`);
            const resJson:any = await res.json();
            const result = resJson.data;

            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }

            return result;

        } catch (error) {
            throw new Error('Failed to refresh token');
        }
    };

    return refreshAccessToken();
  }
