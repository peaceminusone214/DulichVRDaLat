import "./ServiceStyles.css";
import React, { useState } from 'react';
import LoginForm from "./Login/LoginForm";

function OurService() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const toggleLoginForm = () => {
      setShowLoginForm(!showLoginForm);
    };
    return (
        <div className="service-container">
            <div className="service-section">
                <h1 className="service-heading">
                    Chào mừng đến với trang dịch vụ du lịch Đà Lạt của chúng tôi! Chúng tôi tự hào mang đến cho bạn những trải nghiệm du lịch không giới hạn, khám phá những điểm đến độc đáo và thú vị nhất trong thành phố Đà Lạt thơ mộng.
                </h1>
            </div>
            <div className="service-section">
                <h2>Chuyến đi theo yêu cầu</h2>
                <p>
                    Với dịch vụ chuyến đi theo yêu cầu của chúng tôi, bạn có thể tạo ra chuyến đi hoàn hảo dành riêng cho bạn và gia đình, bạn bè hoặc nhóm. Chúng tôi sẽ tư vấn và thiết kế chuyến đi theo ý tưởng của bạn, từ việc lên lịch trình, chọn lựa các điểm tham quan, đến chỗ ăn ngon và chỗ nghỉ tiện nghi.
                </p>
            </div>
            <div className="service-section">
                <h2>Tour tham quan</h2>
                <p>
                    Với các tour tham quan đa dạng và phong phú, bạn có thể khám phá toàn bộ vẻ đẹp của Đà Lạt trong một chuyến đi du lịch. Từ những khu vườn hoa lãng mạn, các điểm tham quan lịch sử độc đáo đến những khu rừng núi hùng vĩ, chúng tôi sẽ đưa bạn đi khám phá mọi góc cạnh của thành phố hoa.
                </p>
            </div>
            <div className="service-section">
                <h2>Hướng dẫn viên du lịch chuyên nghiệp</h2>
                <p>
                    Đội ngũ hướng dẫn viên du lịch của chúng tôi không chỉ có kiến thức sâu rộng về văn hóa và lịch sử Đà Lạt mà còn luôn sẵn lòng chia sẻ những câu chuyện thú vị và mẹo du lịch hữu ích. Với sự chuyên nghiệp và tận tâm, họ sẽ là bạn đồng hành đáng tin cậy trên mọi hành trình.
                </p>
            </div>
            <div className="service-section">
                <h2>Dịch vụ chăm sóc khách hàng</h2>
                <p>
                    Chúng tôi cam kết mang đến dịch vụ chăm sóc khách hàng tốt nhất, luôn lắng nghe và đáp ứng mọi nhu cầu của quý khách hàng. Hãy liên hệ với chúng tôi ngay hôm nay để có một chuyến đi đáng nhớ và trọn vẹn nhất tại Đà Lạt!
                </p>
            </div>
            <div className="service-section">
                <h3 className="service-summary">
                    Hãy để chúng tôi hướng dẫn bạn khám phá Đà Lạt - nơi hội tụ giữa vẻ đẹp thiên nhiên tuyệt vời và nền văn hóa đậm đà bản sắc.
                </h3>
            </div>
            <button onClick={toggleLoginForm}>Đăng Ký ngay!</button>
            {showLoginForm && <LoginForm onClose={toggleLoginForm} />}
        </div>
    );
}

export default OurService;