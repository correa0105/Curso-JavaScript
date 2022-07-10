const containerAjaxTest = document.querySelector(".option-six-content");

containerAjaxTest.addEventListener("click", event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === "a") {
        event.preventDefault();
        loadPage(element);
    }
})

async function loadPage(element) {
    const href = element.getAttribute("href");

    const objConfig = {
        method: "GET",
        url: href,
    };

    try {
        loadResult(await request(objConfig));
    } catch(err) {
        console.log(err);
    }

}

function loadResult(response) {
    const result = document.querySelector(".resultAjax");
    result.innerHTML = response;
}

function request(obj) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener("load", () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};