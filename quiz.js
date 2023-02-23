
function calculateMBTI() {

    var extrovert = 0;
    var introvert = 0;
    var feeling = 0;
    var thinking = 0;
    var intuitive = 0;
    var sensing = 0;
    var perceiving = 0;
    var judging = 0;
    var i;
    
    //QUESTION 1
    var q1 = document.getElementsByName('q1');
    for (i=0; i<q1.length; i++) {
        if (q1[i].checked) {
            if (q1[i].value == "disagree" ) {
                extrovert += 2;
            }        
           if (q1[i].value == "somewhat-disagree" ) {
                extrovert++;
            }
           if (q1[i].value == "somewhat-agree" ) {
                introvert++;
            }
           if (q1[i].value == "agree" ) {
                introvert += 2;
            }
        }
    }
    //QUESTION 2
    var q2 = document.getElementsByName('q2');
    for (i=0; i<q2.length; i++) {
        if (q2[i].checked) {
            if (q2[i].value == "disagree" ) {
                thinking += 2;
            }        
           if (q2[i].value == "somewhat-disagree" ) {
                thinking++;
            }
           if (q2[i].value == "somewhat-agree" ) {
                feeling++;
            }
           if (q2[i].value == "agree" ) {
                feeling += 2;
            }
        }
    }

    //QUESTION 3
    var q3 = document.getElementsByName('q3');
    for (i=0; i<q3.length; i++) {
        if (q3[i].checked) {
            if (q3[i].value == "disagree" ) {
                intuitive += 2;
            }        
           if (q3[i].value == "somewhat-disagree" ) {
                intuitive++;
            }
           if (q3[i].value == "somewhat-agree" ) {
                sensing++;
            }
           if (q3[i].value == "agree" ) {
                sensing += 2;
            }
        }
    }
   

    
    //QUESTION 4
    var q4 = document.getElementsByName('q4');
    for (i=0; i<q4.length; i++) {
        if (q4[i].checked) {
            if (q4[i].value == "disagree" ) {
                feeling += 2;
            }        
           if (q4[i].value == "somewhat-disagree" ) {
                feeling++;
            }
           if (q4[i].value == "somewhat-agree" ) {
                thinking++;
            }
           if (q4[i].value == "agree" ) {
                thinking += 2;
            }
        }
    }

    //QUESTION 5
    var q5 = document.getElementsByName('q5');
    for (i=0; i<q5.length; i++) {
        if (q5[i].checked) {
            if (q5[i].value == "disagree" ) {
                perceiving += 2;
            }        
           if (q5[i].value == "somewhat-disagree" ) {
                perceiving++;
            }
           if (q5[i].value == "somewhat-agree" ) {
                judging++;
            }
           if (q5[i].value == "agree" ) {
                judging += 2;
            }
        }
    }

    //QUESTION 6
        var q6 = document.getElementsByName('q6');
    for (i=0; i<q6.length; i++) {
        if (q6[i].checked) {
            if (q6[i].value == "disagree" ) {
                intuitive += 2;
            }        
           if (q6[i].value == "somewhat-disagree" ) {
                intuitive++;
            }
           if (q6[i].value == "somewhat-agree" ) {
                sensing++;
            }
           if (q6[i].value == "agree" ) {
                sensing += 2;
            }
        }
    }
    
    //QUESTION 7
    var q7 = document.getElementsByName('q7');
    for (i=0; i<q7.length; i++) {
        if (q7[i].checked) {
            if (q7[i].value == "disagree" ) {
                perceiving += 2;
            }        
           if (q7[i].value == "somewhat-disagree" ) {
                perceiving++;
            }
           if (q7[i].value == "somewhat-agree" ) {
                judging++;
            }
           if (q7[i].value == "agree" ) {
                judging += 2;
            }
        }
    }
   
    //QUESTION 8
    var q8 = document.getElementsByName('q8');
    for (i=0; i<q8.length; i++) {
        if (q8[i].checked) {
            if (q8[i].value == "disagree" ) {
                sensing += 2;
            }        
           if (q8[i].value == "somewhat-disagree" ) {
                sensing++;
            }
           if (q8[i].value == "somewhat-agree" ) {
                intutive++;
            }
           if (q8[i].value == "agree" ) {
                intuitive += 2;
            }
        }
    }

    //QUESTION 9
    var q9 = document.getElementsByName('q9');
    for (i=0; i<q9.length; i++) {
        if (q9[i].checked) {
            if (q9[i].value == "disagree" ) {
                introvert += 2;
            }        
           if (q9[i].value == "somewhat-disagree" ) {
                introvert++;
            }
           if (q9[i].value == "somewhat-agree" ) {
                extrovert++;
            }
           if (q9[i].value == "agree" ) {
                extrovert += 2;
            }
        }
    }

    //QUESTION 10
    var q10 = document.getElementsByName('q10');
    for (i=0; i<q10.length; i++) {
        if (q10[i].checked) {
            if (q10[i].value == "disagree" ) {
                intuitive += 2;
            }        
           if (q10[i].value == "somewhat-disagree" ) {
                intuitive++;
            }
           if (q10[i].value == "somewhat-agree" ) {
                sensing++;
            }
           if (q10[i].value == "agree" ) {
                sensing += 2;
            }
        }
    }
   
    //QUESTION 11
        var q11 = document.getElementsByName('q11');
        for (i=0; i<q11.length; i++) {
        if (q11[i].checked) {
            if (q11[i].value == "disagree" ) {
                sensing += 2;
            }        
           if (q11[i].value == "somewhat-disagree" ) {
                sensing++;
            }
           if (q11[i].value == "somewhat-agree" ) {
                intuitive++;
            }
           if (q11[i].value == "agree" ) {
                intuitive += 2;
            }
        }
    }
    
    //QUESTION 12
    var q12 = document.getElementsByName('q12');
    for (i=0; i<q12.length; i++) {
        if (q12[i].checked) {
            if (q12[i].value == "disagree" ) {
                feeling += 2;
            }        
           if (q12[i].value == "somewhat-disagree" ) {
                feeling++;
            }
           if (q12[i].value == "somewhat-agree" ) {
                thinking++;
            }
           if (q12[i].value == "agree" ) {
                thinking += 2;
            }
        }
    }
    
    //QUESTION 13
    var q13 = document.getElementsByName('q13');
    for (i=0; i<q13.length; i++) {
        if (q13[i].checked) {
            if (q13[i].value == "disagree" ) {
                introvert += 2;
            }        
           if (q13[i].value == "somewhat-disagree" ) {
                introvert++;
            }
           if (q13[i].value == "somewhat-agree" ) {
                extrovert++;
            }
           if (q13[i].value == "agree" ) {
                extrovert += 2;
            }
        }
    }
  
    //QUESTION 14
    var q14 = document.getElementsByName('q14');
    for (i=0; i<q14.length; i++) {
        if (q14[i].checked) {
            if (q14[i].value == "disagree" ) {
                sensing += 2;
            }        
           if (q14[i].value == "somewhat-disagree" ) {
                sensing++;
            }
           if (q14[i].value == "somewhat-agree" ) {
                intuitive++;
            }
           if (q14[i].value == "agree" ) {
                intuitive += 2;
            }
        }
    }
    

    //QUESTION 15
    var q15 = document.getElementsByName('q15');
    for (i=0; i<q15.length; i++) {
        if (q15[i].checked) {
            if (q15[i].value == "disagree" ) {
                thinking += 2;
            }        
           if (q15[i].value == "somewhat-disagree" ) {
                thinking++;
            }
           if (q15[i].value == "somewhat-agree" ) {
                feeling++;
            }
           if (q15[i].value == "agree" ) {
                feeling += 2;
            }
        }
    }
    
    //QUESTION 16
    var q16 = document.getElementsByName('q16');
    for (i=0; i<q16.length; i++) {
        if (q16[i].checked) {
            if (q16[i].value == "disagree" ) {
                judging += 2;
            }        
           if (q16[i].value == "somewhat-disagree" ) {
                judging++;
            }
           if (q16[i].value == "somewhat-agree" ) {
                perceiving++;
            }
           if (q16[i].value == "agree" ) {
                perceiving += 2;
            }
        }
    }
    
    //QUESTION 17
    var q17 = document.getElementsByName('q17');
    for (i=0; i<q17.length; i++) {
        if (q17[i].checked) {
            if (q17[i].value == "disagree" ) {
                intuitive += 2;
            }        
           if (q17[i].value == "somewhat-disagree" ) {
                intuitive++;
            }
           if (q17[i].value == "somewhat-agree" ) {
                sensing++;
            }
           if (q17[i].value == "agree" ) {
                sensing += 2;
            }
        }
    }
    


    //CALCULATING
    if (introvert>=extrovert && intuitive>=sensing && thinking>=feeling && judging>=perceiving) { 
        document.getElementById('getresults').innerHTML = "<a href=\"results/intj_result.html\"><h2>Get Your Result</h2></a>"; //INTJ    
    } else if (introvert>=extrovert && intuitive>=sensing && thinking>=feeling && perceiving>judging){
        document.getElementById('getresults').innerHTML = "<a href=\"results/intp_result.html\"><h2>Get Your Result</h2></a>"; //INTP
    } else if (extrovert>introvert && intuitive>=sensing && thinking>=feeling && judging>=perceiving){
        document.getElementById('getresults').innerHTML = "<a href=\"results/entj_result.html\"><h2>Get Your Result</h2></a>"; //ENTJ
    } else if (extrovert>introvert && intuitive>=sensing && thinking>=feeling && perceiving>judging){
        document.getElementById('getresults').innerHTML = "<a href=\"results/entp_result.html\"><h2>Get Your Result</h2></a>"; //ENTP
    } else if (introvert>=extrovert && intuitive>=sensing && feeling>thinking && judging>=perceiving){
        document.getElementById('getresults').innerHTML = "<a href=\"results/infj_result.html\"><h2>Get Your Result</h2></a>"; //INFJ
    } else if (introvert>=extrovert && intuitive>=sensing && feeling>thinking && perceiving>judging){
        document.getElementById('getresults').innerHTML = "<a href=\"results/infp_result.html\"><h2>Get Your Result</h2></a>"; //INFP
    } else if (extrovert>introvert && intuitive>=sensing && feeling>thinking && judging>=perceiving){
        document.getElementById('getresults').innerHTML = "<a href=\"results/enfj_result.html\"><h2>Get Your Result</h2></a>"; //ENFJ
    } else if (extrovert>introvert && intuitive>=sensing && feeling>thinking && perceiving>judging){
        document.getElementById('getresults').innerHTML = "<a href=\"results/enfp_result.html\"><h2>Get Your Result</h2></a>"; //ENFP
    } else if (introvert>=extrovert && sensing>intuitive && thinking>=feeling && judging>=perceiving){
        document.getElementById('getresults').innerHTML = "<a href=\"results/istj_result.html\"><h2>Get Your Result</h2></a>"; //ISTJ
    } else if (introvert>=extrovert && sensing>intuitive && feeling>=thinking && judging>=perceiving){
        document.getElementById('getresults').innerHTML = "<a href=\"results/isfj_result.html\"><h2>Get Your Result</h2></a>"; //ISFJ
    } else if (extrovert>introvert && sensing>intuitive && thinking>=feeling && judging>=perceiving){
        document.getElementById('getresults').innerHTML = "<a href=\"results/estj_result.html\"><h2>Get Your Result</h2></a>"; //ESTJ
    } else if (extrovert>introvert && sensing>intuitive && feeling>=thinking && judging>=perceiving){
        document.getElementById('getresults').innerHTML = "<a href=\"results/esfj_result.html\"><h2>Get Your Result</h2></a>"; //ESFJ
    } else if (introvert>=extrovert && sensing>intuitive && thinking>=feeling && perceiving>=judging){
        document.getElementById('getresults').innerHTML = "<a href=\"results/istp_result.html\"><h2>Get Your Result</h2></a>"; //ISTP
    } else if (introvert>=extrovert && sensing>intuitive && feeling>thinking && perceiving>=judging){
        document.getElementById('getresults').innerHTML = "<a href=\"results/isfp_result.html\"><h2>Get Your Result</h2></a>"; //ISFP
    } else if (extrovert>introvert && sensing>intuitive && feeling>thinking && perceiving>=judging){
        document.getElementById('getresults').innerHTML = "<a href=\"results/esfp_result.html\"><h2>Get Your Result</h2></a>"; //ESFP
    } else {
        document.getElementById('getresults').innerHTML = "<a href=\"results/enfp_result.html\"><h2>Get Your Result</h2></a>"; //ENFP
    }
}  
