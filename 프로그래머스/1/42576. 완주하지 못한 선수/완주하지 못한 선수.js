function solution(participant, completion) {
    let set = {};

    for(let person of completion){
        if(!set[person]){
            set[person] = 1;
        }else{
            set[person] = set[person] + 1;
        }
    }

    for(let person of participant){
        if(!set[person] || set[person] === 0){
            return person;
        }else{
            set[person] = set[person] - 1;
        }
    }
}