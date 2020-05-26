function ajax(data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open(data.method, data.url, true)
        if (data.method == 'get') {
            xhr.send()
        } else {
            xhr.send(data.params)
        }
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText)
                } else {
                    reject('出错啦' + xhr.status)
                }
            }
        }
    })
}