function start(){

    const name = document.getElementById("nameInput").value;

    if(!name.trim()){
        alert("Masukkan nama dulu!");
        return;
    }

    document.getElementById("inputScreen").classList.add("hidden");
    document.getElementById("birthdayScreen").classList.remove("hidden");

    const music = document.getElementById("music");
    music.volume = 0.4;
    music.play();

    confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 }
    });

    const text = `Selamat Ulang Tahun, ${name}!`;
    let i = 0;

    function type(){
        if(i < text.length){
            document.getElementById("text").innerHTML += text[i];
            i++;
            setTimeout(type, 70);
        }
    }

    type();
}