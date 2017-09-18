const a = 'Hello World 123';

String.prototype.replaceAll = function(a, b){
    let self = this; // Đối tượng string đang đề cập đếp
    while(self.includes(a)){
        self = self.replace(a,b);
    }
    return self;
}

console.log(a.replaceAll(' ', '_'));