export function deleteNumber(stringOld) {
    var stringNew = stringOld.replace(/[0-9]/g, '');
    return stringNew.replace(/\s+/g, '');
}

export function getTitleProduct(product) {
    var productNew = product.replace(/[0-9]/g, '@');
    var details = productNew.split('@');
    return details[0];
}

export function removeItem(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) { // only splice array when item is found
        array.splice(index, 1); // 2nd parameter means remove one item only
    }
    return array
}