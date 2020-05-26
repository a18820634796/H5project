export function ajax(data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        var paramsUrl = "";
        if (
            JSON.stringify(data.params) !== "{}" ||
            data.params !== undefined
        ) {
            for (let index in data.params) {
                paramsUrl += index + "=" + data.params[index] + "&";
            }
            paramsUrl = paramsUrl.slice(0, paramsUrl.length - 1);
            data.url = data.url + "?" + paramsUrl;
        }

        xhr.open(data.method, data.url, true);
        xhr.send(data.params);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject("出错啦" + xhr.status);
                }
            }
        };
    });
}