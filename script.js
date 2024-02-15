const checkbox = document.getElementById('switch');
let cnt = 0;
let cnt2 = 0;
checkbox.addEventListener('click', () => {
        cnt++;
        if(cnt%2==1){
                alert("ナイトモードになります。");
        }else{
                alert("通常モードになります。");
        }
        const switch2 = document.querySelector('.switch2');
        const backstyle = document.querySelector("html");
        const hed = document.querySelector("header");
        const style = document.getElementsByClassName("text2");
        switch2.textContent = checkbox.checked ? 'ナイトモード':"通常モード";
        backstyle.style.backgroundColor = checkbox.checked ? "black": "#DC143C";
        backstyle.style.color = checkbox.checked ? "green": "white";
        hed.style.backgroundColor = checkbox.checked ? "black": "#DC143C";
        hed.style.color = checkbox.checked ? "green": "white";
})


const faceimag = document.getElementById("face-img");
faceimag.addEventListener("click",()=>{
        const url = [];
        url.push("IMG_5067.jpg","ミニオン①.jpeg","IMG_3494.jpeg");
        faceimag.removeAttribute('src');
        faceimag.setAttribute("src",url[cnt2%3]);
        cnt2++;
})

const back = document.querySelector(".backpage");
back.addEventListener("click",()=>{
        window.scroll({top: 0, behavior: 'smooth'});
})