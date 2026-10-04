// Mỗi dự án ứng với một thư mục ảnh cùng tên (không phân biệt hoa thường) trong src/assets/.
// TODO: bổ sung tên, hạng mục, địa điểm, quy mô, năm và mô tả cho từng công trình.
export const TODO = '[cần bổ sung]';

type Project = { slug: string; name: string; category?: string; location?: string; scale?: string; year?: string };

export const projects: Project[] = [
  { slug: 'nha-da-hoan-thien', name: 'Nhà đã hoàn thiện' },
  { slug: 'noi-that', name: 'Thi công nội thất', category: 'Hoàn thiện nội thất' },
  { slug: 'quan-cafe', name: 'Quán cà phê', category: 'Thi công mặt bằng kinh doanh' },
  { slug: 'do-be-tong', name: 'Đổ bê tông', category: 'Bê tông móng / sàn' },
  ...Array.from({ length: 11 }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    return { slug: `cong-trinh-${n}`, name: `Công trình ${n}` };
  }),
];

