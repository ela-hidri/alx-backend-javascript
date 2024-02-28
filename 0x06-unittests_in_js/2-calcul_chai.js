function calculateNumber(type, a, b) {
    let rst = 0;
    switch (type) {
        case 'SUM':
            rst = Math.round(a) + Math.round(b)
            break;
        case 'SUBTRACT':
            rst = Math.round(a) - Math.round(b)
            break;
        case 'DIVIDE':
            if (Math.round(b) == 0){
                return 'Error';
            }
            rst = Math.round(a) / Math.round(b)
            break;
    
        default:
            break;
    }
    
    return rst;
}

module.exports = calculateNumber;
