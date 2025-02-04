export const generateMetadata = async ({ params }) => {
    const apiUrl = `https://nodeadmin.examinares.com/course/History-Optional-Online`;
    let metaData = {
        title: "Course Page - Your Website",
        description: "Explore our courses and learn with us.",
        openGraph: {
            title: "Course Page - Your Website",
            description: "Find detailed course information.",
            url: "https://yourwebsite.com/course",
            type: "website",
            images: [
                {
                    url: "/images/default-course.jpg",
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
            images: ["/images/default-course.jpg"],
        },
    };

    try {
        const response = await fetch(apiUrl, { cache: "no-store" });
        let data = await response.json();
        data = data.data[0]
        console.log(data);

        if (data) {
            metaData.title = data.MetaTitle || metaData.title;
            // metaData.description = data.metaDescription || metaData.description;
            // metaData.openGraph.title = data.ogTitle || metaData.openGraph.title;
            // metaData.openGraph.description = data.ogDescription || metaData.openGraph.description;
            // metaData.openGraph.url = data.url || metaData.openGraph.url;
            // metaData.openGraph.images = data.ogImages || metaData.openGraph.images;
            // metaData.twitter.title = data.twitterTitle || metaData.twitter.title;
            // metaData.twitter.description = data.twitterDescription || metaData.twitter.description;
            // metaData.twitter.images = data.twitterImages || metaData.twitter.images;
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
