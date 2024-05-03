import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post1.jpg" alt="kaka" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Ngành công nghệ thông tin đào tạo những gì ?
        </h1>
        <div className={styles.detail}>
          Sau khi được đào tạo, sinh viên học ngành này sẽ được trang bị kiến
          thức nền tảng và chuyên sâu về lĩnh vực công nghệ thông tin để nâng
          cao tay nghề nhằm phát triển khả năng sửa chữa, xây dựng, cài đặt, bảo
          trì các phần cứng của máy tính cũng như nghiên cứu và phát triển các
          ứng dụng phần mềm. Ngoài ra cũng được trang bị kiến thức về an toàn và
          bảo mật thông tin mạng, một trong những lĩnh vực quan trọng được quan
          tâm hàng đầu trên thế giới hiện nay. Sau khi được đào tạo khối kiến
          thức cơ sở, các sinh viên sẽ được chọn một trong những hướng sau: -
          Ứng dụng công nghệ thông tin vào phân tích định lượng doanh nghiệp. -
          Ứng dụng công nghệ thông tin vào quản lý, giám sát hoạt động doanh
          nghiệp. - Ứng dụng truyền thông xã hội và công nghệ web. - Ứng dụng
          công nghệ thông tin vào tài nguyên, môi trường và địa lý Trong đó có 2
          hướng đào tạo chủ lực là ứng dụng truyền thông xã hội và công nghệ web
          và ứng dụng công nghệ thông tin quản lý, giám sát hoạt động doanh
          nghiệp. Đây là hai lĩnh vực được chú trọng trong việc phát triển xã
          hội hiện nay.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
