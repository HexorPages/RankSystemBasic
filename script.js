let kills = 140, deaths = 0;
let exp = (kills - deaths) / 2;
let rank_back = document.querySelector('.rank-back');
function draw_level(level,exp) {
    switch (level) {
        case 1: // level 1 to level 2
            rank_back.innerHTML = `
                <h1 class="rank-title">Rank Information</h1>
                <div class="level-back">
                    <h1 id="now-level-title">Level 1</h1>
                    <div class="level-1">
                        <i style="color: blueviolet; text-shadow: 0px 0px 5px blueviolet;" class="fas fa-question-circle"></i>
                        <h1 id="now-level-exp"><i style="color: blueviolet; text-shadow: 0px 0px 5px blueviolet;"  class="fab fa-connectdevelop"></i> ${exp} <span style="color: blueviolet; text-shadow: 0px 0px 5px blueviolet;">exp</span></h1>
                    </div>
                </div>
                <div class="level-bar-back">
                    <div style="width:${(exp / 20) * 100}%; background-color: blueviolet; box-shadow: 0px 0px 5px blueviolet;" id="leverl-bar"></div>
                </div>  
                <div class="level-back">
                    <h1 id="next-level-title">Level 2</h1>
                    <div class="level-2">
                        <i style="color: green; text-shadow: 0px 0px 5px green;" class="far fa-star"></i>
                    </div>
                    <h1 id="next-level-exp"><i style="color: green; text-shadow: 0px 0px 5px green;"  class="fab fa-connectdevelop"></i>${20} <span style="color: green; text-shadow: 0px 0px 5px green;">exp</span></h1>
                </div>
            `;
        break;
        case 2: // level 2 to level 3
            rank_back.innerHTML = `
            <h1 class="rank-title">Rank Information</h1>
            <div class="level-back">
                <h1 id="now-level-title">Level 2</h1>
                <div class="level-2">
                    <i style="color: green; text-shadow: 0px 0px 5px green;" class="far fa-star"></i>
                    <h1 id="now-level-exp"><i style="color: green; text-shadow: 0px 0px 5px green;"  class="fab fa-connectdevelop"></i> ${exp} <span style="color: green; text-shadow: 0px 0px 5px green;">exp</span></h1>
                </div>
            </div>
            <div class="level-bar-back">
                <div style="width:${((exp - 19) / 20) * 100}%; background-color: green; box-shadow: 0px 0px 5px green;" id="leverl-bar"></div>
            </div>  
            <div class="level-back">
                <h1 id="next-level-title">Level 3</h1>
                <div class="level-3">
                    <i style="color:dodgerblue; text-shadow: 0px 0px 5px dodgerblue;" class="fas fa-star"></i>
                </div>
                <h1 id="next-level-exp"><i style="color: dodgerblue; text-shadow: 0px 0px 5px dodgerblue;"  class="fab fa-connectdevelop"></i>${40} <span style="color: dodgerblue; text-shadow: 0px 0px 5px dodgerblue;">exp</span></h1>
            </div>
            `;
        break;
        case 3: // level 3 to level 4
            rank_back.innerHTML = `
                <h1 class="rank-title">Rank Information</h1>
                <div class="level-back">
                <h1 id="now-level-title">Level 3</h1>
                    <div class="level-3">
                        <i style="color: dodgerblue; text-shadow: 0px 0px 5px dodgerblue;" class="fas fa-star"></i>
                        <h1 id="now-level-exp"><i style="color: dodgerblue; text-shadow: 0px 0px 5px dodgerblue;"  class="fab fa-connectdevelop"></i> ${exp} <span style="color: dodgerblue; text-shadow: 0px 0px 5px dodgerblue;">exp</span></h1>
                    </div>
                </div>
                <div class="level-bar-back">
                    <div style="width:${((exp - 39) / 20) * 100}%; background-color: dodgerblue; box-shadow: 0px 0px 5px dodgerblue;" id="leverl-bar"></div>
                </div>  
                <div class="level-back">
                    <h1 id="next-level-title">Level 4</h1>
                    <div class="level-4">
                        <i style="color:deeppink; text-shadow: 0px 0px 5px deeppink;" class="fas fa-star"></i>
                        <i style="color:deeppink; text-shadow: 0px 0px 5px deeppink;" class="far fa-star"></i>
                    </div>
                    <h1 id="next-level-exp"><i style="color: deeppink; text-shadow: 0px 0px 5px deeppink;"  class="fab fa-connectdevelop"></i> ${60}  <span style="color: deeppink; text-shadow: 0px 0px 5px deeppink;">exp</span></h1>
                </div>
            `;
        break;
        case 4: // level 4 to level 5 (Top Level)
            rank_back.innerHTML = `
                <h1 class="rank-title">Rank Information</h1>
                <div class="level-back">
                    <h1 id="now-level-title">Level 4</h1>
                    <div class="level-4">
                        <i style="color:deeppink; text-shadow: 0px 0px 5px deeppink;" class="fas fa-star"></i>
                        <i style="color:deeppink; text-shadow: 0px 0px 5px deeppink;" class="far fa-star"></i>
                        <h1 id="now-level-exp"><i style="color: deeppink; text-shadow: 0px 0px 5px deeppink;"  class="fab fa-connectdevelop"></i> ${exp} <span style="color: deeppink; text-shadow: 0px 0px 5px deeppink;">exp</span></h1>
                    </div>
                </div>
                <div class="level-bar-back">
                    <div style="width: ${((exp - 59) / 20) * 100}%; background-color: deeppink; box-shadow: 0px 0px 5px deeppink;" id="leverl-bar"></div>
                </div>  
                <div class="level-back">
                    <h1 id="next-level-title">Level 5</h1>
                    <div class="level-5">
                        <i style="color:firebrick; text-shadow: 0px 0px 5px firebrick;" class="fas fa-star"></i>
                        <i style="color:firebrick; text-shadow: 0px 0px 5px firebrick;" class="fas fa-star"></i>
                    </div>
                    <h1 id="next-level-exp"><i style="color: firebrick; text-shadow: 0px 0px 5px firebrick;"  class="fab fa-connectdevelop"></i> ${80}  <span style="color: firebrick; text-shadow: 0px 0px 5px firebrick;">exp</span></h1>
                </div>
    
            `;
        break;
    }
}

if(exp <= 19){  // 0
    draw_level(1,exp);
    console.log("Level 1 -> " + exp);
}else if(exp <= 39){ // 20 - 40 kills
    draw_level(2,exp);
    console.log("Level 2 -> " + exp);
}else if(exp <= 59){ // 40 - 80 kills
    draw_level(3,exp);
    console.log("Level 3 -> " + exp);
}else if(exp <= 79){ // 60 - 120 kills
    draw_level(4,exp);
    console.log("Level 4 -> " + exp);
}else{
    draw_level(4,80);
    console.log("Level 4 -> " + 80);
}