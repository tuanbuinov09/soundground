const uploadNavLinks = document.getElementsByClassName("upload__navlink");
for(var i=0; i<uploadNavLinks.length; i++){
    uploadNavLinks[i].addEventListener("click", function(e){
        for(var j=0; j<uploadNavLinks.length; j++){
            if(j==i){
                break;
            }
            uploadNavLinks[j].classList.remove("active");
        }
        const target = e.target;
        var parent = target.parentNode;
        while(!parent.classList.contains("upload__navlink")){
            parent = parent.parentNode;
        }
        parent.classList.add("active");
    })
}