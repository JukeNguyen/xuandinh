export const siteConfig = {
  // Tên thương hiệu giữ nguyên tiếng Anh — đây là wordmark, không phải nội dung cần dịch.
  name: "The Operating System",
  shortName: "The OS",
  tagline: "Hệ điều hành chạy ngầm bên dưới tất cả những gì bạn từng cố sửa chữa.",
  description:
    "Hệ thống 90 ngày theo nhóm (cohort), dành cho những người đàn ông đã chán phải bắt đầu lại — được cài đặt qua ba giai đoạn: Detox, Install, Compound.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  // Placeholder pending a real inbox — swap via env var once one exists.
  applicationEmail: process.env.NEXT_PUBLIC_APPLICATION_EMAIL ?? "applications@example.com",
  locale: "vi_VN",
} as const;
