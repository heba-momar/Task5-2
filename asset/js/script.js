function convert() {
    const number = parseFloat(document.querySelector('.number').value);
    const fromUnit = document.querySelector('.fromUnit').value;
    const toUnit = document.querySelector('.toUnit').value;

    // تحويل الرقم إلى متر
    let meters;

    switch (fromUnit) {
        case 'm':
            meters = number;
            break;
        case 'cm':
            meters = number / 100;
            break;
        case 'km':
            meters = number * 1000;
            break;
        case 'mm':
            meters = number / 1000;
            break;
            case 'dcm':
                meters = number / 10;
                break;
                case 'hec':
                    meters = number * 100;
                    break;
        default:
            meters = number;
    }

    // تحويل المتر إلى الوحدة المطلوبة
    let result;

    switch (toUnit) {
        case 'm':
            result = meters;
            break;
        case 'cm':
            result = meters * 100;
            break;
        case 'km':
            result = meters / 1000;
            break;
        case 'mm':
            result = meters * 1000;
            break;
            case 'dcm':
                meters = number * 10;
                break;
                case 'hec':
                    meters = number / 100;
                    break;
        default:
            result = meters;
    }

    document.querySelector('.result').innerText =result;
}
