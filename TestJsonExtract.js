var obj = {
    "items":[
        {"id":"BLE89-A0-123-384","weight":"100","quantity":3},
        {"id":"BLE10-A0-123-321","weight":"100","quantity":4}
    ],
    "country":"JUS",
    "region":"A",
    "timeout":"FILLER"
};

var quantities = {};
obj.items.forEach(function (item) {
    quantities[item.id] = item.quantity;
});
var object = quantities[item.id];
console.log(`\nResponse :\n${JSON.stringify(object)}`)