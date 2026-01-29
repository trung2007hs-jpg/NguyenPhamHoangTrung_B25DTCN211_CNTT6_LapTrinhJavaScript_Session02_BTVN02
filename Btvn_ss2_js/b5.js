let bookName = prompt("Nhập tên sách:");
let status = prompt("Nhập trạng thái sách (có sẵn / đã mượn):").trim().toLowerCase();
let publishYear = Number(prompt("Nhập năm xuất bản:"));
let currentYear = 2026;
let bookAge = currentYear - publishYear;

console.log("Tên sách:", bookName);
console.log("Năm xuất bản:", publishYear);

if (status === "có sẵn" && bookAge <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
}
else if (status === "đã mượn" && bookAge <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
}
else if (status === "đã mượn" && bookAge > 10) {
    console.log("Sách này đã mượn và khá cũ");
}
else if (status === "có sẵn" && bookAge > 5) {
    console.log("Sách này có sẵn nhưng đã lâu năm");
}
else {
    console.log("Thông tin sách không hợp lệ");
}
