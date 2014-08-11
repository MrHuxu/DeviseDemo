// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap.min

$(document).ready(function(){
  //这些是主页上用来控制表格显示的
  var t_choose = 'all'
  var p_choose = 'all'

  var show_item = function(item, choose, value){
    if (choose == 'all' || value == choose)
  item.show()
    else
  item.hide()
  }

var t_click = function(btn){
  $('#t_opt').children('button').html(btn)
  t_choose = btn
  $('#qst_list').children('tr').each(function(){
    if ($(this).children('td').first().text() != btn) {
      $(this).hide()
    }else{
      show_item($(this), p_choose, $(this).children('td').first().next().text())
    }
  })
}

var p_click = function(btn){
  $('#p_opt').children('button').html(btn)
    p_choose = btn
    $('#qst_list').children('tr').each(function(){
      if ($(this).children('td').first().next().text() != btn) {
        $(this).hide()
      }else{
        show_item($(this), t_choose, $(this).children('td').first().text())
      }
    })
}

$('#t_all').click(function(){
  $('#t_opt').children('button').html('ALL')
  t_choose = 'all'
  if (p_choose == 'all') {
    $('#qst_list').children('tr').each(function(){
      $(this).show()
    })
  } else {
    $('#qst_list').children('tr').each(function(){
      if ($(this).children('td').first().next().text() == p_choose) {
        $(this).show()
      }
    })
  }
})

$('#t_ui').click(function(){
  t_click('UI')
})

$('#t_ads').click(function(){
  t_click('Adserving')
})

$('#t_fct').click(function(){
  t_click('Forecasting')
})

$('#t_rpt').click(function(){
  t_click('Reporting')
})

$('#p_all').click(function(){
  $('#p_opt').children('button').html('ALL')
  p_choose = 'all'
  if (t_choose == 'all') {
    $('#qst_list').children('tr').each(function(){
      $(this).show()
    })
  } else {
    $('#qst_list').children('tr').each(function(){
      if ($(this).children('td').second().text() == t_choose) {
        $(this).show()
      }
    })
  }
})

$('#p_dev').click(function(){
  p_click('DEV')
})

$('#p_qa').click(function(){
  p_click('QA')
})

})
