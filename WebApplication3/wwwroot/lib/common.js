export default class Common {
    // 同步方法
    static add(a, b) {
        return a + b;
    }

    // 异步方法
    static async fetchData(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    // 使用 jQuery 进行 AJAX 请求的异步方法
    static fetchWithJQuery(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    resolve(data);
                },
                error: function (error) {
                    reject(error);
                }
            });
        });
    }

    // 表单数据序列化
    static serializeForm(form) {
        const obj = {};
        const formData = new FormData(form);
        formData.forEach((value, key) => {
            obj[key] = value;
        });
        return JSON.stringify(obj);
    }

    // 表单提交
    static async submitForm(form, url) {
        try {
            const formData = Common.serializeForm(form);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Submit form error:', error);
            throw error;
        }
    }
}
