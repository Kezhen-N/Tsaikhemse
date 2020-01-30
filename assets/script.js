let add_buttons = document.querySelectorAll ('button'); 
//განვსაზღვრეთ ელემენტი, რომელზე კლიკითაც უნდა მოხდეს მენიუს დამატება
console.log (add_buttons); //შემოწმებისთვის რო მუშაობს
let bl=add_buttons.length;
//console.log (bl) //შემოწმებისთვის უბრალოდ

for (let i=0; i<bl; i++) {

    
    add_buttons[i].addEventListener('click', function (e) {
        console.log (i)
        this.classList.toggle ('add');
        if (this.classList.contains ('add')) {
            this.textContent="დამატებულია";
        }
        else {
            this.textContent="დამატება"
        }
    });
}

