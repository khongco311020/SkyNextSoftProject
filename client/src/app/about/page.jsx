import Image from "next/image";
import styles from "./about.module.css";
import Googlemap from "../contact/Googlemap";
import { IoLocationOutline } from "react-icons/io5";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          {/* <h2 className={styles.subtitle}> Về chúng tôi</h2> */}
          <h1 className={styles.title}>Skynext Soft</h1>
          <p className={styles.desc}>
            Chúng tôi tạo ra những ý tưởng kỹ thuật số lớn hơn, táo bạo hơn,
            dũng cảm hơn và tốt hơn. Chúng tôi tin vào tính linh hoạt và chính
            xác của những ý tưởng hay. Chúng tôi là Nhà cung cấp giải pháp tài
            chính và tư vấn tốt nhất trên thế giới. Dịch vụ phát triển phần mềm
            và web đa dạng.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxImg}>
                <Image src="/quymo.svg" alt="" height={40} width={40} />
              </div>

              <p>Nơi làm việc của đông đảo chuyên gia và kỹ sư</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxImg}>
                <Image src="/Japan.svg" alt="" height={40} width={40} />
              </div>
              <p>Quy mô 200 nhân sự và 100% dự án làm về React</p>
            </div>
            <div className={styles.box}>
              <div className={styles.boxImg}>
                <Image src="/edit-curves.svg" alt="" height={40} width={40} />
              </div>
              <p>
                Nơi tổ chức miễn phí các khoá đào tạo, sự kiện về React với
                chuyên gia trong nước và quốc tế
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.imgContainer}>
          <Image
            src="/about.png"
            alt="About Image"
            fill
            className={styles.img}
          />
        </div> */}
        <div className={styles.wrap}>
          <div className={styles.wrapcontainer}>
            <div className={styles.wrapcol}>
              <div className={styles.wrappad}>
                <Image src="/TamNhin.jpg" alt="" width={334} height={175} />
                <h2 className={styles.wraph2}>Tầm nhìn</h2>
                <p className={styles.wrapp}>
                  Khẳng định vị trí tiên phong với vai trò là công ty đầu tiên
                  và lớn nhất chuyên về React trên thị trường.
                </p>
              </div>
            </div>
            <div className={styles.wrapcol}>
              <div className={styles.wrappad}>
                <Image src="/SuMenh.jpg" alt="" width={334} height={175} />
                <h2 className={styles.wraph2}>Sứ mệnh</h2>
                <div className={styles.wrapp}>
                  <p>Cung cấp chuyên gia về React & React Native</p>
                  <p>Thoả mãn khách hàng với chất lượng cao nhất.</p>
                  <p>Tạo dựng cộng đồng kỹ sư React lớn nhất tại Việt Nam.</p>
                </div>
              </div>
            </div>
            <div className={styles.wrapcol}>
              <div className={styles.wrappad}>
                <Image
                  src="/GiaTriCotLoi.jpg"
                  alt=""
                  width={334}
                  height={175}
                />
                <h2 className={styles.wraph2}>Giá trị cốt lõi</h2>
                <div className={styles.wrapp}>
                  <p>Chuyên biệt về React</p>
                  <p>Khả năng tăng trưởng nhanh</p>
                  <p>Chuyên gia thực sự</p>
                  <p>Phải hồi ngay tức thì</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.achive}>
          <div className={styles.achivecontainer}>
            <div className={styles.achivecol}>
              <Image
                src="/ChungChi.jpg"
                alt=""
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
            <div className={styles.achivecol}>
              <div className={styles.achivecontent}>
                <h2>Giải Thưởng - Chứng Chỉ</h2>
                <p>
                  React Plus hoàn thành mục tiêu kép đạt chuẩn ISO 9001:2015 về
                  quản lý chất lượng và ISO 27001:2013 v ề quản lý an toàn thông
                  tin trong lĩnh vực Sản xuất và gia công phần mềm do Tổ chức
                  Tiêu chuẩn hóa quốc tế (ISO) chứng nhận.
                </p>
                <p>
                  Chúng tôi tự hào là đơn vị đầu tiên tại Việt Nam tập trung
                  chuyên sâu về React & React Native, với khả năng cung cấp dịch
                  vụ làm hài lòng mọi khách hàng theo tiêu chuẩn quốc tế
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.itemmap}>
          <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>Tìm chúng tôi</h2>
            <div className={styles.textAddress}>
              <IoLocationOutline />
              <p>Số 7, Dãy 2, Ngõ 651 Minh Khai, Hai Bà Trưng, Hà Nội</p>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Googlemap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
