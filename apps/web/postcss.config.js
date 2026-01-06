module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }export const Footer = () => (
  <footer className="border-t py-8 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Austrino. All rights reserved.
  </footer>
)