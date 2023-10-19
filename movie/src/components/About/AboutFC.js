import React from 'react'
import './About.css'
import { Collapsible, CollapsibleItem, Container, Icon } from 'react-materialize'
import { ThemeContext } from '../ThemeContext'
import { useContext } from 'react'
export default function AboutFC() {
    const { theme } = useContext(ThemeContext);
    return (
        <Container
            style={{ borderBottom: theme.borderBottom, padding: "100px 0" }}
        >
            <Collapsible
                accordion
                popout
            //  style={{borderBottom: theme.borderBottom}}
            >
                <CollapsibleItem
                    expanded={false}
                    header="Xem phim và chương trình TV miễn phí ở phê phim"
                    style={{ fontWeight: 'bold', color: "black" }}
                    icon={<Icon><i class="fa-solid fa-face-smile"></i></Icon>}
                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                        Bạn có thích phim và phim truyền hình? Bạn có muốn xem chúng trực tuyến miễn phí nhưng không biết làm thế nào? Vâng, không tìm đâu xa. Phê phim là trang web cho phép người dùng xem phim truyền hình và phim miễn phí trên máy tính, máy tính xách tay, máy tính bảng hoặc điện thoại thông minh.
                    </p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Phê phim là gì ?"
                    style={{ fontWeight: 'bold', color: "black" }}
                    icon={<Icon><i class="fa-regular fa-user"></i></Icon>}
                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                        Bộ phim bạn cần, được thiết kế bởi cubi để nghiên cứu trường hợp FER201m
                        có thể truy cập được cho mọi người
                    </p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Xài miễn phí"
                    icon={<Icon><i class="fa-solid fa-heart"></i></Icon>}
                    style={{ fontWeight: 'bold', color: "black" }}

                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                        Phê phim là trang web phát trực tuyến phim và truyền hình dài tập miễn phí. Không thành vấn đề nếu bạn đang tìm phim hài, phim truyền hình hay thậm chí là phim hoạt hình – Phê phim có tất cả! Trang web cung cấp hàng nghìn tựa phim có sẵn để xem qua máy tính, máy tính xách tay, máy tính bảng hoặc điện thoại thông minh của bạn mà không phải trả bất kỳ khoản phí nào.                    </p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="
                    Tốt nhất cho những người yêu thích phim và phim truyền hình dài tập"
                    icon={<Icon><i class="fa-solid fa-film"></i></Icon>}
                    style={{ fontWeight: 'bold', color: "black" }}

                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>

                        Bạn có thích xem phim và phim truyền hình trực tuyến không? Nếu có thì Phê phim là phù hợp cho bạn! Trang web này có rất nhiều tựa phim được xem miễn phí. Không cần phải đăng ký hay trả tiền – chỉ cần đến đó, chọn thứ bạn muốn và bắt đầu tận hưởng nó nhiều nhất có thể!                    </p>
                </CollapsibleItem>

                <CollapsibleItem
                    expanded={false}
                    header="Không quảng cáo"
                    icon={<Icon><i class="fa-solid fa-rectangle-ad"></i></Icon>}
                    style={{ fontWeight: 'bold', color: "black" }}

                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                        Bạn không phải lo quảng cáo làm phiền khi streaming trên Phê phim. Trang web không có bất kỳ quảng cáo nào có thể làm gián đoạn trải nghiệm xem phim hoặc chương trình truyền hình của bạn! Phê phim có tất cả các thể loại bao gồm hài lãng mạn, phim truyền hình, phim hoạt hình, phim kinh dị và rất nhiều thể loại khác có sẵn để bạn thưởng thức bao nhiêu lần tùy thích! Trang web được cập nhật liên tục với các tựa sách mới nên bạn sẽ không bao giờ cảm thấy nhàm chán. Hàng ngàn bộ phim và phim truyền hình miễn phí? Vâng, làm ơn! Vào Phê phim ngay và bắt đầu xem nhé!</p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="An toàn và bảo mật"
                    icon={<Icon><i class="fa-solid fa-regular fa-lock"></i></Icon>}
                    style={{ fontWeight: 'bold', color: "black" }}

                    node="div"
                >
                    <p style={{ fontWeight: 'normal', color: theme.color }}>
                    Bạn có bất kỳ lo ngại nào về quyền riêng tư trực tuyến của mình không? Bạn không cần phải lo lắng khi duyệt trên Phê phim. Trang web này an toàn và bảo mật 100%! Mọi thứ xảy ra ở đó không thể truy ngược lại tên hoặc địa chỉ email của bạn – mọi thứ đều được ẩn để được bảo vệ tối đa do chính trang web cung cấp.</p>
                </CollapsibleItem>

            </Collapsible>
        </Container>
    )
}
