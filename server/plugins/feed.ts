import type { NitroCtx } from "nuxt-module-feed";
import type { Feed } from "feed";

export default defineNitroPlugin((nitro) => {
    nitro.hooks.hook("feed:generate", async ({ feed }: NitroCtx) => {
        await createFeed(feed);
    });
});

async function createFeed(feed: Feed) {
    feed.options = {
        id: "https://bd103.github.io",
        title: "BD103's Blog",
        updated: undefined,
        // generator: undefined,
        language: "en-US",
        // ttl: undefined,

        // feed: undefined,
        feedLinks: {
            rss2: "https://bd103.github.io/feed.xml",
            atom: "https://bd103.github.io/atom.xml",
        },
        // hub: undefined,
        // docs: undefined,

        author: {
           name: "BD103",
           link: "https://bd103.github.io", 
        },
        link: "https://bd103.github.io",
        description: "BD103's technical blog about programming!",
        // image: undefined,
        // favicon: undefined,
        copyright: "2023 BD103",
    };

    // TODO: Automate this!
    feed.addItem({
        title: "Intercepting Allocations with the Global Allocator",
        id: "2023-06-27-global-allocators",
        link: "https://bd103.github.io/blog/2023-06-27-global-allocators",
        date: new Date("2023-06-27"),
    });
}
