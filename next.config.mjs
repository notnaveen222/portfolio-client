/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1vRQgae6LcKgin28Vg5FSFrWLW12Vo0Yq/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
