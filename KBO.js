const jsonUrl =
        "https://prof-jwchi.github.io/kopo-front2026/Json/baseball.json";

      let request = new XMLHttpRequest();
      request.open("GET", jsonUrl);
      request.responseType = "json";
      request.send();

      request.addEventListener("load", function () {
        const tbody = document.getElementById("team");
        let data = request.response.list;

        let all = document.querySelectorAll("tbody tr");
        for (let i = 0; i < data.length; i++) {
          let elemen = all[i].querySelectorAll("td");

          elemen[0].innerText = i + 1;
          elemen[1].innerText = data[i].shortNameKo;
          elemen[2].innerHTML = "<img src='" + data[i].imageUrl + "' class='imgKBO'>";
          elemen[3].innerText = data[i].rank.game;
          elemen[4].innerText = data[i].rank.win;
          elemen[5].innerText = data[i].rank.draw;
          elemen[6].innerText = data[i].rank.loss;
          elemen[7].innerText = data[i].rank.wpct;
          elemen[8].innerText = data[i].rank.gb;
          elemen[9].innerText = data[i].rank.streak;
        }
      });