export const sortFunc = (sortType, data) => {
    //sortType ~ sortBy is defined in filterOptions
    //data will be list of objects (with label, value, ...)
    switch (sortType) {
        case 1:
            return specifiedSort(['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'], data, 'label');
        case 2:
            return data.slice().sort((a, b) => b.value - a.value);
        case 3:
            return data.slice().sort((a, b) => a.value - b.value);
        case 4:
            return specifiedSort(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                'September', 'October', 'November', 'December'], data, 'label');
        case 5:
            return data.slice().sort((a, b) => a.label.localeCompare(b.label));
        default:
            return data;
    }
}

const specifiedSort = (orderList, data, keyName) => {
    const order = {}; //object to store item and priority
    for (let i = 0; i < orderList.length; i++) {
        //assigning priority to each item in the list
        order[orderList[i]] = i;
    }
    return data.slice().sort((a, b) => order[a[keyName]] - order[b[keyName]]);
}