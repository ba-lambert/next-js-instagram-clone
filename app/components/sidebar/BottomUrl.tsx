"use client";

const urls = [
    {
        name: "About",
        url: "https://about.instagram.com/",
    },
    {
        name: "Help",
        url: "https://help.instagram.com/",
    },
    {
        name: "Press",
        url: "https://about.instagram.com/blog",
    },
    {
        name: "API",
        url: "https://developers.facebook.com/docs/instagram",
    },
    {
        name: "Jobs",
        url: "https://www.instagram.com/about/jobs/",
    },
    {
        name: "Privacy",
        url: "https://www.instagram.com/about/legal/privacy/",
    },
    {
        name: "Terms",
        url: "https://www.instagram.com/about/legal/terms/",
    },
    {
        name: "Language",
        url: "https://www.instagram.com/language/",
    }
]
export default function BottomUrl() {
    return (
        <div className="w-full h-fit flex flex-col gap-4 px-10 mt-16">
            <div className="w-full h-fit flex flex-row flex-wrap gap-x-4">
                {urls.map((url) => (
                    <a href={url.url} key={url.name} className="text-xs text-gray-400 hover:underline">{url.name}</a>
                ))}
            </div>
            <p className="text-xs text-gray-400">© 2024 Instagram from Meta</p>
        </div>
    );
}