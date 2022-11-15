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
