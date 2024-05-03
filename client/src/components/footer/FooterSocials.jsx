import Link from "next/link";
const FooterSocials = () => {
  return (
    <div>
      <p style={{ fontWeight: "400" }}>Thông tin</p>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/contact">Contact</Link>
      </p>
      <p>
        <Link href="/blog">Blog</Link>
      </p>
    </div>
  );
};

export default FooterSocials;
