/**Load data product */

let courseApi = 'http://localhost:3000/products';
fetch(courseApi)
    .then(response => {return response.json()})
    .then(function(course){
        let htmls = course.map(function(item){  
            console.log(item.image);
            return `
            <div class="item">
            <div class="around">
              <img src="${item.image}" alt="">
              <div class="overlay-quickview">
                Quick View
                <a href="#my-dialog"></a>
              </div>
              <div class="overlay-action">
                <i class="fas fa-shopping-cart"></i>
                <i class="fas fa-heart"></i>
              </div>
            </div>
            <ul class="vote">
              <li class="vote-item"><i class="fas fa-star"></i></li>
              <li class="vote-item"><i class="fas fa-star"></i></li>
              <li class="vote-item"><i class="fas fa-star"></i></li>
              <li class="vote-item"><i class="fas fa-star"></i></li>
              <li class="vote-item"><i class="fas fa-star"></i></li>
            </ul>
            <a href="detail.html">
              <h4>${item.name}</h4>
            </a>
            <p>${item.price}</p>
          </div>
            `
        })

        let html = htmls.join('');
        document.getElementById('data-product').innerHTML = html;
    })