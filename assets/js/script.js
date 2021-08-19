var signIn_UpBtns = document.querySelectorAll(".sign-in-btn, .sign-up-btn");
for (var i = 0; i < signIn_UpBtns.length; i++) {
    signIn_UpBtns[i].addEventListener("click", function (e) {
        var div = document.createElement("div");
        div.innerHTML = `<div class="login-dialog w-100 d-flex justify-content-center position-relative min-vh-100 align-items-center position-fixed top-0 start-0">
        <div class="close-login-dialog position-absolute cursor-pointer end-8px top-4px">
            <i class="fas fa-times fa-2x"></i>
        </div>
        <div class="w-50 h-fit bg-white d-flex flex-column dialog p-5 align-items-center">
            <button class="btn btn-primary fs-6 text-light py-2 w-100 mb-3" type="submit">Continue with
                Facebook</button>
            <button class="btn btn-outline-dark fs-6 text-dark py-2 w-100 mb-3" type="submit">Continue with
                Google</button>
            <button class="btn btn-dark fs-6 text-light py-2 w-100 mb-1" type="submit">Continue with Apple</button>
            <span class="mb-1">------------------ or ------------------</span>
            <form class="w-100 d-flex flex-column">
                <input type="text" class="bg-light shadow-none form-control w-100"
                    placeholder="Your email address or profile URL">
                <button class="btn btn-warning fs-6 mt-3 text-light py-2 px-4 w-100 sign-in-btn" type="submit">Continue</button>
            </form>
        </div>
    </div>`;
        div.querySelector(".close-login-dialog").addEventListener("click", function(e){
            var closeBtn = e.target;
            var dialog = closeBtn.parentNode.parentNode.parentNode;
            dialog.remove();
        })
        document.body.append(div);
    })
}