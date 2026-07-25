/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1tTQjUPWnbUTACKFlO9FGWBsWbdr1VVFu/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
