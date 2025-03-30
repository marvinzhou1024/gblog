import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: '码神',
    url: 'http://brand.aimashen.com',
    title: '码神跨境与增长',
    description: '我是码神，擅长GoogleSEO与跨境增长，助力多家外贸独立站实现从0到1增长，本身也从事B端跨境业务，技术流，实战派，组建了一支跨境实战家团队，成员来自于海内外一线实战家，致力于为跨境er和企业提供完整的战略、建站、SEO、营销增长实战服务，微信：zy467016899 | 外贸业务合伙|有实操、有结果的跨境实战体系课助力询盘自由|高质量交流社群',
    shortDescription: '',
}

export const NavigationLinks: NavigationLink[] = [
    { name: '文章', url: '/posts' },
    { name: '分类', url: '/categories' },
    { name: '服务', url: '/friends' },
    { name: '体系课', url: 'https://www.mashen-occlub-course.com/' },
    { name: '跨境导航站', url: 'https://www.aimashen.com/' },
    // { name: 'Timeline', url: '/timeline' },
    { name: '关于我', url: '/posts/about-me' },
]

export const FooterLinks = [
    {
        section: '服务',
        links: [
            { name: '码神服务', url: '/friends' },
            { name: '实操体系课', url: 'https://www.mashen-occlub-course.com/' },
            { name: '跨境导航站', url: 'https://www.aimashen.com/' },
            { name: '码神开源知识库', url: 'https://mcneo0lysndy.feishu.cn/wiki/V6DrwjILxitBihklEMZcjgzgnpe' },
            { name: '知识星球', url: 'https://t.zsxq.com/hgX7q' },
        ],
    },{
        section: '其它',
        links: [
            { name: 'RSS', url: '/rss.xml' },
            { name: 'Site Map', url: '/sitemap-index.xml' },
            { name: '关于我', url: '/posts/about-me' },

        ],
    },
]

export const Settings = {
    GoogleAnalytics: {
        enable: false,
        id: 'G-TK55Q4L3ZDSF',
    },

    // See https://github.com/umami-software/umami
    UmamiAnalytics: {
        enable: true,
        dataWebsiteID: 'bf66663658a-9418-4f39-a6a1-5a0cedb6e429',
    },

    Comment: {
        // Please note that the environment value here is `string` type on Cloudflare Pages
        // If you want to disable the comment system, please delete the `COMMENT_ENABLE` environment variable not just set it to `false`.
        enable: !!(import.meta.env.COMMENT_ENABLE) || !!process.env.COMMENT_ENABLE,

        // please visit https://giscus.app/ to learn how to configure it.
        // You can also check out this article: https://liruifengv.com/posts/add-comments-to-astro/.
        giscus: {
            repo: 'marvinzhou1024/gblog',
            repoId: 'MDEwOlJlcG9zaXRvcnkxMjcyODI0NzA',
            category: 'Announcements',
            categoryId: 'DIC_kwDOB5YtJs4CfZnX',
            darkThem: 'noborder_gray',
            lightThem: 'light',
        },
    },

    Assets: {
        // If you don't want to upload the build assert(image/js/css/etc...) to anywhere, just set this to false
        // Please note that the environment value here is `string` type on Cloudflare Pages
        // If you want to disable the comment system, please delete the `S3_ENABLE` environment variable not just set it to `false`.
        uploadAssetsToS3: !!(import.meta.env.S3_ENABLE) || !!process.env.S3_ENABLE,
        config: {
            // see https://github.com/syhily/astro-uploader to get how to configure the uploader,
            // The following configuration will upload the compiled `assets` folder to S3 or R2.
            // You can set a separate domain for it so that you can access all resources using a CDN domain name.
            //
            // For example: https://images.godruoyi.com/gblog/assets/brand-logo.webp
            //
            // Note that you may also need to modify `build.assetsPrefix` in `astro.config.mjs` if you want to
            // automatically replace all images/js/css with a CDN link.
            paths: ['assets'],
            endpoint: (process.env.S3_ENDPOINT ?? import.meta.env.S3_ENDPOINT) as string,
            bucket: (process.env.S3_BUCKET ?? import.meta.env.S3_BUCKET) as string,
            accessKey: (process.env.S3_ACCESS_KEY ?? import.meta.env.S3_ACCESS_KEY) as string,
            secretAccessKey: (process.env.S3_SECRET_ACCESS_KEY ?? import.meta.env.S3_SECRET_ACCESS_KEY) as string,
            root: 'gblog',
        },
    },
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'inLanguage': 'en-US',
        '@id': SITE.url,
        'url': SITE.url,
        'name': SITE.title,
        'description': SITE.description,
        'isPartOf': {
            '@type': 'WebSite',
            'url': SITE.url,
            'name': SITE.title,
            'description': SITE.description,
        },
    },
}
