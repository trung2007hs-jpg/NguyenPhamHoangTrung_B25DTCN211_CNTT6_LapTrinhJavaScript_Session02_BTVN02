let userName = prompt("Tên người dùng:").trim();
let role = prompt("Vai trò:").trim().toLowerCase();
let balance = Number(prompt("Số dư tài khoản:"));
let status = prompt("Trạng thái thẻ thư viện").trim().toLowerCase() === "true";
let day = Number(prompt("Số ngày quá hạn trả sách"));
let reason = "";
let fine = 0;

if (role === "admin") {
    console.log("Chào Admin, bạn có toàn quyền hệ thống");
} else if (role === "student") {
    console.log("Chào sinh viên, bạn có thể mượn sách");
} else if (role === "guest") {
    console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
} else {
    console.log("Lỗi: Vai trò không hợp lệ!");
}

if (!userName) {
    reason = "Tên người dùng không được để trống";
}
else if (role !== "student" && role !== "admin") {
    reason = "Vai trò không được phép mượn sách";
}
else if (balance <= 0) {
    reason = "Số dư tài khoản không đủ";
}
else if (!status) {
    reason = "Thẻ thư viện không hoạt động";
}

if (reason === "") {
    console.log("ĐƯỢC PHÉP MƯỢN SÁCH");
} else {
    console.log("YÊU CẦU BỊ TỪ CHỐI");
    console.log("Lý do:", reason);
}

if (day <= 0) {
    console.log("Cảm ơn bạn đã trả đúng hạn");
}
else if (day >= 1 && day <= 5) {
    fine = day * 5000;
    console.log(`Bạn bị phạt ${fine}đ`);
}
else if (day >= 6 && day <= 10) {
    fine = day * 10000;
    console.log(`Bạn bị phạt ${fine}đ`);
}
else {
    fine = 200000;
    console.log(`Bạn bị phạt ${fine}đ`);
    console.log("TÀI KHOẢN BỊ KHÓA");
}
