// Bản dịch tiếng Việt của bản gốc trong CONTENT_STRATEGY.md §Unique Mechanism
// (The Three-Phase Install). Tên ba giai đoạn giữ nguyên tiếng Anh (DETOX,
// INSTALL, COMPOUND) — dịch sang tiếng Việt nghe khiên cưỡng và mất đi cảm
// giác "tên chương trình" đã được thiết lập.
export const curriculumContent = {
  eyebrow: "Cơ Chế",
  title: "Cài Đặt Ba Giai Đoạn",
  subtitle: "Một trình tự có cấu trúc trong 90 ngày — không phải một đống module tung ra cùng lúc.",
  phases: [
    {
      name: "DETOX",
      days: "Ngày 1–30",
      description:
        "Loại bỏ những lối tiếp cận dễ dàng nuôi dưỡng Sự Trôi Dạt (tái thiết kế môi trường sống, rà soát lại các thiết lập mặc định); thiết lập nền tảng không thể thương lượng (giấc ngủ, vận động, quy tắc giao tiếp) trước khi thêm bất cứ điều gì mới.",
    },
    {
      name: "INSTALL",
      days: "Ngày 31–60",
      description:
        "Lồng ghép bốn Trụ Cột (Thể Chất, Giao Tiếp, Kỷ Luật, Tư Duy Chiến Binh) thành các quy trình cố định hằng ngày/hằng tuần — ưu tiên lặp lại, không phụ thuộc động lực.",
    },
    {
      name: "COMPOUND",
      days: "Ngày 61–90",
      description:
        "Gỡ bỏ giàn giáo hỗ trợ, thử thách hệ thống dưới ma sát thực tế (đi công tác, những tuần tệ hại, áp lực xã hội), điều chỉnh ngay lập tức nhờ trách nhiệm với nhóm/huấn luyện viên, cho đến khi hệ thống vận hành mà không cần phải nghĩ tới nữa.",
    },
  ],
} as const;
