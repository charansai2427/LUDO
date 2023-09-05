const board=document.getElementById("board");

(() => { 
    for (let i = 1; i < 16; i++) {
      for (let j = 1; j < 16; j++) {
        const div = document.createElement("div");
        // div.innerText = i + "," + j;
        board.appendChild(div);
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.border="2px solid";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.textAlig="center";
        div.setAttribute("data-cords", i + " " + j);
        
        if(i==1 && j<=6){
            div.style.backgroundColor="red";
        }
        if(i==6 && j<=6){
            div.style.backgroundColor="red";
        }

        if(j==1 && i<=6){
            div.style.backgroundColor="red";
        }
        if(j==6 && i<=6){
            div.style.backgroundColor="red";
        }

        if (i >= 1 && i <= 4 && j >= 1 && j < 5) {
            div.classList.add("red-home-inner");
          }
          if (i == 2 && j == 2) {
            div.classList.add("red-home-coin");
            div.classList.add("transform-nw");
          }
          if (i == 3 && j == 4) {
            div.classList.add("red-home-coin");
            div.classList.add("transform-ne");
          }
          if (i == 4 && j == 2) {
            div.classList.add("red-home-coin");
            div.classList.add("transform-sw");
          }
          if (i == 4 && j == 4) {
            div.classList.add("red-home-coin");
            div.classList.add("transform-se");
          }

        if(i==1 && j<=15&& j>=10){
            div.style.backgroundColor="green";
        }
        if(i==6 && j<=15 && j>=10){
            div.style.backgroundColor="green";
        }

        if(j==15 && i<=6  && i>=1){
            div.style.backgroundColor="green";
        }
        if(j==10 && i<=6 && i >=1){
            div.style.backgroundColor="green";
        }

        if (i >= 1 && i <= 4 && j >= 10 && j < 14) {
            div.classList.add("green-home-inner");
          }
          if (i == 2 && j == 11) {
            div.classList.add("green-home-coin");
            div.classList.add("transform-nw");
          }
          if (i == 3 && j == 13) {
            div.classList.add("green-home-coin");
            div.classList.add("transform-ne");
          }
          if (i == 4 && j == 11) {
            div.classList.add("green-home-coin");
            div.classList.add("transform-sw");
          }
          if (i == 4 && j == 13) {
            div.classList.add("green-home-coin");
            div.classList.add("transform-se");
          }

        if(i==10 && j<=6){
            div.style.backgroundColor="blue";
        }
        if(i==15 && j<=6){
            div.style.backgroundColor="blue";
        }

        if(j==6 && i<=15 && i>=10){
            div.style.backgroundColor="blue";
        }
        if(j==1 && i<=15 && i>=10){
            div.style.backgroundColor="blue";
        }

        if (i >= 10 && i <= 13 && j >= 1 && j < 5) {
            div.classList.add("blue-home-inner");
          }
          if (i == 11 && j == 2) {
            div.classList.add("blue-home-coin");
            div.classList.add("transform-nw");
          }
          if (i == 12 && j == 4) {
            div.classList.add("blue-home-coin");
            div.classList.add("transform-ne");
          }
          if (i == 13 && j == 2) {
            div.classList.add("blue-home-coin");
            div.classList.add("transform-sw");
          }
          if (i == 13    && j == 4) {
            div.classList.add("blue-home-coin");
            div.classList.add("transform-se");
          }
        
        if(i==10 && j<=15 && j>=10){
            div.style.backgroundColor="yellow";
        }
        if(i==15 && j<=15 && j>=10){
            div.style.backgroundColor="yellow";
        }

        if(j==10 && i<=15 && i>=10){
            div.style.backgroundColor="yellow";
        }
        if(j==15 && i<=15 && i>=10){
            div.style.backgroundColor="yellow";
        }

        if (i >= 10 && i <= 13 && j >= 10 && j < 14) {
            div.classList.add("yellow-home-inner");
          }
          if (i == 11 && j == 13) {
            div.classList.add("yellow-home-coin");
            div.classList.add("transform-nw");
          }
          if (i == 12 && j == 11) {
            div.classList.add("yellow-home-coin");
            div.classList.add("transform-ne");
          }
          if (i == 13 && j == 11) {
            div.classList.add("yellow-home-coin");
            div.classList.add("transform-sw");
          }
          if (i == 13 && j == 13) {
            div.classList.add("yellow-home-coin");
            div.classList.add("transform-se");
          }

        if(i==8 && (j>=2 && j<=6)){
            div.style.backgroundColor="red";
            div.style.border="2px solid";
        }
        if(i==7 && j==2){
            div.style.backgroundColor="red";
            div.style.border="2px solid";
        }
        if(j==8 && (i>=10 && i<=14)){
            div.style.backgroundColor="blue";
            div.style.border="2px solid";
        }
        if(i==14 && j==7){
            div.style.backgroundColor="blue";
            div.style.border="2px solid";
        }
        if(i==8 && (j>=10 && j<=14)){
            div.style.backgroundColor="yellow";
            div.style.border="2px solid";
        }
        if(i==9 && j==14){
            div.style.backgroundColor="yellow";
            div.style.border="2px solid";
        }

        if(j==8 && (i>=2 && i<=6)){
            div.style.backgroundColor="green";
            div.style.border="2px solid";
        }
        if(i==2 && j==9){
            div.style.backgroundColor="green";
            div.style.border="2px solid";
        }        

        if( i==7 && j==7){
            div.style.backgroundColor="red";
            div.style.border="2px solid";
        }

        if(j==7 && i>=7 && i<=9){
            div.style.backgroundColor="red";
            div.style.border="2px solid";
        }

        if( i==7 && j==7){
            div.style.backgroundColor="green";
            div.style.border="2px solid";
        }

        if(i==8 && j==7){
            div.classList.add("red-triangle1")           
        }
        if(i==7 && j==8){
            div.classList.add("green-triangle1")           
        }
        if(i==9 && j==8){
            div.classList.add("blue-triangle1")           
        }
        if(i==8 && j==9){
            div.classList.add("yellow-triangle1")           
        }

        
    if (i >= 6 && i <= 8 && j >= 6 && j < 9) {
        div.classList.add("home");
        div.innerText = "";
      }
      if (i == 14 && j == 7) {
        div.classList.add("blue-star");
        const img = document.createElement("img");
        img.setAttribute("src", "star.svg");
        div.innerText = "";
        div.append(img);
      }
      if (i >= 14 && i <= 13 && j == 7) {
        div.classList.add("blue-safe");
      }
      if (i == 2 && j == 9) {
        div.classList.add("green-star");
        const img = document.createElement("img");
        img.setAttribute("src", "star.svg");
        div.innerText = "";
        div.append(img);
      }
      if (i >= 7 && i <= 5 && j == 7) {
        div.classList.add("green-safe");
      }
      if (i == 7 && j == 2) {
        div.classList.add("red-star");
        const img = document.createElement("img");
        img.setAttribute("src", "star.svg");
        div.innerText = "";
        div.append(img);
      }
      if (j >= 1 && j <= 5 && i == 1) {
        div.classList.add("red-safe");
      }
      if (i == 9 && j == 14) {
        div.classList.add("yellow-star");
        const img = document.createElement("img");
        img.setAttribute("src", "star.svg");
        div.innerText = "";
        div.append(img);
      }
      if (j >= 9 && j <= 13 && i == 8) {
        div.classList.add("yellow-safe");
      }
      if (i == 9 && j == 3) {
        const img = document.createElement("img");
        img.setAttribute("src", "star.svg");
        div.innerText = "";
        div.append(img);
      }
      if (i == 3 && j == 7) {
        const img = document.createElement("img");
        img.setAttribute("src", "star.svg");
        div.innerText = "";
        div.append(img);
      }
      if (i == 7 && j == 13) {
        const img = document.createElement("img");
        img.setAttribute("src", "star.svg");
        div.innerText = "";
        div.append(img);
      }
      if (i == 13 && j == 9) {
        const img = document.createElement("img");
        img.setAttribute("src", "star.svg");
        div.innerText = "";
        div.append(img);
      }
      div.classList.add("box");
      div.dataset.i = i;
      div.dataset.j = j;
      board.append(div);
      }
    }
})();