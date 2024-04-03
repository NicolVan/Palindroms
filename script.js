function chcek(){
    var text = document.getElementById("input").value;
    var result = document.getElementById("result");
    var change = text.split("");
    var newText = change.reverse();
    var newArray = newText.join('');

    if (text === newArray){
        result.innerHTML="This is a plaindrom";
    }else{
        result.innerHTML="This is not a palindrom";
    }
}