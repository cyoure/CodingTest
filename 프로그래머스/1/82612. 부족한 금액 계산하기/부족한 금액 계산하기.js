function solution(price, money, count) {
    let sum = 0;
    let answer =0;
    for (let i=1; i<=count; i++) {
        sum = sum + (price * i);
    }
    return (sum >= money)?(answer = sum - money):(answer = 0);
    
}