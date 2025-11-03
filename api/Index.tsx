export const getInstagramToken = async () => {
    const response = await fetch(`https://wp.thehipposoft.com/wp-json/hippo/v1/token?website=temarqui`, {
        headers: {
            'x-api-key': process.env.WORDPRESS_API_SECRET!,
        },
    });
    const data = await response.json();
    const token = data.token;

    return token;
};

export const getInstagramFeed = async (token: string) => {
    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&limit=6&access_token=${token}`);
    const resJson = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch Instagram feed');
    }

    return resJson.data;
};
