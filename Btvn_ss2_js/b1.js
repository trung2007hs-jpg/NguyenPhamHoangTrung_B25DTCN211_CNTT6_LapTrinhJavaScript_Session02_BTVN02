//khai báo biến
let bookName = prompt("Nhập tên sách:");
let author = prompt("Nhập tên tác giả:");
let publishYear = Number(prompt("Nhập năm xuất bản:"));
let currentYear = 2026;

//kiểm tra
if (publishYear === currentYear) {
    console.log("Đây là sách mới!");
} else if (currentYear - publishYear <= 5) {
    console.log("Sách khá mới");
} else {
    console.log("Sách đã cũ");
}
