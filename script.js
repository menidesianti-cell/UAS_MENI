function showPage(pageId) {
    function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    alert("Terima kasih " + name + ", pesan Anda berhasil dikirim!");

    event.target.reset();
}

    const sections = document.querySelectorAll("section");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(pageId).classList.add("active");
}
