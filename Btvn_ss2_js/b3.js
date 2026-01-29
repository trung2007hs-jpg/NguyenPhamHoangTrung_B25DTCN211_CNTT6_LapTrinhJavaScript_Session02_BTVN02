//nhập thông tin
let bookName = prompt("Nhập tên sách:");
let category = prompt("Nhập thể loại sách:").toLowerCase();
let status = prompt("Nhập tình trạng sách (co san / da muon):").toLowerCase();

//kiểm tra và phân loại
if (category === "khoa học" || category === "lịch sử") {
    if (status === "co san") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (category === "văn học" || category === "truyện") {
    console.log("Sách này có thể đọc giải trí");
} else {
    console.log("Thể loại sách khác");
}
