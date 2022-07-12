const NEWS_API = "fcbe3784ba204dc88ed3c0dce77dd6a7";
const newsList = document.querySelector(".news--list");
//const loginForm = document.getElementById("login-form");
//const loginInput = loginForm.querySelector("input");
//const greeting = document.querySelector("#greeting");

const news = [];

const url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${NEWS_API}`;

const newsLock = document.querySelector(".news--lock");

function saveNews(){
    
    localStorage.setItem("news", JSON.stringify(news));
    
}

function newsArticle(event){
    
    newsLock.classList.add(HIDDEN_CLASSNAME);

    newsList.innerHTML = "";

    event.preventDefault();

    fetch(url).then((res) => {
        return res.json();
    }).then((data)=>{
        console.log(data);
        data.articles.forEach(article => {
            
            let articleList = document.createElement("li");
            let articleLink = document.createElement("a");
            articleLink.setAttribute("href", article.url);
            articleLink.setAttribute("target", "_blank");
            articleLink.textContent = article.title;
            articleList.appendChild(articleLink);
            newsList.appendChild(articleList);
            
            console.log(article.title);
            news.push(article.title);
            saveNews();
        })
    }).catch((error)=>{
        console.log("Not able to search for news");
    }) 
    
    

    
}



loginForm.addEventListener("submit", newsArticle);

if (storedUsername === null){
    newsLock.classList.remove(HIDDEN_CLASSNAME);
}else if(storedUsername !== null) {
    newsLock.classList.add(HIDDEN_CLASSNAME);    
}

const savedArticles = localStorage.getItem("news");

if(savedArticles !== null){
    const parsedNews = JSON.parse(savedArticles);
}