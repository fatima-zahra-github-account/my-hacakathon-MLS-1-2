let ref_section = document.getElementById('ref')
let ref_btn = document.getElementById('ref_btn')

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
})
// ================= exp section =======

let exp_section = document.getElementById('experience')
let exp_btn = document.getElementById('exp_btn')

exp_btn?.addEventListener('click', ()=>{
    exp_section!.classList.toggle('hide')
})

// ========= language ========
let lang_section = document.getElementById('language')
let lang_btn = document.getElementById('lang_btn')

lang_btn?.addEventListener('click', ()=>{
    lang_section!.classList.toggle('hide')
})

// ======== Expertise ======

let exper_section = document.getElementById('expertise')
let exper_btn = document.getElementById('exper_btn')

exper_btn?.addEventListener('click', ()=>{
    exper_section!.classList.toggle('hide')
})


// ========== Education ==========

let edu_section = document.getElementById('education')
let edu_btn = document.getElementById('edu_btn')

edu_btn?.addEventListener('click', ()=>{
    edu_section!.classList.toggle('hide')
})

// ========== contact =====

let con_section = document.getElementById('contact')
let con_btn = document.getElementById('con_btn')

con_btn?.addEventListener('click', ()=>{
    con_section!.classList.toggle('hide')
})

// =========== print button =======

 let print_btn = document.getElementById('print_btn')
 print_btn?.addEventListener('click' , ()=>{
    window.print()
 })

