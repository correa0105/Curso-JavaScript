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
    try {
        const href = element.getAttribute("href");
        const response = await fetch(href);

        if (response.status !== 200) throw new Error("ERRO 404!");

        const html = await response.text();
        loadResult(html);
    } catch (err) {
        console.log(err);
    }
}

function loadResult(response) {
    const result = document.querySelector(".resultAjax");
    result.innerHTML = response;
}
