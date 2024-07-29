var numberOfEmployeesWhoMetTarget = function(hours, target) {
    return hours.filter((data)=>data>=target).length
};
//taget以上の要素数返す
//filterして残った要素のlengthかえせばいい