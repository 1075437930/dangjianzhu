$(document).ready(function() {
    $(".map_bl").click(function(event) {
        $(this).addClass('map_bl_ac')
    });
    $(".map_bl").hover(function() {
       $(this).addClass('map_bl_ac');
    }, function() {
       $(this).removeClass('map_bl_ac');
    });
    $(".map_bl1").hover(function() {
       $(this).addClass('map_bl1_ac');
    }, function() {
       $(this).removeClass('map_bl1_ac');
    });
     $(".map_bl2").hover(function() {
       $(this).addClass('map_bl2_ac');
    }, function() {
       $(this).removeClass('map_bl2_ac');
    });
     /*新项目*/
      $(".ulcolomnlist li a").hover(function() {
        var bc=$(this).children('.trape-0').css("backgroundColor")
        $(this).css({"border-color":bc})
    }, function() {
       $(this).css({"border-color":"#eaeaea"})
    });
      /*展开收缩*/
    /*让高版本的jquery兼容这事件toggle()事件*/
      $.fn.toggle = function( fn, fn2 ) {
      var args = arguments,guid = fn.guid || $.guid++,i=0,
      toggle = function( event ) {
        var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
        $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
        event.preventDefault();
        return args[ lastToggle ].apply( this, arguments ) || false;
      };
      toggle.guid = guid;
      while ( i < args.length ) {
        args[ i++ ].guid = guid;
      }
      return this.click( toggle );
    };
    $(".sz_ardiv").toggle(
        function(){
          $(".tsfuctionUllist").css({"height":"auto"})
          $(this).children('span').text("收起")
          $(this).children('img').removeClass('arrow_sz');
        },
       function(){
         $(".tsfuctionUllist").css({"height":460})
         $(this).children('span').text("展开")
        $(this).children('img').addClass('arrow_sz');
       }
      );
});