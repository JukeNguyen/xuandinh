import { siteConfig } from "@/content/site-config";

// Bản dịch tiếng Việt.
export const applicationContent = {
  title: `Đăng Ký Tham Gia ${siteConfig.name}`,
  description:
    "Nếu đây không phù hợp với bạn, chúng tôi sẽ nói thẳng — chứ không chỉ nhận đơn cho có.",
  fields: {
    name: { label: "Họ và tên" },
    email: { label: "Email" },
    qualifyingAnswer: {
      label: "Đâu là điều kỷ luật bạn sẵn sàng thay đổi nhất ngay lúc này?",
    },
  },
  submitLabel: "Gửi Đơn Đăng Ký",
  submitNote:
    "Khi gửi, ứng dụng email của bạn sẽ mở ra với đơn đăng ký đã soạn sẵn — nhấn gửi ở đó để hoàn tất.",
  successTitle: "Sắp xong rồi",
  successDescription:
    "Kiểm tra ứng dụng email của bạn — đơn đăng ký đã sẵn sàng để gửi. Chỉ cần nhấn gửi ở đó là xong.",
} as const;
