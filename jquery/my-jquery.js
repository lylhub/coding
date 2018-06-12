(function(window){
    var jQuery =function(selector){
        return new jQuery.fn.init(selector)
    }
    jQuery.fn ={
        css:function(key,value){
            alert('css')
        },
        html:function(){
            alert('html')
            return 'html'
        }
    }
    var init = jQuery.fn.init = function(selector){
        var slice = Array.prototype.slice;
        var dom = slice.call(document.querySelectorAll(selector))//类数组=》真数组
        
        var i,len = dom ? dom.length:0;
        for(i=0;i<len;i++){
            this[i] = dom[i]
        }
        this.length = len;
        this.selector = selector||''
    }
    init.prototype = jQuery.fn;

    window.$ = jQuery
})(window)