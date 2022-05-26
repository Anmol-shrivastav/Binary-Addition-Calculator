function validateInput(input1, input2){
    for(var i=0; i<input1.length; i++){
        if(input1[i] == '1' || input1[i] == '0') continue;
        else{
            alert("You have entered worng input in block 1. Please Enter a binary number i.e 0 and 1");
            return false;
        }
    }
    for(var i=0; i<input2.length; i++){
        if(input2[i] == '1' || input2[i] == '0') continue;
        else{
            alert("You have entered worng input in block 2. Please Enter a binary number i.e 0 and 1");
            return false;
        }
    }
    return true;
}

function add(a, b){
    var i = a.length-1, j = b.length-1;
    var sum = 0, carry = 0;
    var ans = "";
    while(i >= 0 && j >= 0){
        sum = parseInt(a[i]) + parseInt(b[j]) + carry;
        carry = 0;
        if(sum == 2){
            sum = 0;
            carry = 1;
        }else if(sum == 3){
            sum = 1; 
            carry = 1;
        }
        ans += sum;
        i--;
        j--;
    }

    while(i >= 0){
        sum = parseInt(a[i])+ carry;
        carry = 0;
        if(sum == 2){
            sum = 0;
            carry = 1;
        }else if(sum == 3){
            sum = 1; 
            carry = 1;
        }
        ans += sum;
        i--;
    }
    while(j >= 0){
        sum = parseInt(b[j])+ carry;
        carry = 0;
        if(sum == 2){
            sum = 0;
            carry = 1;
        }else if(sum == 3){
            sum = 1; 
            carry = 1;
        }
        ans += sum;
        j--;
    }

    if(carry > 0)   ans += carry;

    return ans.split('').reverse().join('');
}

function solve(){
    var input1 = document.querySelector("#input1").value;
    var input2 = document.querySelector("#input2").value;

    if(!validateInput(input1, input2)) return;

    var ans = add(input1, input2);

    document.querySelector("#ans").value = ans;
}