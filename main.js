var dog=0;
var cat=0;
var cow=0;
var tiger=0;
var bgn=0;

function startClassifications(){

    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hqNIKrFBZ/model.json', modelReady);
    
    }
    
    function modelReady(){
    classifier.classify(gotResult);
    
    }

    function gotResult(error, results) {
        if(error) {
         console.error(error);
        }
        else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g= Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = 'i can hear- ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy- ' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById('ear');

        
        
        if (results[0].label == "barking") {
        img.src = "dog.gif";
        dog = dog+1;
        
        
        }
        
        else if (results[0].label== "growling") {
            img.src = "tiger.gif";
            tiger = tiger+1;
         
        }
        
        else if (results[0].label== "meowing") {
            img.src = "cat.gif";
            cat = cat+1;
        
        }

        else if (results[0].label== "mooing") {
            img.src = "cow.gif";
            cow = cow+1;
        
        }
        
        else {
            img.src = "bgn.gif";
            bgn = bgn+1;
        
        }
        }
        }