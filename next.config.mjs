/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "photos.fife.usercontent.google.com"
            }
        ]
    }

};

export default nextConfig;
