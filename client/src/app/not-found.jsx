import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ color: "black" }}>
      <h2>Not Found</h2>
      <p>xin lỗi, trang bạn đang tìm kiếm không có </p>
      <p>Sorry, the page you are looking for does not exist </p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
