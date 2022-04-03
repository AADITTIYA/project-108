function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6yPmH2Xi_/model.json",model_ready);
}
 
function model_ready(){
    console.log("MODEL IS LOADED");
    classifier.classify(gotresults);
    
}

function gotresults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        
        r = Math.floor(Math.random()*255) + 1;
        g = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "I CAN HAER - " + results[0].label; 
        document.getElementById("result_confidence").innerHTML = "ACCURACY - " + results[0].confidence.toFixed(2);
        document.getElementById("result_label").style.color = "rgb("+ r + ","+ g + ","+ b + ")"; 
        document.getElementById("result_confidence").style.color = "rgb("+ r + ","+ g + ","+ b + ")"; 

        if (results[0].label == "Cat"){
            document.getElementById("animal_image").src = "giphy.gif";
        }

        if (results[0].label == "Dog"){
            document.getElementById("animal_image").src = "200.gif";
        }

        if (results[0].label == "Background Noise"){
            document.getElementById("animal_image").src = "ear.gif";
        }
    }
}
