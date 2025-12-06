// all the  function call in js  stored in a stack sequence by sequence ......how

function one() {
    return 1;
}

function two() {
    return one() + one ();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

