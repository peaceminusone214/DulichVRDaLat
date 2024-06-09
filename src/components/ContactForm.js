import "./ContactFormStyles.css"

function ContactForm(){
    return(
        <div className="from-container">
           <h1>Nếu bạn có thắc mắc hay yêu cầu gì. Hãy gửi tin nhắn ngay cho chúng tôi!</h1>
           <form>
            <input placeholder="Tên"/>
            <input placeholder="Email"/>
            <input placeholder="Thắc mắc/ Yêu cầu"/>
            <textarea placeholder="Tin nhắn" rows="4"></textarea>
            <button>Gửi ngay</button>
            </form> 
        </div>
    )
}

export default ContactForm;