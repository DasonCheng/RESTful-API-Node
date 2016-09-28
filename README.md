# RESTful-API-Node


*express参数获取*

```javascript
req.param获取pathinfo中参数 /api/users/{id}
req.query获取查询参数 /api/users?name=wwx
req.body获取form提交参数
```

*JavaScript随机数*

```javascript
var Achars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var Bchars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
function generateId(n) {
    var res = "", id = "";
    for (var i = 0; i < n; i++) {
        if (i == 0) {
            id = Math.ceil(Math.random() * 8);
            res += Bchars[id];
        } else {
            id = Math.ceil(Math.random() * 9);
            res += Achars[id];
        }
    }
    return res;
}
```