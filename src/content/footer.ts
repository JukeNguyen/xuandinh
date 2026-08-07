// Nhãn nav lấy lại đúng eyebrow của mỗi section (đã dịch sang tiếng Việt),
// không tạo nhãn riêng cho footer. Chỉ trỏ tới các section đang thực sự tồn tại.
export const footerContent = {
  nav: [
    { label: "Kẻ Thù", href: "#problem" },
    { label: "Bước Chuyển", href: "#qualifier" },
    { label: "Hệ Thống", href: "#method" },
    { label: "Cơ Chế", href: "#curriculum" },
    { label: "Câu Hỏi", href: "#faq" },
  ],
} as const;
