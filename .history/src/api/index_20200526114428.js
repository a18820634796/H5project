function ajax(data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open(data.method, data.url, true)
        if (data.method == 'get') {
            xhr.send()
        } else {
            xhr.send(data.params)
        }
    })
}