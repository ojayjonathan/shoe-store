function edit(ele){
    $(`#${ele}`).css({'display':'block'})
    $(`.${ele}`).each(function (){
        $(this).addClass('edit-mode').attr('readOnly',false).removeClass('n-edit')
    })
}
function nEdit(ele){
    $(`#${ele}`).css({'display':'none'})
    $(`.${ele}`).each(function (){
        $(this).removeClass('edit-mode').attr('readOnly',true).addClass('n-edit')
    })
}
function formSubmit(e){
  e.preventDefault()
}
$('form').each(function(){
    $(this).on('submit',formSubmit)
})
