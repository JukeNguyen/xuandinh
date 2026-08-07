// Bản dịch tiếng Việt. Câu hỏi/câu trả lời dịch lại từ bản gốc trong
// CONTENT_STRATEGY.md §FAQ Strategy, giữ nguyên logic: mỗi câu hỏi ứng với
// một mối lo cụ thể, không thêm số liệu/cam kết chưa có thật (giá, bảo hành,
// lịch gọi) — xem ghi chú trong docs/PROGRESS.md.
export const faqContent = {
  eyebrow: "Trước Khi Đăng Ký",
  title: "Câu Hỏi Thường Gặp",
  items: [
    {
      question: "Mỗi ngày thực sự tốn bao nhiêu thời gian?",
      answer:
        "Hệ thống được xây để chạy ngầm bên dưới cuộc sống bạn đang có — không phải thay thế nó. Yêu cầu mỗi ngày đều có cấu trúc rõ ràng và giới hạn cụ thể, không mơ hồ, nên bạn luôn biết chính xác điều gì được yêu cầu trước khi bắt đầu. Đây không phải một công việc bán thời gian chồng lên cuộc sống của bạn; đó là một số ít điều không thể thương lượng, được lồng vào cuộc sống bạn đang sống.",
    },
    {
      question: "Nếu tôi bị tụt lại phía sau nhóm thì sao?",
      answer:
        "Tụt lại một thời gian không khiến bạn bị loại khỏi nhóm, và điều đó cũng không bị coi là thất bại — đó là điều được dự liệu trước. Hầu hết những người từng thử điều tương tự đều bắt đầu mạnh mẽ rồi đuối dần vào khoảng tuần thứ ba, thứ tư. Đó chính xác là lý do hệ thống được chia thành ba giai đoạn theo trình tự thay vì tung ra cùng lúc, và cũng là lý do nhóm nhỏ (pod) của bạn tồn tại: để chặn một tuần tệ hại trước khi nó biến thành một quý tệ hại.",
    },
    {
      question: "Tôi từng thử những chương trình như thế này rồi — vì sao lần này sẽ khác?",
      answer:
        "Vì bạn chưa bao giờ thiếu thông tin — gần như không ai đăng ký ở đây thiếu điều đó cả. Thứ còn thiếu là sự cài đặt: trình tự, việc tái thiết kế môi trường sống, và trách nhiệm giải trình — những thứ biến điều bạn đã biết thành điều bạn thực sự làm. Đó là điều mà Cài Đặt Ba Giai Đoạn được xây dựng để mang lại, chứ không phải thêm một đống lời khuyên nữa.",
    },
    {
      question:
        "Chương trình này chỉ dành cho người độc thân, hay vẫn phù hợp nếu tôi có gia đình?",
      answer:
        "Chương trình này không chỉ dành cho những người đàn ông tự hoàn thiện một mình. Trụ cột Giao Tiếp và triết lý nền tảng của chương trình được xây dựng riêng cho những người đàn ông có người phụ thuộc vào họ — bạn đời, con cái, một đội nhóm. Bảo vệ và chu cấp cho người khác bắt đầu từ việc làm chủ chính mình trước.",
    },
    {
      question: "Nếu tôi không được chấp nhận thì sao?",
      answer:
        "Nếu bạn không phù hợp với nhóm hiện tại, chúng tôi sẽ nói thẳng và trung thực lý do — chứ không im lặng biến mất. Đơn đăng ký được xét duyệt dựa trên sự nghiêm túc và mức độ phù hợp thực sự, vì cấu trúc trách nhiệm giải trình phụ thuộc vào việc mỗi người trong nhóm nhỏ thực sự có mặt.",
    },
    {
      question: "Điều gì xảy ra sau 90 ngày?",
      answer:
        'Giai đoạn COMPOUND tồn tại chính là để hệ thống tiếp tục vận hành mà bạn không cần phải nghĩ tới nó nữa — đó là ý nghĩa của một sự cài đặt, không phải một khóa học học xong rồi quên. Với những người cần "tái khởi động" hệ thống sau một giai đoạn khó khăn trong cuộc sống, có một lộ trình quay lại thông qua mạng lưới cựu học viên.',
    },
  ],
} as const;
