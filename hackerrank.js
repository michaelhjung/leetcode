// 1 MONTH PREPARATION KIT QUESTIONS:


// =============== WEEK 1 ============= //
// ---------- 1. PLUS MINUS ---------- //
function plusMinus(arr) {
    const totalCount = arr.length;
    let countNeg = 0;
    let countZero = 0;
    let countPos = 0;

    arr.forEach(num => {
        if (num < 0) countNeg++;
        else if (num > 0) countPos++;
        else countZero++;
    });

    console.log((countPos/totalCount).toFixed(6));
    console.log((countNeg/totalCount).toFixed(6));
    console.log((countZero/totalCount).toFixed(6));
}

// ---------- 2. MINI-MAX SUM ---------- //
function miniMaxSum(arr) {
    let min = arr[0];
    let max = arr[0];

    arr.forEach(num => {
        if (num < min) min = num;
        if (num > max) max = num;
    });

    const minIndex = arr.indexOf(min);
    const maxIndex = arr.indexOf(max);

    let minList;
    let maxList;

    // TAKE OUT MAX #:
    if (maxIndex === 0) minList = arr.slice(1);
    else if (maxIndex === arr.length - 1) minList = arr.slice(0, maxIndex);
    else minList = [...arr.slice(0, maxIndex), ...arr.slice(maxIndex + 1)];

    // TAKE OUT MIN #:
    if (minIndex === 0) maxList = arr.slice(1);
    else if (minIndex === arr.length - 1) maxList = arr.slice(0, minIndex);
    else maxList = [...arr.slice(0, minIndex), ...arr.slice(minIndex + 1)];

    const sumMin = minList.reduce((prev, curr) => prev + curr, 0);
    const sumMax = maxList.reduce((prev, curr) => prev + curr, 0);

    console.log(`${sumMin} ${sumMax}`);
}

// ---------- 3. TIME CONVERSION ---------- //
// ---------- 4. SPARSE ARRAYS ---------- //
// ---------- 5. LONELY INTEGER ---------- //
// ---------- 6. FLIPPING BITS ---------- //
// ---------- 7. DIAGONAL DIFFERENCE ---------- //
// ---------- 8. COUNTING SORT 1 ---------- //
// ---------- 9. PANGRAMS ---------- //
// ---------- 10. PERMUTING TWO ARRAYS ---------- //
// ---------- 11. SUBARRAY DIVISION 1 ---------- //
// ---------- 12. XOR STRINGS 2 ---------- //


// =============== WEEK 2 ============= //
// =============== WEEK 3 ============= //
// =============== WEEK 4 ============= //
