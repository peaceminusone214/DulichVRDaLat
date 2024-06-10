import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Các địa điểm nổi tiếng</h1>
      <p>Tương tác với hình ảnh để xem ở chế độ 360°</p>
      <DestinationData
        className="first-des"
        heading="Quảng trường Lâm Viên"
        text="Nằm ngay trung tâm thành phố quảng trường Lâm Viên được mệnh danh là
            trái tim của Đà Lạt, một biểu tượng đã trở nên quá đỗi quen thuộc
            với nhiều du khách. Có thể nói, nếu bạn chưa check in quảng trường
            Lâm Viên đồng nghĩa với việc bạn chưa đến Đà Lạt. Nằm bên cạnh Hồ
            Xuân Hương quảng trường Lâm Viên rộng lớn, với thiết kế những bậc
            thang và 2 biểu tượng lớn là hoa atiso và hoa dã quỳ. Với không khí
            thoáng đãng du khách thường đến đây tham quan và dạo mát, kết hợp
            chụp ảnh check in. Ngoài ra, tại đây còn có nhiều gánh hàng rong bán
            những món ăn vặt đặc trưng như bánh tráng nướng, trứng gà nướng, bắp
            nướng, sữa đậu nành nóng,... thích hợp với khí trời se lạnh. Đây là
            một địa điểm check in Đà Lạt mà bạn đừng nên bỏ lỡ nhé!"npm i webfontloader
        address="Địa chỉ: Đ. Trần Quốc Toản, Phường 1, Thành phố Đà Lạt, Lâm Đồng."    
        img1="https://momento360.com/e/u/735898c7808d4b10a1787f834394fae1?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Đồi chè Cầu Đất"
        text="Một vùng đất được bao phủ bởi màu xanh tươi mới của đồi chè rộng lớn, bạn sẽ thoả thích chụp ảnh với những góc cực ấn tượng nơi đồi chè. Giới trẻ tìm đến đây để có cơ hội “săn mây” tại Cầu Đất. Bạn hãy thử một lần đến Cầu Đất để có cơ hội săn những biển mây khổng lồ trôi dưới ngay chân bạn. Bạn sẽ như lạc vào chốn tiên cảnh, không gian thoáng đãng, cái se se lạnh và khung cảnh quá đỗi lãng mạn. Địa chỉ: Thôn Cầu Đất, xã Xuân Trường (Cách trung tâm thành phố Đà Lạt tầm 20km)."
        address="Địa chỉ: Thôn Cầu Đất, xã Xuân Trường (Cách trung tâm thành phố Đà Lạt tầm 20km)."
        img1="https://momento360.com/e/u/26b8020bfeaa41dd9db67ecc5904a7e0?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des"
        heading="Hồ Tuyền Lâm"
        text="Một không gian êm đềm, bờ mặt hồ êm ả không một gợn sóng, khung cảnh xung quanh hữu tình thơ mộng. Hồ Tuyền Lâm là một địa điểm thu hút bạn trẻ đến ngắm cảnh và tham gia hoạt động chèo sup khi du lịch Đà Lạt. Đặc biệt, với phong cảnh nên thơ trữ tình, đến đây bạn sẽ có một bộ ảnh lung linh mang về."
        address="Địa chỉ: Phường 4, thành phố Đà Lạt, tỉnh Lâm Đồng (Gần khu vực dãy núi Phượng Hoàng, thuộc khu vực phường 4; cách trung tâm thành phố Đà Lạt khoảng 7 km về hướng Nam)."
        img1="https://momento360.com/e/u/6fd5bb95f9dc475b9cded327e08b18d0?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Hồ Xuân Hương"
        text="Nằm ngay giữa trung tâm thành phố Đà Lạt với một khung cảnh lãng mạn, thơ mộng của dòng nước êm đềm, những vườn hoa cẩm tú cầu khoe sắc hay bên cạnh rừng thông bạt ngàn. Đến đây bạn sẽ tận hưởng được không gian xanh thoáng đãng, dưới tiết trời mát mẻ.

Ngoài việc chụp ảnh check in tại bờ hồ, bạn có thể tham gia những hoạt động như đạp vịt, đi dạo quanh hồ ngắm thành phố nhộn nhịp, sôi động."
        address="Địa chỉ: Trung tâm thành phố Đà Lạt."
        img1="https://momento360.com/e/u/1c65acc3457547ad87d0121310f2b822?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des"
        heading="Chợ Đà Lạt"
        text="Chợ Đà Lạt với kiến trúc 3 tầng cổ kính, với góc chụp xịn sò “Hồng Kông bên hông chợ Đà Lạt” là nơi được nhiều bạn trẻ săn lùng và “xếp hàng” để có những bức ảnh thật ngầu tại địa điểm này.

        Chợ hoạt động chủ yếu ban ngày, với rất nhiều mặt hàng khác nhau đặc biệt là quần áo ấm và đặc sản Đà Lạt. Ban đêm chợ họp chủ yếu ngoài đường, đây là nơi thu hút rất đông du khách vào mỗi tối.
        
        Chợ đêm Đà Lạt hay còn được gọi với cái tên “Chợ Âm Phủ” là một địa điểm check in Đà Lạt mà bất cứ du khách nào cũng muốn đến và thưởng thức những món ngon đặc trưng Đà Lạt, cùng hoà vào dòng người đông đúc tìm mua những vật lưu niệm và đặc sản để làm quà."
        address="Địa chỉ: đường Nguyễn Thị Minh Khai, P. 1, Tp. Đà Lạt."
        img1="https://momento360.com/e/u/9cd47e4263124df0a9abd96f0c67afa2?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Đồi Thiên Phúc Đức"
        text="Là một địa điểm nổi tiếng với cảnh quan thiên nhiên xinh đẹp, không khí thoáng đãng, lãng mạn. Đây cũng là một điểm “săn mây” đẹp nhất ở Đà Lạt, tại đồi Thiên Phúc Đức, bạn sẽ có cơ hội nhìn ngắm thành phố từ trên cao, với view rừng thông trải dài đến vô tận, nhiều thời điểm bạn có thể bắt gặp sương mù hoặc mây giăng lối.

        Tại đây bạn sẽ có 7749 góc chụp ảnh, chỉ cần giơ máy lên là có ảnh đẹp. Với cây thông cô đơn nổi tiếng và đặc trưng bạn đừng quên check in góc này nhé.
        
        Bạn hãy thử một lần cắm trại qua đêm trên đồi Thiên Đức Phúc để có cơ hội cùng bạn bè trải nghiệm tiệc nướng BBQ, cùng ca cùng hát và đón bình minh trên ngọn đồi tuyệt đẹp."
        address="Địa chỉ: Phường 7, Thành phố Đà Lạt."
        img1="https://momento360.com/e/u/cbb50ad5f89946848d50eb9d5fb8a65e?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />  
      <DestinationData
        className="first-des"
        heading="Đồi Đa Phú"
        text="Đồi Đa Phú hay còn được gọi là đồi Ông Lập, là một địa điểm check in Đà Lạt nổi tiếng để cắm trại và săn mây. Cách trung tâm Đà Lạt chừng 12km nơi đây thu hút giới trẻ đến với những buổi cắm trại đêm, ngắm hoàng hôn và săn biển mây đẹp ấn tượng.

        Đến đây bạn sẽ được tận hưởng không khí mát lành của rừng thông bạt ngàn, ngắm nhìn toàn cảnh thung lũng dưới chân đồi. Nếu yêu thích vẻ đẹp tự nhiên hãy một lần chinh phục và cắm trại đêm nơi ngọn đồi Đa Phú."
        address="Địa chỉ: số 149 Ankroet, Phường 7, thành phố Đà Lạt."
        img1="https://momento360.com/e/u/69a7d152d3a3446e9e2cca4fead0f121?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Chùa Linh Phước"
        text="Một địa điểm du lịch tâm linh mà bạn chớ nên bỏ qua, bởi không chỉ được tham quan kiến trúc nổi bật của chùa, cầu nguyện bình an, sức khoẻ mà đến đây bạn sẽ có những bức ảnh check in ấn tượng.

        Chùa Linh Phước được xây dựng vào năm 1951, còn có tên gọi là Chùa Ve Chai. Với nhiều kỷ lục ấn tượng như “ngôi chùa tạo tác bằng miếng sành nhiều nhất”, có tượng khổng tước bằng gỗ lớn nhất, hay có tượng quan thế âm được tạo từ 600.000 bông hoa bất tử,…
        
        Để tận mắt nhìn ngắm kiến trúc của chùa, hay tham quan những tượng phật nổi tiếng và có một bộ ảnh độc đáo thì Chùa Linh Phước là một địa điểm check in Đà Lạt mà bạn nên ghé đến."
        address="Địa chỉ: số 120, đường Tự Phước, Trại Mát, phường 11, Đà Lạt."
        img1="https://momento360.com/e/u/36e3607de2e84f9f9b0f0b6a55d62597?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des"
        heading="Núi Lang Biang"
        text="Một địa điểm check in Đà Lạt nổi tiếng thu hút nhiều bạn trẻ ưa thích phượt và mạo hiểm. Đến đây ngoài tham quan du khách còn có thể thử sức leo núi, chơi dù lượn, cưỡi ngựa chinh phục đỉnh núi."
        address="Địa chỉ: số 305 đường Langbiang, Thị trấn Lạc Dương, Huyện Lạc Dương, tỉnh Lâm Đồng."
        img1="https://momento360.com/e/u/f2a83abe3ed94882818be15c30b7d615?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Nhà thờ con gà"
        text="Nhà thờ Con Gà Đà Lạt là địa điểm tham quan Đà Lạt tiêu biểu. Với lối kiến trúc đặc trưng của phương Tây, nhà thờ Con Gà là khung cảnh khiến du khách lưu luyến mãi chẳng thôi. Cái tên Nhà thờ Con Gà ra đời dựa trên đặc điểm của thiết kế, khi ở đỉnh tháp có một bức tượng con gà khá lớn. Nơi đây là điểm “check-in” không thể nào bỏ qua của du khách khi ghé đến tham quan Đà Lạt."
        address="Địa chỉ: 17 Đ. Trần Phú, Phường 3, Thành phố Đà Lạt."
        img1="https://momento360.com/e/u/989ac62e84d04447bbaf1a4aa11cff3d?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des"
        heading="Thung lũng Tình Yêu"
        text="Thung lũng tình yêu Đà Lạt là điểm đến lý tưởng của rất nhiều du khách. Kết hợp giữa vẻ đẹp thiên nhiên trữ tình cùng các tiểu cảnh xinh đẹp lấy cảm hứng từ tình yêu đôi lứa, nơi đây dễ dàng “hớp hồn” bất cứ du khách nào đặt chân đến."
        address="Địa chỉ: số 7 Mai Anh Đào, phường 8, Đà Lạt."
        img1="https://momento360.com/e/u/23a910d7457c4af5b49e5485291fb668?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Thiền viện Trúc Lâm"
        text="Có lẽ không cần nói quá nhiều về điểm tham quan Đà Lạt đã quá nổi tiếng này. Nằm bên hồ Tuyền Lâm thơ mộng, Thiền viện Trúc Lâm không chỉ thu hút khách tham quan bởi vẻ đẹp trữ tình hiếm có với lối kiến trúc độc đáo, mà nơi đây còn là điểm chiêm bái linh thiêng của Đà Lạt. Khuôn viên Thiền viện Trúc Lâm, ngoài kiến trúc đền chùa đáng chiêm ngưỡng thì những vườn hoa trong khuôn viên thiền viện cũng “phông nền” tuyệt vời để du khách ghi lại những khoảnh khắc đáng nhớ cùng Đà Lạt."
        address="Địa chỉ: Núi Phụng Hoàng, Phường 3, Thành phố Đà Lạt, Lâm Đồng."
        img1="https://momento360.com/e/u/075e13874d904f0fa720d52671971dc8?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=89&size=medium&display-plan=true"
      />                               
    </div>
  );
};

export default Destination;
