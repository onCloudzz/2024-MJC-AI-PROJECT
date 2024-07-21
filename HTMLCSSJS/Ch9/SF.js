function QOne(){
    let cnt = 0;
    for (let i = 0; i < 1000; i++){
        if(i % 2 === 0){
            cnt++;
        }
    }
    console.log(`짝수의 개수는 ${cnt}개 입니다.`);
}

function QTwo(){
    let gugu = "";
    for (let i = 2; i < 10; i++){
        for (let j = 1; j < 10; j++){
            gugu += `${i} x ${j} = ${i*j}\n`;
        }
    }
    console.log(gugu);
}

function QThree(){
    for(let i = 100; i < 1000; i++){
        let num = i.toString();
        let snum = num.split('');
        
        let zero = parseInt(snum[0]) ** 3;
        let one = parseInt(snum[1]) ** 3;
        let two = parseInt(snum[2]) ** 3;
    
        if (i === zero + one + two) {
            console.log(i);
        }
    }
}