var header = document.getElementById('header');
var mobiLemenu = document.getElementById('mobile-menu');
//dóng menu mobile menu
mobiLemenu.onclick = function() {
    var isClosed = header.clientHeight == 46;
    if (isClosed) {
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }

}
//tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href *= "#"]');

for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    menuItem.onclick = function(){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault(); 
        }else{
            header.style.height = null; 
        }
        
    }
}

const buyBtns = document.querySelectorAll('.js-buy-ticket')

const modal = document.querySelector('.js-modal')

const modalContainer = document.querySelector('.js-modal-container')

const modalClose =document.querySelector('.js-modal-close')

//hàm hiển thị modal mua vé(thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open')
}
//bỏ class open vào modal
function hideBuyTicket() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets)
}


    modalClose.addEventListener('click',hideBuyTicket)

    modal.addEventListener('click', hideBuyTicket)

    modalContainer.addEventListener('click', function(event) {
        event.stopPropagation()
    } )

    // conten albums

    var arr_hinh = [
        "./assets/img/albums/ddu-du-ddu-du.jpg",
        "./assets/img/albums/how-you-like-that.jpeg",
        "./assets/img/albums/ice-cream.jpg",
        "./assets/img/albums/kill-this-love.jpg",
    ];

    var index = 0;

    function next(){
        index++;
        if(index >= arr_hinh.length) index = 0;
        document.getElementById('img-1').setAttribute('src',arr_hinh[index]);

        var index2 = index + 1;
        if(index2 >= arr_hinh.length) index2 = 0;
        document.getElementById('img-2').setAttribute('src',arr_hinh[index2]);

        var index3 = index2 + 1;
        if(index3 >= arr_hinh.length) index3 = 0;
        document.getElementById('img-3').setAttribute('src',arr_hinh[index3]);

    }

    function prev(){
        index--;
        if(index < 0) index = arr_hinh.length-1;
        document.getElementById('img-1').setAttribute('src',arr_hinh[index]);

        var index2 = index - 1;
        if(index2 < 0) index2 = arr_hinh.length-1;
        document.getElementById('img-2').setAttribute('src',arr_hinh[index2]);
        
        var index3 = index2 - 2;
        if(index3 < 0) index3 = arr_hinh.length-1;
        document.getElementById('img-3').setAttribute('src',arr_hinh[index3]);

    }
