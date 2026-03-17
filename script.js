function showSection(id) {
    let sections = document.querySelectorAll("section");
    sections.forEach(sec => sec.classList.add("hidden"));

    document.getElementById(id).classList.remove("hidden");
}

function answer(choice) {
    let result = document.getElementById("result");

    if (choice === "yes") {
        result.innerText = "Correct ✅ AI is used in real life!";
    } else {
        result.innerText = "Wrong ❌ AI is everywhere!";
    }
}
