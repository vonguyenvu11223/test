import styles from './about.module.css'

const element = [
    '1. Tìm hiểu về Masonry layout',
    '2. Trước khi học về CSS3 Multi-column, mình nghĩ mình nên giới thiệu qua cho các bạn hiểu về Masonry layout. Các bạn cùng nhìn ảnh dưới này nhé',
    '3. Ảnh bên trên là 1 dạng hiển thị kiểu Masonry layout. Vậy kiểu hiển thị này bắt nguồn từ đâu? Tên gọi của nó bắt nguồn từ tên một plugin trong jquery đó là Masonry plugin, được phát triển bởi David DeSandro – một designer của Twitter.',
    '4. Masonry Layout dược sử dụng lần đầu tiên bởi trang chuyên chia sẻ hình ảnh project nổi tiếng là Pinterest.com nên Masonry Layout còn được biết đến với cái tên Pinterest Style Layout. Mình sẽ nói sơ qua về loại layout mới mẻ này cho các bạn cùng hiểu nhé.',
    '5. Như chúng ta thường thấy thì các loại bố cục layout cổ điển thường sử dụng thuộc tính Float trong CSS để dàn trang, sắp xếp các element side-by-side, nghĩa là sắp thứ tự theo chiều ngang rồi đến chiều dọc. Nếu như height của các element không đều nhau thì khi dàn hàng chúng sẽ tạo tao ra rất nhiều khoảng trống không cần thiết trong layout.',
    '6. Nhưng đối với Masonry Layout, các element sẽ được đưa vào các cột có chiều rộng (Width) được quy định sẵn, các element có chiều cao (Height) khác nhau nằm chung một cột sẽ được xếp vào mà không tạo ra khoảng trống do khác hàng. Các bạn cứ tưởng tượng Masonry giống như trò chơi xếp gạch – Tetris vậy',
    '7. Như vậy các bạn đã hiểu thế nào là Masonry layout rồi chứ? Vậy, một câu hỏi đặt ra lúc này là: Làm thế nào để tạo được Masonry layout chỉ bằng CSS3 mà không dùng Masonry plugin?',
    '8. Câu trả lời đã nằm trên tiêu đề của bài viết này. Đúng vậy, chúng ta dùng CSS3 Multi-column. Và bây giờ chúng ta cùng đi tìm hiểu về cách sử dụng CSS3 Multi-column như thế nào để có thể tạo được Masonry layout nhé.',
    '9. Như vậy, qua bài này các bạn cũng hiểu thế nào là Masonry layout và biết cách tạo ra nó rồi nhỉ. Thực lòng mà nói Masonry layout là 1 kiểu layout rất đẹp đúng không các bạn? Mình nghĩ không ít bạn cũng muốn sử dụng kiểu layout như thế này mà chưa tìm được phương pháp tối ưu nhất. Bây giờ thì các bạn có thể dễ dàng sử dụng layout này cho web của mình rồi. Chúc các bạn thành công!',
    '10. Lời kết',
    '11. Tìm hiểu về Masonry layout'
]

function masonry() {
    return (
        <div className={styles.container}>
            {element.map((item, index) => {
                return (
                    <div className={styles.avoid}>
                        <div className={styles.box}>
                            {item}
                        </div>
                    </div>

                )
            })}
        </div>
    );
}

export default masonry;