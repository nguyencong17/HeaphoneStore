/**Load data product */

let courseApi = 'https://api-headphone-store.herokuapp.com/api/products?_page=1&_limit=14';
fetch(courseApi)
    .then(response => {return response.json()})
    .then(function(course){
      console.log(course);
      const isLoading = false;  
        let htmls = course.data.map(function(item){  
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
            <p>${item.price}.000 đ</p>
          </div>
            `
            isLoading = true;
        })
        
        document.getElementById('skeleton').style.display = 'none';
        let html = htmls.join('');
        document.getElementById('data-product').innerHTML = html;
        
    })
