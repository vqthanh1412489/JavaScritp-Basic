class Tinh {
    constructor(so1, so2, operator){
        this.so1 = so1;
        this.so2 = so2;
        this.operator = operator;
    }

    getResultString(){
        const {so1, so2} = this;
        let dau = this.getOperator();
        const result = `${so1} ${dau} ${so2}`;
        return `${result} = ${eval(result)}`;
    }

    getOperator(){
        const {operator} = this;
        if (operator === 'CONG') return '+';
        if (operator === 'TRU') return '-';
        if (operator === 'NHAN') return '*';
        return '/';
    }
}

module.exports = Tinh;



