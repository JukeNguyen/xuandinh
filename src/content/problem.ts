// Bản dịch tiếng Việt của bản gốc trong CONTENT_STRATEGY.md §Enemy.
export const problemContent = {
  eyebrow: "Kẻ Thù",
  title: "Sự Trôi Dạt",
  subtitle:
    "Sự trượt dài chậm rãi, êm ái, được bôi trơn bằng dopamine, dẫn tới một cuộc đời nhỏ bé hơn — tạo nên từ hàng ngàn lời hứa nhỏ bạn không giữ với chính mình, mà từng cái một chẳng có gì to tát.",
  mechanisms: [
    {
      icon: "comfort",
      label: "Sự Thoải Mái",
      description: "Loại bỏ ma sát cần thiết để bạn thực sự trưởng thành.",
    },
    {
      icon: "distraction",
      label: "Sự Xao Nhãng",
      description:
        'Những vòng lặp dopamine từ thuật toán khiến "để sau" nghe như một quyết định, thay vì đúng bản chất của nó.',
    },
    {
      icon: "isolation",
      label: "Sự Cô Lập",
      description: "Không ai đủ gần để nhận ra tiêu chuẩn của bạn đang tụt dốc.",
    },
    {
      icon: "standards",
      label: "Thiếu Tiêu Chuẩn",
      description:
        "Không có gì được viết ra, không có gì hiển hiện, nên chẳng có gì để so sánh trên giấy — chỉ có trong im lặng riêng bạn biết.",
    },
    {
      icon: "mission",
      label: "Không Có Sứ Mệnh",
      description: "Không có điểm đến cố định, thì đi hướng nào cũng thấy hợp lý như nhau.",
    },
  ],
} as const;

export type ProblemMechanismIcon = (typeof problemContent.mechanisms)[number]["icon"];
