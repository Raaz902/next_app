export const generateMetadata = async ({ params }) => {
    const apiUrl = `https://nodeadmin.examinares.com/course/History-Optional-Online`;

    let metaData = {
        title: "Course Page - Your Website",
        description: "Explore our courses and learn with us.",
        openGraph: {
            title: "Course Page - Your Website",
            description: "Find detailed course information.",
            url: "https://next-q43pzxwvd-mohammad-raazs-projects.vercel.app/contact",
            type: "website",
            images: [
                {
                    url: "https://next-q43pzxwvd-mohammad-raazs-projects.vercel.app/images/default-course.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Course Image",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Course Page - Your Website",
            description: "Find detailed course information.",
            images: ["https://next-q43pzxwvd-mohammad-raazs-projects.vercel.app/images/default-course.jpg"],
        },
    };

    try {
        const response = await fetch(apiUrl, { cache: "no-store" });
        let data = await response.json();
        data = data.data[0];
        console.log(data);

        if (data) {
            metaData.title = data.MetaTitle || metaData.title;
            metaData.description = data.MetaDescription || metaData.description;
            metaData.openGraph.title = data.MetaTitle || metaData.openGraph.title;
            metaData.openGraph.description = data.MetaDescription || metaData.openGraph.description;
            metaData.openGraph.url = data.Url || metaData.openGraph.url;
            metaData.openGraph.images = [
                {
                    url: data.Image || "https://next-q43pzxwvd-mohammad-raazs-projects.vercel.app/images/default-course.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Course Image",
                },
            ];
            metaData.twitter.title = data.MetaTitle || metaData.twitter.title;
            metaData.twitter.description = data.MetaDescription || metaData.twitter.description;
            metaData.twitter.images = [
                data.Image || "https://next-q43pzxwvd-mohammad-raazs-projects.vercel.app/images/default-course.jpg",
            ];
        }
    } catch (error) {
        console.error("Error fetching metadata:", error);
    }

    return metaData;
};

const Page = () => {
    return <div>Course Page</div>;
};

export default Page;
