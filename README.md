# JavaScritp-Basic
Learning Javascript

Buổi 10:

    - Module reload
    - Yarn <=> npm
    - Nodemon
    - Thêm vào scripts => chỉ cần gõ yarn start/npm start
    - ejs (res.render)
    - express.static
    - (--dev) : Module chỉ trong quá trình phát triển
    
Buổi 11:

    - Cách truyền biến app.locals.name = 'Thanh'.
    - Include dữ liệu giữa các trang html hoặc từ .js => html dùng ejs
    - Cách bắt lỗi server:
        + Khi không có route
            app.get('*', (req, res) => res.send('Page not Found!'));
        + Khi code server bị lỗi:
            app.use((err, req, res, next) => {
                res.send('Error');
            });

    - Cách điều hướng route (*): res.redirect()
        + Dùng để điều hướng các route về 1 route cố đinh (Sủ dụng khi cần bảo trì..)
    - Module body-parser: req.body : để nhận data từ Client
    - Midleware

Buổi 12:

    - Cách tải lên file từ Client lên Server
        + Sử dung module multer (của Express)
            - dest: chỉ có thể lựa chọn nơi lưu
            - storage: lựa chọn nơi lưu, quy định đặt tên file trên server.
    - Upload một lúc nhiều file cùng name:
        - upload.array('avatar', 5) :
            + avatar : name bên form truyền lên
            + 5: Giới hạn số lượng file truyền lên server từ trang đó là 5.
    - Upload một lúc nhiều file khác name (Sử dụng trong trường hợp page cần nhiều trường tải lên như: avatar, product, pannel...):
        - upload.fields(fields): trong đó fields (Trong ngoặc) là một array quy định name sẽ nhận từ form. 
            + VD: fields:
                [
                  { name: 'avatar', maxCount: 1 },
                  { name: 'gallery', maxCount: 8 } // maxCount:  Giới hạn số lượng file truyền lên với name tương ứng lên server từ trang đó là 5.
                ]
           
