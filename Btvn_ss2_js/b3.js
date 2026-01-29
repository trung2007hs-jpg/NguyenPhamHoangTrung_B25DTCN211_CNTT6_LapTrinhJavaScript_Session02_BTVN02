//nhập thông tin
let bookName = prompt("Nhập tên sách:");
let category = prompt("Nhập thể loại sách:").trim().toLowerCase();
let status = prompt("Nhập tình trạng sách (co san / da muon):").trim().toLowerCase();

// kiểm tra và phân loại
if ((category === "khoa học" || category === "lịch sử") && status === "co san") {
    console.log("Sách này có sẵn trong thư viện");
}
else if ((category === "khoa học" || category === "lịch sử") && status === "da muon") {
    console.log("Sách đã được mượn");
}
else if (category === "văn học" || category === "truyện") {
    console.log("Sách này có thể đọc giải trí");
}
else {
    console.log("Thể loại sách khác");
}
