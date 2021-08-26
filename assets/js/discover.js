
var playListSongs = document.getElementsByClassName("play-list-song");
for(var i=0; i<playListSongs.length; i++){
    playListSongs[i].addEventListener("mouseover", function (e){
        e.preventDefault();
        if(this.classList.contains("bg-opacity")){
            return;
        }
        this.classList.add("bg-opacity");
        this.getElementsByClassName("play-count")[0].classList.add("d-none");;
        var div = document.createElement("div");
        div.innerHTML = `
        <div class="playlist-song-hover-menu cursor-pointer d-flex justify-content-end">
            <div class="cursor-pointer ps-2">
                <i class="fa fa-heart text-white me-2 hover-opacity-8" title="Like"></i>
                <i class="fas fa-retweet text-white me-2 hover-opacity-8" title="repost"></i>
                <i class="fas fa-share-square text-white me-2 hover-opacity-8" title="share"></i>
                <i class="fas fa-ellipsis-h text-white me-2 hover-opacity-8" title="More"></i>
            </div>
        </div>
        `
        div.classList.add("hover-wrapper");
        this.append(div);
    });
    playListSongs[i].addEventListener("mouseleave", function (e){
        e.preventDefault();
        this.classList.remove("bg-opacity");
        this.getElementsByClassName("play-count")[0].classList.remove("d-none");
        this.getElementsByClassName("hover-wrapper")[0].remove();
    });
}

var likedSongs = document.getElementsByClassName("liked-song");
for(var i=0; i<likedSongs.length; i++){
    likedSongs[i].addEventListener("mouseover", function(e){
        e.preventDefault();
        if(this.getElementsByClassName("liked-song-hover-menu").length>0){
            return;
        }
        var div1 = document.createElement("div");
        div1.innerHTML=`<!--  -->
        <div class="liked-song-hover-menu position-absolute d-flex align-items-center bg-white end-0 top-50 translate-middle-y">
            <i class="fa fa-heart me-2 text-dark p-2 border rounded-1 hover-opacity-8 hover-border-warning" title="Like"></i>
            <i class="fas fa-ellipsis-h text-dark p-2 border rounded-1 hover-opacity-8 hover-border-warning" title="More"></i>
        </div>
        <!--  -->`
        div1.classList.add("hover-wrapper");
        this.append(div1)
        var div2 = document.createElement("div");
        div2.innerHTML=`<!--  -->
        <div
            class="position-absolute top-25 w-100 h-50 d-flex justify-content-center align-items-center">
            <i class="fas fa-play-circle text-warning hover-opacity-8"></i>
        </div>
        <!--  -->`
        div2.classList.add("hover-wrapper");
        this.getElementsByClassName("artist-img-container")[0].append(div2);
    })
    likedSongs[i].addEventListener("mouseleave", function(e){
        e.preventDefault();
        // console.log(this.getElementsByClassName("hover-wrapper")[0]);
        this.getElementsByClassName("hover-wrapper")[0].remove();
        this.getElementsByClassName("hover-wrapper")[0].remove();
    })
}

var swipePrevs = document.getElementsByClassName("swipe-prev");

for(var i=0; i<swipePrevs.length;i++){
    swipePrevs[i].addEventListener("click", function(e){
        e.preventDefault();
        var parent = e.target.parentNode;
        if(!parent.classList.contains("swiper-list")){
            parent = parent.parentNode;
        }
        console.log(parent);
        parent.getElementsByClassName("swiper-container")[0].style.transform = `translateX(0px)`;
        parent.getElementsByClassName("swipe-next")[0].classList.remove("d-none");
        this.classList.add("d-none");
    })
}

var swipeNexts = document.getElementsByClassName("swipe-next");

for(var i=0; i<swipeNexts.length;i++){
    swipeNexts[i].addEventListener("click", function(e){
        e.preventDefault();
        var parent = e.target.parentNode;
        if(!parent.classList.contains("swiper-list")){
            parent = parent.parentNode;
        }
        console.log(parent);
        var width =  parent.getElementsByClassName("swiper-container")[0].scrollWidth;
        var width2 =  parent.offsetWidth;
        var fin = width2 - width;

        parent.getElementsByClassName("swiper-container")[0].style.transform = `translateX(${fin}px)`;
        parent.getElementsByClassName("swipe-prev")[0].classList.remove("d-none");
        this.classList.add("d-none");
    })
}

var headerMenuItems = document.getElementsByClassName("header-menu-item");
for(var i=0; i<headerMenuItems.length; i++){
    if(i==0||i==1||i==2||i==3){
        headerMenuItems[i].addEventListener("click", function(e){
            for(var j=0; j<headerMenuItems.length; j++){
                headerMenuItems[j].classList.remove("bg-black");
                if(j>=4){
                    headerMenuItems[j].parentNode.getElementsByClassName("menu")[0].classList.add("d-none");
                }
            }
            this.classList.add("bg-black");
        })
        continue;
    }
    headerMenuItems[i].addEventListener("click", function(e){
        
        var parent = e.target;
        while(!parent.classList.contains("menu-open")){
            parent = parent.parentNode;
        }
        if(this.classList.contains("bg-black")){
            this.classList.remove("bg-black");
            parent.getElementsByClassName("menu")[0].classList.add("d-none");
            return;
        }
        for(var j=0; j<headerMenuItems.length; j++){
            headerMenuItems[j].classList.remove("bg-black")
            if(j>=4){
                headerMenuItems[j].parentNode.getElementsByClassName("menu")[0].classList.add("d-none");
            }
        }
        this.classList.add("bg-black");
        parent.getElementsByClassName("menu")[0].classList.remove("d-none");
    })
}
