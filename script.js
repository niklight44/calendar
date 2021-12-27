const date = new Date();

function renderCalendar() {
    //  Выводим месяц
    months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    var month = months[date.getMonth()]; // months[4]
    document.querySelector('.date h1').innerHTML = month;


    // Выводим полную дату
    document.querySelector('.date p').innerHTML = date.toDateString(); // Wed Jun 23 2021



    // Выводим дни месяца
    let days = "";          // Массив дней
    let today = new Date().getDate();
    let first_day_index = new Date(date.getFullYear(), date.getMonth(), 1).getDay();        // 0...6
    let month_length = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();         // 30 или 31
    let prev_month_length = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    let counter = 0;    // Счётчик заполненных дней. Будем использвоать его при заполнении дней следующего месяца

    
    // Тест
    // console.log('*******************************');
    // console.log(date.getFullYear());
    // console.log(date.getMonth());
    // console.log(`Сейчас месяц: ${months[date.getMonth()]}`);
    // console.log(`В нём ${month_length} дней`);

    // Дни предыдущего месяца
    for(let i = first_day_index; i > 0; i--){
        days += `<div class="prev-date">${prev_month_length-i+1}</div>`; // "+1" - это костыль
        counter++;
    }

    // Дни настоящего месяца
    for(let i=1; i<=month_length; i++){
        // Проверка на текущую дату
        if(i == today){
            days += `<div class="today">${i}</div>`;
            counter++;
            continue
        }
        days += `<div>${i}</div>`;
        counter++;
    }

    // Дни будущего месяца
    let next_days = 42 - counter;
    for(let i = 1; i <=next_days; i++){
        days += `<div class="next-date">${i}</div>`;
    }

    document.querySelector('.days').innerHTML = days;
};

renderCalendar();

document.querySelector(".prev").addEventListener("click", ()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click",()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
})

let daysdiv = document.querySelectorAll(".days div");
for(let i=0; i<daysdiv.length;i++){
    daysdiv[i].addEventListener("click",(event)=>{
        console.log(event.target.innerHTML)
    })
}
