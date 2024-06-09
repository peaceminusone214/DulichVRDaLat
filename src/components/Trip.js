import "./TripStyles.css";
import TripData from "./TripData";
import doichecaudat from "../assets/doi-che-cau-dat.jpg"

function Trip() {
  return (
    <div className="trip">
      <h1>Recent trips</h1>
      <p>Các gói du lịch gần đây</p>
      <div className="tripcard">
        <TripData
          Link="/Service"
          image={ doichecaudat }
          heading="Đồi chè cầu đất"
          text=""
        />
        <TripData
          Link="/Service"
          image="https://ik.imagekit.io/tvlk/blog/2022/09/dia-diem-check-in-da-lat-15.jpg?tr=dpr-2,w-675"
          heading="Nhà Ga Đà Lạt"
          text=""
        />
        <TripData
          Link="/Service"
          image="https://upload.wikimedia.org/wikipedia/commons/c/c7/TLTY2.jpg"
          heading="Thung lũng Tình Yêu"
          text=""
        />
      </div>
    </div>
  );
}

export default Trip;
