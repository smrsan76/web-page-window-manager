var sjs_winmgr = (function(){

    //A Window Sample Class
    var win_elems = [],
        first_mousedown_x = null,
        first_mousedown_y = null,
        first_win_x = null,
        first_win_y = null,
        tab_mousedown = false,
        current_win = null,
        winmgr_overlay = {
            showFlag: false,
            element: null
        },
        return_obj = {
            add: function(opts){

                var newWin = {};
                newWin.elem_container = S("$new","div");
                newWin.elem_tab = S("$new","div");
                newWin.elem_body = S("$new","div");
                newWin.elem_title = S("$new","div");
                newWin.elem_inner_body = S(S("$new","div")).addClass("javasnake-winmgr-inner-body")[0];
                newWin.moveAble = true;
                newWin.maximized = false;
                //User options
                newWin.win_width = (opts && typeof opts.width === "number")? opts.width:250;
                newWin.win_height = (opts && typeof opts.height === "number")? opts.height:100;
                newWin.win_dir = (opts && typeof opts.dir === "string")? opts.dir:"ltr";
                newWin.win_x = (opts && typeof opts.x)? opts.x:null;
                newWin.win_y = (opts && typeof opts.y)? opts.y:null;
                newWin.close_btn_flag = (opts && typeof opts.closeBtn === "boolean")? opts.closeBtn:true;
                newWin.maximize_btn_flag = (opts && typeof opts.maximizeBtn === "boolean")? opts.maximizeBtn:false;
                winmgr_overlay.showFlag = (opts && typeof opts.overlay === "boolean")? opts.overlay:false;

                //Show Overlay
                if(winmgr_overlay.showFlag && winmgr_overlay.element === null){

                    winmgr_overlay.element = S(S("$new","div")).addClass("javasnake-winmgr-overlay")[0];
                    S(document.body).appendChild(winmgr_overlay.element,true);

                }

                //Tab buttons
                if(newWin.close_btn_flag) {
                    newWin.elem_close_btn = S(S("$new", "div")).addClass("javasnake-winmgr-tab-btn-close").html("&times;")[0];
                    S(newWin.elem_close_btn)
                        .onClick(function () {
                            S(newWin.elem_container).remove();
                            for(var i=0; i<win_elems.length; i++){
                                if(win_elems[i] === newWin){
                                    win_elems.splice(i,1);
                                    break;
                                }
                            }
                            if(win_elems.length === 0){
                                S(winmgr_overlay.element).remove();
                                winmgr_overlay.element = null;
                                winmgr_overlay.showFlag = false;
                            }
                        });
                    newWin.elem_tab.appendChild(newWin.elem_close_btn);
                }
                if(newWin.maximize_btn_flag){
                    newWin.elem_maximize_btn = S(S("$new","div")).addClass("javasnake-winmgr-tab-btn-max").html("[-]")[0];
                    S(newWin.elem_maximize_btn)
                        .onClick(function(){

                            if(!newWin.maximized) {//MAXimize it
                                S(newWin.elem_container)
                                    .c$$("top: 0;left: 0");
                                S(newWin.elem_body)
                                    .css({
                                        width: "100vw",
                                        height: "100vh"
                                    });
                                newWin.moveAble = false;
                                newWin.elem_maximize_btn.innerHTML = "]-[";
                            } else {//MINimize it
                                S(newWin.elem_container)
                                    .css({
                                        top: newWin.not_maximize_top + "px",
                                        left: newWin.not_maximize_left + "px",
                                        right: " ",
                                        bottom: " "
                                    });
                                S(newWin.elem_body)
                                    .css({
                                        width: newWin.win_width + "px",
                                        height: newWin.win_height + "px"
                                    });
                                newWin.moveAble = true;
                                newWin.elem_maximize_btn.innerHTML = "[-]";
                            }
                            newWin.maximized = !newWin.maximized;

                        });
                    newWin.elem_tab.appendChild(newWin.elem_maximize_btn);
                }

                //Before Maximize Positions
                newWin.not_maximize_left = null;
                newWin.not_maximize_top  = null;

                newWin.elem_container.appendChild(newWin.elem_tab,true);
                newWin.elem_container.appendChild(newWin.elem_body,true);
                document.body.appendChild(newWin.elem_container);
                win_elems.push(newWin);

                S(newWin.elem_title)
                    .addClass("javasnake-winmgr-title");

                S(newWin.elem_tab)
                    .addClass("javasnake-winmgr-tab")
                    .onMouseDown(function(event){
                        if(first_mousedown_x === null) {
                            first_mousedown_x = event.clientX;
                            first_mousedown_y = event.clientY;
                            first_win_x = S.styleToNum(S(this).parent().realStyle("left",null))[0];
                            first_win_right = S.styleToNum(S(this).parent().realStyle("right",null))[0];
                            first_win_y = S.styleToNum(S(this).parent().realStyle("top",null))[0];
                            first_win_bottom = S.styleToNum(S(this).parent().realStyle("bottom",null))[0];
                            tab_mousedown = true;
                            current_win = newWin;
                        }
                        for(var i=0; i<win_elems.length; i++){

                            if(win_elems[i] != newWin &&
                                S.styleToNum(win_elems[i].elem_container.style.zIndex)[0] > S.styleToNum(newWin.elem_container.style.zIndex)[0]){
                                win_elems[i].elem_container.style.zIndex = S.styleToNum(win_elems[i].elem_container.style.zIndex)[0] - 1;
                            }

                        }
                        newWin.elem_container.style.zIndex = 1000 + win_elems.length;
                    })
                    .onDblClick(function(){

                        if(newWin.maximize_btn_flag) {

                            if (!newWin.maximized) {//MAXimize it
                                S(newWin.elem_container)
                                    .c$$("top: 0;left: 0");
                                S(newWin.elem_body)
                                    .css({
                                        width: "100vw",
                                        height: "100vh"
                                    });
                                newWin.moveAble = false;
                                newWin.elem_maximize_btn.innerHTML = "]-[";
                            } else {//MINimize it
                                S(newWin.elem_container)
                                    .css({
                                        top: newWin.not_maximize_top + "px",
                                        left: newWin.not_maximize_left + "px",
                                        right: " ",
                                        bottom: " "
                                    });
                                S(newWin.elem_body)
                                    .css({
                                        width: newWin.win_width + "px",
                                        height: newWin.win_height + "px"
                                    });
                                newWin.moveAble = true;
                                newWin.elem_maximize_btn.innerHTML = "[-]";
                            }
                            newWin.maximized = !newWin.maximized;

                        }

                    });
                newWin.elem_tab.appendChild(newWin.elem_title);

                S(newWin.elem_body)
                    .addClass("javasnake-winmgr-body")
                    .c$$({
                        width: newWin.win_width + "px",
                        height: newWin.win_height + "px"
                    })[0].appendChild(
                        S(newWin.elem_inner_body)
                            .css({
                                direction: newWin.win_dir
                            })[0]
                    );
                S(newWin.elem_container)
                    .addClass("javasnake-winmgr-win")
                    .onMouseDown(function(){

                        for(var i=0; i<win_elems.length; i++){

                            if(win_elems[i] != newWin &&
                                S.styleToNum(win_elems[i].elem_container.style.zIndex)[0] > S.styleToNum(newWin.elem_container.style.zIndex)[0]){
                                win_elems[i].elem_container.style.zIndex = S.styleToNum(win_elems[i].elem_container.style.zIndex)[0] - 1;
                            }

                        }
                        newWin.elem_container.style.zIndex = 1000 + win_elems.length;

                    })
                    .c$$("z-index: " + (1000 + win_elems.length));

                if(typeof newWin.win_x === "string") {

                    switch(newWin.win_x.toLowerCase().trim()){
                        case "right":
                            S(newWin.elem_container).css({
                                left: (S.getViewportSize()[0] - newWin.win_width) + "px"
                            });
                            break;
                        case "left":
                            S(newWin.elem_container).css({
                                left: 0 + "px"
                            });
                            break;
                        case "center":
                            S(newWin.elem_container).css({
                                left: Math.abs((S.getViewportSize()[0]/2) - (newWin.win_width/2)) + "px"
                            });
                            break;
                        default:
                            S(newWin.elem_container).css({
                                left: (typeof newWin.win_x === "number") ? newWin.win_x + "px" : Math.abs((S.getViewportSize()[0]/2) - (newWin.win_width/2)) + "px"
                            });
                            break;
                    }

                } else {

                    S(newWin.elem_container).css({
                        left: (typeof newWin.win_x === "number") ? newWin.win_x + "px" : Math.abs((S.getViewportSize()[0]/2) - (newWin.win_width/2)) + "px"
                    });

                }
                if(typeof newWin.win_y === "string"){

                    switch(newWin.win_y.toLowerCase().trim()){
                        case "bottom":
                            S(newWin.elem_container).css({
                                top: (S.getViewportSize()[1] - newWin.win_height) + "px"
                            });
                            break;
                        case "top":
                            S(newWin.elem_container).css({
                                top: 0 + "px"
                            });
                            break;
                        case "center":
                            S(newWin.elem_container).css({
                                top: Math.abs((S.getViewportSize()[1]/2) - (newWin.win_height/2)) + "px"
                            });
                            break;
                        default:
                            S(newWin.elem_container).css({
                                top: (typeof newWin.win_y === "number") ? newWin.win_y + "px" : ((win_elems.length * 30) - 30) + "px"
                            });
                            break;
                    }

                } else {

                    S(newWin.elem_container).css({
                        top: (typeof newWin.win_y === "number") ? newWin.win_y + "px" : ((win_elems.length * 30) - 30) + "px"
                    });

                }

                newWin.not_maximize_top = S.styleToNum(S.realStyle(newWin.elem_container,"top",null))[0];
                newWin.not_maximize_left = S.styleToNum(S.realStyle(newWin.elem_container,"left",null))[0];

                return {
                    content:function(content_options){
                        if(typeof content_options === "object"){
                            switch(typeof content_options["body"]){
                                case "string":
                                    newWin.elem_inner_body.innerHTML = content_options["body"];
                                    break;
                                case "object":
                                    S(newWin.elem_inner_body).appendChild(content_options["body"]);
                                    break;
                            }
                            if(content_options["title"]){
                                newWin.elem_title.innerHTML = content_options["title"];
                            }
                        } else {
                            throw Error("javaSnake_winmgr: Please put object value in content function.");
                        }
                    }
                };
            }
            ,getWinList: function(){ return win_elems; }
        };
    S(document)
        .onMouseUp(function(){

        //Remove all coordinates
        first_mousedown_x = null;
        first_mousedown_y = null;
        first_win_x = null;
        first_win_y = null;
        tab_mousedown = false;
        current_win = null;

    })
        .onMouseMove(function(event){
        if(tab_mousedown && current_win.moveAble) {

            var newLeft = first_win_x + (event.clientX - first_mousedown_x),
                newTop = first_win_y + (event.clientY - first_mousedown_y),
                newRight = first_win_right + (first_mousedown_x - event.clientX),
                newBottom = first_win_bottom + (first_mousedown_y - event.clientY);

            if(newRight > 0) {
                S(current_win.elem_container).css({
                    left: (newLeft < 0) ? 0 : newLeft + "px",
                    right: "auto"
                });
            } else {
                S(current_win.elem_container).css({
                    left: "auto",
                    right: "0px"
                });
                if(
                    S.styleToNum(S.realStyle(current_win.elem_container,"left",null))[0] <= 0
                ){
                    S(current_win.elem_container).css({
                        left: "0px"
                    });
                }
            }
            if(newBottom > 0) {
                S(current_win.elem_container).css({
                    top: (newTop < 0) ? 0 : newTop + "px",
                    bottom: "auto"
                });
            } else {
                S(current_win.elem_container).css({
                    top: "auto",
                    bottom: "0px"
                });
                if(
                    S.styleToNum(S.realStyle(current_win.elem_container,"top",null))[0] <= 0
                ){
                    S(current_win.elem_container).css({
                        top: "0px"
                    });
                }
            }

            current_win.not_maximize_top = S.styleToNum(S.realStyle(current_win.elem_container,"top",null))[0];
            current_win.not_maximize_left = S.styleToNum(S.realStyle(current_win.elem_container,"left",null))[0];

        }
    },false);
    S(window)
        .onResize(function(){

            for(var i=0; i<win_elems.length; i++){

                var rightPos = S.styleToNum(S.realStyle(win_elems[i].elem_container,"right",null))[0];
                var bottomPos = S.styleToNum(S.realStyle(win_elems[i].elem_container,"bottom",null))[0];
                var leftPos = S.styleToNum(S.realStyle(win_elems[i].elem_container,"left",null))[0];
                var topPos = S.styleToNum(S.realStyle(win_elems[i].elem_container,"top",null))[0];

                if( rightPos < 0 ){

                    if( leftPos > 0 ) {
                        S(win_elems[i].elem_container)
                            .css({
                                right: "0px",
                                left: leftPos + rightPos + "px"
                            });
                    } else {
                        S(win_elems[i].elem_container)
                            .css({
                                right: "0px",
                                left: "0px"
                            });
                    }

                } else {

                    S(win_elems[i].elem_container)
                        .css({
                            right: "auto"
                        });

                }
                if( bottomPos < 0 ){

                    if( topPos > 0 ) {
                        S(win_elems[i].elem_container)
                            .css({
                                bottom: "0px",
                                top: topPos + bottomPos + "px"
                            });
                    } else {
                        S(win_elems[i].elem_container)
                            .css({
                                bottom: "0px",
                                top: "0px"
                            });
                    }

                } else {

                    S(win_elems[i].elem_container)
                        .css({
                            bottom: "auto"
                        });

                }

            }

        },false);

    return sjs_winmgr_func;
    function sjs_winmgr_func(){ return return_obj; }

}());