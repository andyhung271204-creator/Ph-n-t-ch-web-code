// MỘT nguồn duy nhất cho thông tin công ty. Nội dung lấy từ Ho-so-tong-quan-Gia-Khanh.docx.

// Các mục đánh dấu [cần xác nhận] trong hồ sơ chỉ hiển thị khi cờ này là true.
// Đổi thành true sau khi công ty đã xác nhận bảo hành, 3 mức giá, giờ làm việc, thời gian thi công...
export const daXacNhan = false;
export const xn = (giaTri: string) => (daXacNhan ? giaTri : 'Đang cập nhật');

const phone = '0964531577';
const address = 'Đường Quốc lộ 3, thôn Lộc Hà, xã Đông Anh, TP Hà Nội';

export const company = {
  name: 'Công ty TNHH Xây dựng và Đầu tư Gia Khánh',
  brand: 'Gia Khánh',
  nameEn: 'Gia Khanh Construction and Investment Company Limited',
  taxCode: '0111442677',
  // TODO: xác nhận chức danh "Giám đốc"
  representative: daXacNhan ? 'Ông Đỗ Như Duy – Giám đốc' : 'Ông Đỗ Như Duy',
  address,
  phone,
  phoneDisplay: '0964 531 577',
  telUrl: `tel:${phone}`,
  zaloUrl: `https://zalo.me/${phone}`,
  mapUrl: `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`,
  email: '[Email]', // TODO: chưa có
  fanpage: '[Fanpage]', // TODO: chưa có
  messengerUrl: 'https://m.me/TODO-fanpage', // TODO: thay TODO-fanpage bằng username fanpage chính thức
  hours: xn('Thứ 2 – Thứ 7, 8:00 – 17:30'),
  area: 'Hà Nội: nội thành và các huyện lân cận (Đông Anh, Gia Lâm, Hoài Đức, Thanh Trì, Hà Đông…)',
  areaList: ['Hà Nội', 'Đông Anh', 'Gia Lâm', 'Hoài Đức', 'Thanh Trì', 'Hà Đông'],
  slogan: 'Xây niềm tin – Dựng tương lai',
  intro:
    'Gia Khánh là đơn vị xây dựng và sửa chữa nhà ở tại Hà Nội. Chúng tôi nhận xây nhà trọn gói, cải tạo – sửa chữa, hoàn thiện nội thất và chống thấm cho gia đình, với báo giá minh bạch, tiến độ rõ ràng và bảo hành bằng văn bản.',
  about: [
    'Công ty TNHH Xây dựng và Đầu tư Gia Khánh đặt trụ sở tại Đông Anh, Hà Nội, với mong muốn mang đến cho các gia đình một dịch vụ xây dựng đúng nghĩa “dịch vụ”: nói rõ, làm đúng, bàn giao đủ.',
    'Đội ngũ Gia Khánh có hơn 10 người, gồm kỹ sư xây dựng, kiến trúc sư và quản lý thi công, do ông Đỗ Như Duy đứng đầu. Đội ngũ đã có trên 10 năm kinh nghiệm thi công các công trình nhà ở dân dụng tại Hà Nội. Chúng tôi hiểu rằng với đa số gia đình, xây hay sửa một ngôi nhà là khoản đầu tư lớn — vì vậy mọi hạng mục đều được báo giá chi tiết, ký hợp đồng rõ ràng và cập nhật tiến độ thường xuyên cho chủ nhà.',
  ],
  vision:
    'Đến năm 2031, trở thành đơn vị xây dựng và sửa chữa nhà ở được các gia đình Hà Nội tin chọn và giới thiệu cho người thân nhờ sự minh bạch và tận tâm.',
  mission:
    'Giúp mỗi gia đình xây, sửa ngôi nhà của mình một cách an tâm: đúng dự toán, đúng tiến độ, đúng chất lượng đã cam kết — để ngôi nhà là niềm vui chứ không phải nỗi lo.',
  cta: 'Bạn đang có kế hoạch xây hoặc sửa nhà? Để lại số điện thoại, Gia Khánh sẽ gọi lại tư vấn miễn phí.',
  priceNote: 'Đơn giá chưa gồm VAT, chưa gồm phá dỡ và ép cọc. Báo giá chính xác sau khi khảo sát thực tế.',
};

export const nav = [
  { href: '/', label: 'Trang chủ' },
  { href: '/gioi-thieu', label: 'Giới thiệu' },
  { href: '/dich-vu', label: 'Dịch vụ' },
  { href: '/du-an', label: 'Công trình' },
  { href: '/bao-gia', label: 'Báo giá' },
  { href: '/lien-he', label: 'Liên hệ' },
];

export const stats = [
  { value: '10+ năm', label: 'Kinh nghiệm của đội ngũ' },
  { value: '10+', label: 'Kỹ sư, kiến trúc sư, quản lý thi công' },
  { value: '4', label: 'Nhóm dịch vụ nhà ở' },
  { value: 'Miễn phí', label: 'Khảo sát và báo giá' },
];

export const values = [
  { name: 'Minh bạch', text: 'Báo giá chi tiết từng hạng mục, vật tư ghi rõ chủng loại; không phát sinh khi chưa được chủ nhà đồng ý.' },
  { name: 'Tận tâm', text: 'Làm nhà cho khách như làm nhà cho gia đình mình; kỹ sư phụ trách giám sát trực tiếp tại công trình.' },
  { name: 'Đúng hẹn', text: 'Tiến độ có mốc rõ ràng trong hợp đồng; cập nhật hình ảnh công trình hằng ngày qua Zalo.' },
  { name: 'Chất lượng', text: 'Thi công đúng kỹ thuật, nghiệm thu từng giai đoạn cùng chủ nhà.' },
  { name: 'Trách nhiệm', text: 'Bảo hành bằng văn bản, có mặt xử lý khi khách cần.' },
];

export const steps = [
  {
    name: 'Tiếp nhận & tư vấn',
    text: `Khách liên hệ qua hotline, Zalo, fanpage hoặc form trên web; Gia Khánh gọi lại tư vấn sơ bộ${daXacNhan ? ' trong 2 giờ làm việc' : ''}.`,
  },
  { name: 'Khảo sát hiện trạng (miễn phí)', text: 'Kỹ sư đến tận nơi đo đạc, ghi nhận nhu cầu và ngân sách.' },
  { name: 'Thiết kế & báo giá chi tiết', text: 'Gửi phương án thiết kế (nếu có) và bảng dự toán từng hạng mục, vật tư ghi rõ chủng loại.' },
  { name: 'Ký hợp đồng', text: 'Hợp đồng ghi rõ giá trị, tiến độ theo mốc, phương thức thanh toán theo giai đoạn và chế độ bảo hành.' },
  { name: 'Thi công & giám sát', text: 'Kỹ sư phụ trách giám sát tại công trình; gửi ảnh tiến độ hằng ngày qua Zalo; nghiệm thu từng giai đoạn cùng chủ nhà.' },
  { name: 'Bàn giao & bảo hành', text: 'Nghiệm thu tổng thể, bàn giao hồ sơ, kích hoạt bảo hành và chăm sóc sau bàn giao.' },
];

export const reasons = [
  { name: 'Báo giá minh bạch', text: 'Dự toán chi tiết từng hạng mục, không phát sinh khi chưa được chủ nhà đồng ý.' },
  { name: 'Kỹ sư giám sát trực tiếp', text: 'Mỗi công trình có một kỹ sư phụ trách, chủ nhà liên hệ trực tiếp.' },
  { name: 'Cập nhật tiến độ hằng ngày', text: 'Ảnh công trình gửi qua Zalo, chủ nhà ở xa vẫn nắm được tình hình.' },
  { name: 'Thanh toán theo giai đoạn', text: 'Chỉ thanh toán khi hạng mục đã nghiệm thu.' },
  { name: 'Bảo hành bằng văn bản', text: 'Có mặt xử lý nhanh khi có sự cố.' },
  { name: 'Am hiểu nhà ở Hà Nội', text: 'Quen với nhà ống, nhà trong ngõ, quy định cấp phép tại địa phương.' },
];

export const commitments = [
  'Không phát sinh chi phí khi chưa có xác nhận của chủ nhà.',
  'Sử dụng đúng vật tư, chủng loại đã ghi trong hợp đồng.',
  'Chậm tiến độ do lỗi của Gia Khánh sẽ bồi thường theo điều khoản hợp đồng.',
  'Vệ sinh công trình sạch sẽ trước khi bàn giao.',
];

// Thời hạn theo mức phổ biến trên thị trường (trùng số trong hồ sơ), chủ site yêu cầu hiển thị.
// TODO: công ty xác nhận lại trước khi đưa vào hợp đồng
export const warranty = [
  { item: 'Kết cấu (móng, cột, dầm, sàn)', period: '5 năm' },
  { item: 'Chống thấm', period: '3 năm' },
  { item: 'Hoàn thiện (sơn, ốp lát, trần)', period: '1 năm' },
  { item: 'Điện nước', period: '1 năm' },
  { item: 'Sửa chữa nhỏ, bảo trì', period: '6 tháng' },
];

// Nhà phố lấy từ file báo giá; 3 loại nhà còn lại cần xác nhận
export const prices = [
  { type: 'Nhà cấp 4, nhà 1 tầng mái tôn / mái ngói', rough: xn('2.900.000 đ/m²'), full: xn('4.300.000 đ/m²') },
  { type: 'Nhà phố, nhà ống 2 – 5 tầng', rough: '3.300.000 đ/m²', full: '5.000.000 đ/m²' },
  { type: 'Nhà phố tân cổ điển, nhà từ 6 tầng trở lên', rough: xn('3.600.000 đ/m²'), full: xn('5.500.000 đ/m²') },
  { type: 'Biệt thự, nhà vườn', rough: xn('3.900.000 đ/m²'), full: xn('6.500.000 đ/m²') },
];

// TODO: chưa có đơn giá thiết kế — điền số thật vào xn('...') khi công ty cung cấp
export const designPrices = [
  { item: 'Thiết kế kiến trúc', price: xn('') },
  { item: 'Thiết kế nội thất', price: xn('') },
];

export const packages = [
  {
    name: 'Phần thô + nhân công hoàn thiện',
    includes:
      'Vật tư và nhân công móng, khung bê tông cốt thép, xây tô, đường ống điện nước âm, chống thấm; nhân công ốp lát, sơn bả, lắp đặt thiết bị.',
    owner: 'Vật tư hoàn thiện: gạch, sơn, cửa, thiết bị vệ sinh, thiết bị điện.',
  },
  {
    name: 'Trọn gói (chìa khóa trao tay)',
    includes: 'Toàn bộ phần thô và hoàn thiện, gồm vật tư theo đúng thương hiệu trong bảng vật tư.',
    owner: 'Nội thất rời, điều hòa, bình nóng lạnh.',
  },
  {
    name: 'Nhân công xây dựng',
    includes: 'Nhân công thi công toàn bộ công trình, từ 1.400.000 đ/m².',
    owner: 'Toàn bộ vật tư.',
  },
];

export const areaRules = [
  { item: 'Móng', rate: '40% diện tích' },
  { item: 'Các tầng, tầng tum có mái che', rate: '100% diện tích' },
  { item: 'Sân, sân thượng không có mái che', rate: '30% diện tích' },
];

export const areaExample = {
  text: 'Nhà phố 2 tầng + tum, mặt bằng 60 m², tum có mái 20 m², sân thượng 40 m² → diện tích tính giá = 24 + 60 + 60 + 20 + 12 = 176 m².',
  results: [
    'Gói trọn gói: 176 × 5.000.000 = 880 triệu đồng',
    'Gói phần thô + nhân công hoàn thiện: 176 × 3.300.000 = 580,8 triệu đồng',
  ],
};

export const faqs = [
  {
    q: 'Gia Khánh có khảo sát và báo giá miễn phí không?',
    a: 'Có. Kỹ sư sẽ đến tận nơi khảo sát và gửi báo giá chi tiết hoàn toàn miễn phí trong khu vực Hà Nội.',
  },
  {
    q: 'Xây một căn nhà mất bao lâu?',
    a: `${daXacNhan ? 'Nhà phố 3–4 tầng thường mất khoảng 4–6 tháng tùy diện tích và thời tiết. ' : 'Thời gian tùy diện tích và thời tiết. '}Tiến độ cụ thể được ghi trong hợp đồng.`,
  },
  { q: 'Thanh toán như thế nào?', a: 'Thanh toán theo từng giai đoạn, chỉ sau khi hạng mục đã được nghiệm thu cùng chủ nhà.' },
  {
    q: 'Có phát sinh chi phí trong quá trình thi công không?',
    a: 'Mọi phát sinh (nếu chủ nhà thay đổi yêu cầu) đều được báo giá và chỉ thực hiện khi chủ nhà đồng ý bằng văn bản hoặc tin nhắn.',
  },
  {
    q: 'Gia Khánh có nhận sửa chữa nhỏ không?',
    a: 'Có. Chúng tôi nhận cả việc nhỏ như sửa điện nước, chống thấm một khu vực, sơn lại phòng.',
  },
  {
    q: 'Tôi ở xa, làm sao theo dõi công trình?',
    a: 'Kỹ sư gửi ảnh và video tiến độ hằng ngày qua Zalo; chủ nhà có thể đến công trình bất cứ lúc nào.',
  },
];
