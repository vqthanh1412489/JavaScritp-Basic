// Error vs Exception

// Error: Lỗi do mình tạo ra
// Exception: Lỗi không phải do mình tạo ra mà là do các dịch vụ bên thứ 3: (đường truyền mạng, server...)

// Dùng try .... catch

try {
    console.log(a); // a bị undefine nè! lỗi nha..
}catch (error){
    console.log(error.message); // Quăng ra thông báo lỗi. Không dùng chương trình nhé!
}
console.log(1);