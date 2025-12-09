// FAQ accordion
document.querySelectorAll(".faq-item").forEach(function (item) {
    const button = item.querySelector(".faq-question");
    const icon = item.querySelector(".faq-icon");

    button.addEventListener("click", function () {
        const isOpen = item.classList.contains("open");

        // いったん全部閉じる
        document.querySelectorAll(".faq-item").forEach(function (i) {
            i.classList.remove("open");
            const ic = i.querySelector(".faq-icon");
            if (ic) ic.textContent = "＋";
        });

        // クリックしたものだけ開く／閉じる
        if (!isOpen) {
            item.classList.add("open");
            if (icon) icon.textContent = "－";
        }
    });
});