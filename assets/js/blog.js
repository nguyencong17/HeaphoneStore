/**Load data product */

let courseApi = 'http://localhost:3000/posts';
fetch(courseApi)
    .then(response => {return response.json()})
    .then(function(course){
        let htmls = course.map(function(item){  
            console.log(item.image);
            return `
            <div class="blog__view">
            <div class="blog__view--image">
                <img src=".${item.image}" alt="">
                <div class="overlay"></div>
            </div>

            <div class="blog__view--title">
                <a href="./post.html">${item.title}</a>
            </div>
            <div class="blog__view--datepost">
                ${item.author}
            </div>
            <div class="blog__view--des">
                ${item.description}
            </div>

        </div>
            `
        })

        let html = htmls.join('');
        document.getElementById('data-post').innerHTML = html;
    })