import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
const Popup = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [file, setFile] = useState(null);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const handleFileChange = (event) => {
        // Xử lý khi người dùng chọn file
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = () => {
        // Xử lý upload file tại đây, có thể sử dụng Axios hoặc Fetch API để gửi file lên server
        // Sau khi upload xong, đóng popup
        togglePopup();
    };

    return (
        <div className={`popup ${isPopupVisible ? 'active' : ''}`} style={{ justifyContent: 'center', alignItems: 'center', position: 'fixed', width: '50%', height: '80%', display: 'flex', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '50%', height: '60%' }}>
                <div style={{ borderBottom: '1px #D3D5D9 solid' }}>
                    <span className="close" onClick={togglePopup} style={{ cursor: 'pointer' }}>&times;</span><br />
                    <h2 style={{ textAlign: 'center', color: '#2D1E64' }}>Upload your CV</h2>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Button onChange={handleFileChange} style={{ marginTop: '15px', backgroundColor: 'white', color: 'gray', border: '2px #D3D5D9 solid' }}>Tải lên CV từ máy tính</Button>
                </div>

                <div style={{ textAlign: 'left', marginLeft: '20px' }}>
                    Thư giới thiệu:
                    <div style={{ marginRight: '10px' }}>
                        <textarea name="letter" class="form-control" style={{ fontSize: '12px' }} rows="3" placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) vè nêu rõ mong muốn, lý do làm việc tại công ty này. Đây là cách gây ấn tượng với nhà tuyển dụng nếu bạn chưa có kinh nghiệm làm việc (hoặc CV không tốt)"></textarea>
                    </div>
                </div>

                <div style={{ textAlign: 'right', marginTop: '10px', marginBottom: '2px', borderBottom: '2px #D3D5D9 solid' }}>
                    <Button onClick={handleUpload} style={{ backgroundColor: '#E9EAEC', borderRadius: '10px', margin: '8px 5px 15px 5px', border: '0 #E9EAEC solid', color: 'black' }}>Huỷ</Button>
                    <Button onClick={handleUpload} style={{ backgroundColor: '#2D1E64', borderRadius: '10px', margin: '8px 5px 15px 5px', border: '0 #E9EAEC solid' }}>Nộp CV</Button>
                </div>
                <div style={{ width: '95%', height: '10%' }} >
                    <h5 style={{ marginLeft: '10px' }}>
                        Lưu ý:
                    </h5>
                    <ol style={{ fontSize: '12px' }}>
                        <li>Ứng viên nên lựa chọn ứng tuyển bằng CV Online &amp; viết thêm mong muốn tại phần thư giới thiệu để được Nhà tuyển dụng xem CV sớm hơn.</li>
                        <li>Để có trải nghiệm tốt nhất, bạn nên sử dụng các trình duyệt phổ biến như Google Chrome hoặc Firefox.</li>
                        <li>TopCV khuyên tất cả các bạn hãy luôn cẩn trọng trong quá trình tìm việc và chủ động nghiên cứu về thông
                            tin công ty, vị trí việc làm trước khi ứng tuyển. Ứng viên cần có trách nhiệm với hành vi ứng tuyển của mình.</li>
                    </ol>
                </div>

            </div>
        </div >
    );
};

export default Popup;