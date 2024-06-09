import "./FooterStyles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>về chúng tôi</h4>
            <ul>
              <li>
                <a href="/">trang chủ</a>
              </li>
              <li>
                <a href="/About">giới thiệu</a>
              </li>
              <li>
                <a href="/Service">các gói du lịch</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>hỗ trợ khách hàng</h4>
            <ul>
              <li>
                <a>+84 9327*****</a>
              </li>
              <li>
                <a>1 Đường Phù Đổng Thiên Vương, Phường 8, Thành phố Đà Lạt, Lâm Đồng</a>
              </li>
              <li>
                <a>daihocdalat@dlu.edu.vn</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
