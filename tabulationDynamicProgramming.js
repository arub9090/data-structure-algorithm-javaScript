
function fibo_table(n) {
    if(n<=2) return 1;
    fibo=[0,1,1]
    for (let i = 3; i <=n; i++) {
     fibo[i]= fibo[i-1] +fibo[i-2]
    }

    return fibo[n];
}
