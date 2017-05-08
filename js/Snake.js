/*
 *	In The Name Of God
 *	javaSnake > JavaScript
 *	By SMRSAN
 *	
 *	WebLog:
 *			http://smrsan.blogfa.com/
 *	WebSite:
 *			http://www.javaSnake.com/
 */
//Start Of javaSnake In Function Mode
var jSnake = (function(slct, index){

	//javaSnake Main Variables
	/*var JS_MAIN_Something....
	*/

	//Main SELECTOR Funciton
	"use strict";
	return  function(slct, index){

		/*DANGER*/
		var S = []; /*Main Variable For Functions & Matched Elements !!!*/

		if(typeof slct === 'string'){

			var slct2 = slct.toLowerCase();

			if(slct2.search(/^(\s*[\$])/) === -1){

				var temp = document.querySelectorAll(slct);//Using Temp For Read-Only Properties
				for(var i=0; i<temp.length; i++){ S.push(temp[i]); }//Make Them ReWritable !!!

			} else {

				/*
				 *	Commands Of 'SELECTOR'() Function !
				 */

				switch(slct2.replace(/([\s]+(?=[\S]+))|([\s]+(?![\S]+))/gim,'')){

					case '$ajax':

						S.push(readyAjax_());

						// Ajax Functions //

						S.getAjax = function(){ return S[0]; };
						S.open = function(type,url,sync){

							if(typeof type === 'string' && typeof url === 'string' && typeof sync === 'boolean'){

								S[0].open(type,url,sync);
								return S;//Continue Developing

							} else {

								throw Error("javaSnake_ajax: Check Your Ajax Code\nTypeOf open() Function Arguments Are Wrong !");

							}

						};
						S.get = function(url,sync){

							if(typeof url === 'string' && typeof sync === 'boolean'){

								S[0].open("GET",url,sync);
								return S;//Continue Developing

							} else {

								throw Error("javaSnake_ajax: Check Your Ajax Code\nTypeOf get() Function Argument(s) Are Wrong !");

							}

						};
						S.post = function(url,sync){


							if(typeof url === 'string' && typeof sync === 'boolean'){

								S[0].open("POST",url,sync);
								return S;//Continue Developing

							} else {

								throw Error("javaSnake_ajax: Check Your Ajax Code\nTypeOf post() Function Arguments Are Wrong !");
							}

						};
						S.send = function(values){

							if(values === undefined){

								S[0].send();

							} else {
								if(typeof values === 'string'){

									S[0].send(values);

								} else {

									throw Error("javaSnake_ajax: Check Your Ajax Code\nPut String Value In send() Function !");

								}
							}
							return S;//Continue Developing

						};
						S.readyChange = function(func){

							if(typeof func === 'function'){
								S[0].onreadystatechange = func;
								return S;//Continue Developing
							} else {

								throw Error("javaSnake_ajax: Check Your Ajax Code\nPut A Function Value In readyChange() Function !");

							}

						};
						S.isDone = function(){

							return (S[0].readyState === (XMLHttpRequest.DONE || ActiveXObject.DONE));

						};
						S.reqHead = function(property,value){

							if(typeof property === 'string' && typeof value === 'string'){

								S[0].setRequestHeader(property,value);

							} else {

								throw Error("javaSnake_ajax: Check Your Ajax Code\nPut String Values In Both Arguments Of reqHead() Function !");

							}

						};
						S.readyState = function(){

							return S[0].readyState;

						};
						S.status = function(){

							return S[0].status;

						};
						S.statusTxt = function(){

							return S[0].statusText;

						};
						S.respTxt = function(){

							return S[0].responseText;

						};
						S.respXml = function(){

							return S[0].responseXML;

						};
						//End Of Ajax Functions

					return S; //End Of {$ajax} Command
					case '$about':
					return {
						creator          : "SMRSAN",
						webLog           : "http://smrsan.blogfa.com/",
						webSite          : ["http://www.javaSnake.com/","http://www.javaSnake.org/","http://www.javaSnake.ir/"],
						version          : "v1.0.0",
						firstPublishYear : "1395 | 2016",
						publishYear      : "1396 | 2017"
					}; //End Of {$about} Command
					case '$arr':
					return []; //End Of {$arr} Command
					case '$obj':
					return {}; //End Of {$obj} Command
					case '$reg':
					return new RegExp((index !== undefined)? index:null); //End Of {$reg} Command
					case '$new':

						if(typeof index === 'string'){

							try{

								return document.createElement(index);

							} catch(e) {

								throw Error("javaSnake_S_{$new}: Enter A Valid String For Name Of New Element In The Second Argument Of 'SELECTOR'() Function !");

							}

						} else if(typeof index === 'object'){

							try{

								return index.cloneNode(true);

							} catch(e) {

								throw Error("javaSnake_S_{$new}: The Object That You Put In The Second Argument Of 'SELECTOR'() Function\nWas Not A DOMObject !");

							}

						} else {

							throw Error("javaSnake_S_{$new}: Put String/DOMObject In The Second Argument Of 'SELECTOR'() Function !");

						}

					break; //End Of {$new} Command
					//***************Develop It !***************
					//You Can Also Make Your Own Commands Here !

				}

			}

		} else if(slct.length){ //If General Array//

			for(var i=0; i<slct.length; i++){ //Selects Elements In General Array

				if(typeof slct[i] === 'string'){ //If String In General Array

					var slctTemp = "";
						slctTemp += slct[i];

					if(i === (slct.length-1) && slct.length > 1 && slctTemp.search(/[$\$]/) !== -1){
						slct[i] = slct[i].toLowerCase();
						switch (slct[i]){
							case '$odd':
								var temp = [];
								for(var j=0; j<S.length; j++){
									if(j === 0 || j%2 === 0){
										temp.push(S[j]);
									}
								}
								S = temp;
							break;
							case '$even':
								var temp = [];
								for(var j=0; j<S.length; j++){
									if(j === 1 || j%2 !== 0){
										temp.push(S[j]);
									}
								}
								S = temp;
							break;
							case '$first':
								S = [S[0]];
							break;
							case '$last':
								S = [S[S.length-1]];
							break;
							default:
								throw Error("javaSnake_S: The Command That You Entered,\n[" + slct[i] + "] Was Invalid !");
							break;
						}
					} else {
						var temp = document.querySelectorAll(slct[i]);
						for(var j=0; j<temp.length; j++){
							S.push(temp[j]);
						}
					}

				} else if(slct[i].length){ //If Array In General Array

					var elems = [];

					for(var j=0; j<slct[i].length; j++){ //Each Selects

						var selects = slct[i][j];

						if(j === (slct[i].length-1) && slct[i].length > 1){

							if(typeof selects === 'string'){ //If Ender String

								var selects_Temp = "";
									selects_Temp += selects;

								if(selects_Temp.search(/[$\$]/) !== -1){//If An Ender Command
									selects = selects.toLowerCase();
									switch (selects){
										case "$odd":
											var temp = [];
											for(var k=0; k<elems.length; k++){
												if(k === 0 || k%2 === 0){
													temp.push(elems[k]);
												}
											}
											elems = temp;
											for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
										break;
										case "$even":
											var temp = [];
											for(var k=0; k<elems.length; k++){
												if(k === 1 || k%2 !== 0){
													temp.push(elems[k]);
												}
											}
											elems = temp;
											for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
										break;
										case "$first":
											elems = [elems[0]];
											for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
										break;
										case "$last":
											elems = [elems[elems.length-1]];
											for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
										break;
										default:
											throw Error("javaSnake_S: The Command That You Entered,\n[" + selects + "] Was Invalid !");
										break;
									}
								} else {

									//Just Selects That
									selects = document.querySelectorAll(selects);
									for(var k=0; k<selects.length; k++){
										elems.push(selects[k]);
									}
									for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S

								}

							} else if(typeof selects === 'object'){ //If Ender Object
								elems.push(selects);
								for(var k=0; k<elems.length; k++){ S.push(elems[k]); } //Push Elements In S
							} else if(typeof selects === 'number'){ //If Ender Number
								S.push(elems[selects]); //Push Elements In S
							}
						} else {
							//Push Selected Elements From Inner Array Selectors
							if(typeof selects === 'string'){
								var temp = document.querySelectorAll(selects);
								for(var k=0; k<temp.length; k++){
									if(slct[i].length > 1) elems.push(temp[k]);
									else S.push(temp[k]);
								}
							} else if(selects.length){
								for(var k=0; k<selects.length; k++){
									if(slct[i].length > 1) elems.push(selects[k]);
									else S.push(selects[k]);
								}
							} else if(typeof selects === 'object'){
								if(slct[i].length > 1) elems.push(selects);
								else S.push(selects);
							}
						}

					}

				} else if(typeof slct[i] === 'object'){ //If Object In General Array
					S.push(slct[i]);
				} else {
					S = [S[Number(slct[i])]];
				}

			}

		} else if(typeof slct === 'function'){

			window.jSnake.addEvent(slct, "load", window, false);

		} else if(typeof slct === 'object'){

			//DANGER > DO NOT MODIFY HERE !!!
			//  IF YOU LOST BETWEEN CODES !!!

			if(slct.setRequestHeader){ //This Is An Ajax Object > AJAX Object Mode

				S = [slct];

				// Ajax Functions //

				S.getAjax = function(){ return S[0]; };
				S.open = function(type,url,sync){

					if(typeof type === 'string' && typeof url === 'string' && typeof sync === 'boolean'){

						S[0].open(type,url,sync);
						return S;//Continue Developing

					} else {

						throw Error("javaSnake_ajax: Check Your Ajax Code\nTypeOf open() Function Arguments Are Wrong !");

					}

				};
				S.get = function(url,sync){

					if(typeof url === 'string' && typeof sync === 'boolean'){

						S[0].open("GET",url,sync);
						return S;//Continue Developing

					} else {

						throw Error("javaSnake_ajax: Check Your Ajax Code\nTypeOf get() Function Argument(s) Are Wrong !");

					}

				};
				S.post = function(url,sync){


					if(typeof url === 'string' && typeof sync === 'boolean'){

						S[0].open("POST",url,sync);
						return S;//Continue Developing

					} else {

						throw Error("javaSnake_ajax: Check Your Ajax Code\nTypeOf post() Function Arguments Are Wrong !");
					}

				};
				S.send = function(values){

					if(values === undefined){

						S[0].send();

					} else {
						if(typeof values === 'string'){

							S[0].send(values);

						} else {

							throw Error("javaSnake_ajax: Check Your Ajax Code\nPut String Value In send() Function !");

						}
					}
					return S;//Continue Developing

				};
				S.readyChange = function(func){

					if(typeof func === 'function'){

						S[0].onreadystatechange = func;
						return S;//Continue Developing

					} else {

						throw Error("javaSnake_ajax: Check Your Ajax Code\nPut A Function Value In readyChange() Function !");

					}

				};
				S.isDone = function(){

					return (S[0].readyState === (XMLHttpRequest.DONE || ActiveXObject.DONE));

				};
				S.reqHead = function(property,value){

					if(typeof property === 'string' && typeof value === 'string'){

						S[0].setRequestHeader(property,value);

					} else {

						throw Error("javaSnake_ajax: Check Your Ajax Code\nPut String Values In Both Arguments Of reqHead() Function !");

					}

				};
				S.readyState = function(){

					return S[0].readyState;

				};
				S.status = function(){

					return S[0].status;

				};
				S.statusTxt = function(){

					return S[0].statusText;

				};
				S.respTxt = function(){

					return S[0].responseText;

				};
				S.respXml = function(){

					return S[0].responseXML;

				};
				//End Of Ajax Functions

				return S;

			} else { //Normal DOMObject Mode

				S = [slct];

			}

		}

		if(index !== undefined){ //Check General Index Adjustment
			if(typeof index === 'string'){
				index = index.toLowerCase();
				switch (index){
					case "$odd":
						var temp = [];
						for(var i=0; i<S.length; i++){
							if(i === 0 || i%2 === 0){
								temp.push(S[i]);
							}
						}
						S = temp;
					break;
					case "$even":
						var temp = [];
						for(var i=0; i<S.length; i++){
							if(i === 1 || i%2 !== 0){
								temp.push(S[i]);
							}
						}
						S = temp;
					break;
					case "$first":
						S = [S[0]];
					break;
					case "$last":
						S = [S[S.length-1]];
					break;
					default:
						S = [S[Number(index)]];
					break;
				}
			} else if(typeof index === 'number'){
				S = [S[index]];
			}
		}


		var ARRAY = []; //
		S.splice  = ARRAY.splice; //
		S.split   = ARRAY.split ; // REDEFINE TO TRUST
		S.push    = ARRAY.push  ; //
		////////////////////////////


		//Start Of Function Variables
		S.c$$ = function (){
		/*
		 *	c$$ Function
		 *	For Easier Style
		 *	In JavaScript
		 */

			var props = [],
				vals  = [],
				returnProp = null;
			/*
			 *	Load Properties And Values
			 */
			for(var j=0; j<arguments.length; j++){ //ForEach Argument
				var style = arguments[j];
				if(typeof style == 'string'){ //If String Style

					var arr = style.split(/[\:|;]/g);
					for(var i=0; i<arr.length; i += 2) props.push(arr[i].replace(/ /g,""));
					for(var i=1; i<arr.length; i += 2) vals.push(arr[i]);

				} else if(typeof style == 'object'){ //If Object Style
					for(var i=0; i<S.length; i++){
						for(var myStyleName in style){
							if(myStyleName in S[i].style){

								if(style[myStyleName].toLowerCase().trim() == "$get"){//Get Property Command
									returnProp = S[i].style[myStyleName];
									continue;
								}

								S[i].style[myStyleName] = style[myStyleName];

							}
						}
					}
				}
			}
			/*
			 *	Do Styles On Each Elements
			 */

			for(var j=0; j<props.length; j++){   //ForEach Style
				for(var i=0; i<this.length; i++){ //ForEach Element

					props[j] = props[j].toLowerCase();

					var p = window.jSnake.styleToJs(props[j]);

					if(vals[j].toLowerCase().trim() === "$get"){//Get Property Command

						returnProp = S[i].style[p];
						continue;

					}

					if(p in this[i].style) this[i].style[p] = vals[j];

				}
			}

			return (returnProp != null)? returnProp:S;/*Continue Developing !!!*/
		};
		S.css = function (){
		/*
		 *	Function For Set Some Style (Like jQuery Library)
		 */
			for(var g=0; g<arguments.length; g++){

				if(typeof arguments[g] === 'object'){

					var styleObj = arguments[g];

					for(var i=0; i<S.length; i++){

						for(var myStyleName in styleObj){

							if(myStyleName in S[i].style){

								S[i].style[myStyleName] = styleObj[myStyleName];

							}

						}

					}

				} else if(typeof arguments[g] === 'string'){

					if(typeof arguments[g+1] === 'string'){

						if(arguments[g] in this[0].style){

							for(var i=0; i<this.length; i++){

								this[i].style[arguments[g]] = arguments[g+1];
								g++;
							}

						}

					} else {

						if(arguments[g] in this[0].style){

							return this[0].style[arguments[g]];

						}

					}

				}

			}
			return S; /*Continue Developing !!!*/
		};
		S.remove = function (){
		/*
		 *	Function For Remove Selected Elements
		 */
			for(var i=0; i<this.length; i++){
				this[i].parentElement.removeChild(this[i]);
			}
		};
		S.appendChild = function (element,dontCopy,pushFlag){
		/*
		 *	Function For AppendChild To Selected Elements
		 */

			var appendedChilds = [];
			dontCopy = (dontCopy === undefined)? false:dontCopy;

			switch(typeof element){
				case 'object':
				    if(!dontCopy) {//Use cloneNode
                        for (var i = 0; i < this.length; i++) {
                            var copy = element.cloneNode(true);
                            this[i].appendChild(copy);
                            appendedChilds.push(copy);
                        }
                    } else {//Do Not Use cloneNode
				        this[0].appendChild(element);
				        appendedChilds.push(element);
                    }
				break;
				case 'array':
					for(var j=0; j<element.length; j++){

                        if(!dontCopy) {//Use cloneNode
                            for (var i = 0; i < this.length; i++) {
                                var copy = element[j].cloneNode(true);
                                this[i].appendChild(copy);
                                appendedChilds.push(copy);
                            }
                        } else {//Do Not Use cloneNode
                            this[0].appendChild(element[j]);
                            appendedChilds.push(element[j]);
                        }

					}
				break;
			}

			if(pushFlag === undefined) pushFlag = false;

			if(pushFlag){
				S.splice(0,this.length);
				for(var i=0; i<appendedChilds.length; i++)
					S.push(appendedChilds[i]);
			}

			return S; /*Continue Developing !!!*/
		};
		S.before = function (element,pushFlag){
		/*
		 *	Function For insertAfter Of Selected Elements
		 */

			if(pushFlag === undefined) pushFlag = false;

			var pushedElems = [];

			switch(typeof element){

				case 'object':

					try{
						if(element.length){//IF ARRAY
							for(var j=0; j<element.length; j++){
								for(var i=0; i<this.length; i++){
									var copy = element[j].cloneNode(true);
									this[i].parentNode.insertBefore(copy, this[i]);
									if(pushFlag) pushedElems.push(copy);
								}
							}

							if(pushFlag){
								S.splice(0,this.length);
								for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
							}

							return S; /*Continue Developing !!!*/
						} else {//IF OBJECT
							for(var i=0; i<this.length; i++){
								var copy = element.cloneNode(true);
								this[i].parentNode.insertBefore(copy, this[i]);
								if(pushFlag) pushedElems.push(copy);
							}

							if(pushFlag){
								S.splice(0,this.length);
								for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
							}

							return S; /*Continue Developing !!!*/
						}
					} catch(e) {

						throw Error("javaSnake: Put DOMObject In before() Function !");

					}

				break;
				case 'string':

					element = document.createTextNode(element);

					for(var i=0; i<this.length; i++){
						var copy = element.cloneNode(true);
						this[i].parentNode.insertBefore(copy, this[i]);
						if(pushFlag) pushedElems.push(copy);
					}

					if(pushFlag){
						S.splice(0,this.length);
						for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
					}

					return S; /*Continue Developing !!!*/

				break;
				default:

					throw Error("javaSnake: Put DOMObject Or String Value In before() Function !");

				break;

			}
		};
		S.after = function (element,pushFlag){
		/*
		 *	Function For insertAfter Of Selected Elements
		 */

			if(pushFlag === undefined) pushFlag = false;

			var pushedElems = [];

			switch(typeof element){

				case 'object':

					try{
						if(element.length){//IF ARRAY
							for(var j=0; j<element.length; j++){
								for(var i=0; i<this.length; i++){
									var copy = element[j].cloneNode(true);
									if(pushFlag) pushedElems.push(copy);
									if(this[i].nextSibling){
										this[i].parentNode.insertBefore(copy, this[i].nextSibling);
									} else {
										var elemIndex = indexOfElement_(this[i]);
										if(elemIndex + 1 == this[i].parentElement.childNodes.length){
											this[i].parentNode.appendChild(copy);
										} else {
											this[i].parentNode.insertBefore(copy, this[i].parentNode.childNodes[elemIndex + 1]);
										}
									}
								}
							}

							if(pushFlag){
								S.splice(0,this.length);
								for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
							}

							return S; /*Continue Developing !!!*/
						} else {//IF OBJECT
							for(var i=0; i<this.length; i++){
								var copy = element.cloneNode(true);
								if(pushFlag) pushedElems.push(copy);
								if(this[i].nextSibling){
									this[i].parentNode.insertBefore(copy, this[i].nextSibling);
								} else {
									var elemIndex = indexOfElement_(this[i]);
									if(elemIndex + 1 == this[i].parentElement.childNodes.length){
										this[i].parentNode.appendChild(copy);
									} else {
										this[i].parentNode.insertBefore(copy, this[i].parentNode.childNodes[elemIndex + 1]);
									}
								}
							}

							if(pushFlag){
								S.splice(0,this.length);
								for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
							}

							return S; /*Continue Developing !!!*/
						}
					} catch(e) {

						throw Error("javaSnake: Put DOMObject Value In after() Function !");

					}

				break;
				case 'string':

					element = document.createTextNode(element);

					for(var i=0; i<this.length; i++){
						var copy = element.cloneNode(true);
						if(pushFlag) pushedElems.push(copy);
						if(this[i].nextSibling){
							this[i].parentNode.insertBefore(copy, this[i].nextSibling);
						} else {
							var elemIndex = indexOfElement_(this[i]);
							if(elemIndex + 1 == this[i].parentElement.childNodes.length){
								this[i].parentNode.appendChild(copy);
							} else {
								this[i].parentNode.insertBefore(copy, this[i].parentNode.childNodes[elemIndex + 1]);
							}
						}
					}

					if(pushFlag){
						S.splice(0,this.length);
						for(var i=0; i<pushedElems.length; i++) S.push(pushedElems[i]);
					}

					return S; /*Continue Developing !!!*/

				break;
				default:

					throw Error("javaSnake: Put DOMObject Or String Value In after() Function !");

				break;

			}
		};
		S.indexOfThese = function(){
		/*
		 *	Function For Getting Index Of An Element
		 */
			var indexArr = [];

			for(var i=0; i<this.length; i++){
				var indexNum = 0;
				var temp = null;
				if(this[i].previousSibling){
					temp = this[i].previousSibling;
					indexNum += 1;
					while(temp.previousSibling){
						temp = temp.previousSibling;
						indexNum += 1;
					}
				}
				indexArr.push(indexNum);
			}

			return indexArr;
		};
		S.html = function (html, continueDevFlag){
		/*
		 *	Function For Putting innerHTML(s)
		 */
			if(continueDevFlag === undefined){ continueDevFlag = false };
			if(html !== undefined){
				for(var i=0; i<this.length; i++){
					this[i].innerHTML = html;
				}
			} else {
				if(!continueDevFlag){ return S[0].innerHTML; }
			}
			return S; /*Continue Developing !!!*/
		};
		S.text = function (text,continueDevFlag){
		/*
		 *	Function For Setting/Getting Text(s)
		 */
			if(continueDevFlag === undefined){ continueDevFlag = false };

			if(text !== undefined){
				for(var i=0; i<this.length; i++){
					this[i].textContent = text;
				}
			} else {
				if(!continueDevFlag){
					var texts = '';
					for(var i=0; i<this.length; i++){
						texts += this[i].textContent;
					}
					return texts;
				}
			}
			return S; /*Continue Developing !!!*/
		};
		S.val = function (value, continueDevFlag){
		/*
		 *	Function For Setting/Getting Values(s)
		 */
			if(continueDevFlag === undefined){ continueDevFlag = false }

			if(value !== undefined){

				for(var i=0; i<S.length; i++){
					S[i].value = value;
				}

			} else {
				if(!continueDevFlag){
					return S[0].value;
				}
			}
			return S; /*Continue Developing !!!*/
		};
		S.attr = function (){
		/*
		 *	Function For Setting/Getting Values(s)
		 */
			var rtrn = null,
				addFlag = false;

			if(typeof arguments[arguments.length-1] == "boolean") addFlag = arguments[arguments.length-1];

			for(var i=0; i<S.length; i++){/*Each Element*/
				for(var j=0; j<arguments.length; j++){/*Each Argument*/
					var atr = arguments[j];
					switch(typeof atr){
						case 'string':

							if(typeof arguments[j+1] == 'string'){

								if(addFlag){/*Current Attributes + New Attributes*/

									if(S[i].hasAttribute(atr)){

										S[i].setAttribute(atr, S[i].getAttribute(atr) + " " + arguments[j+1]);

									} else {

										S[i].setAttribute(atr, arguments[j+1]);

									}

								} else {/*Just New Attributes*/

									S[i].setAttribute(atr, arguments[j+1]);

								}

								j++;

							} else {

								rtrn = S[0].getAttribute(atr);

							}

						break;
						case 'object':

							if(!addFlag){/*Just New Attributes*/

								for(var value in atr){ S[i].setAttribute(value, atr[value]); }

							} else {/*Current Attributes + New Attributes*/

								for(var value in atr){

									if(S[i].hasAttribute(value)){

										S[i].setAttribute(value, S[i].getAttribute(value) + " " + atr[value]);

									} else {

										S[i].setAttribute(value, atr[value]);

									}

								}

							}

						break;
						case 'boolean': /*NoThing!*/ break;
						default:

							throw Error("javaSnake: Enter String Or Object Value In attr() Function !");

						break;
					}
				}
			}
			return rtrn != null? rtrn:S/*Continue Developing !!!*/;
		};
		S.offset = function (adjustment, index){
		/*
		 *	Function For Adjust Offset(s)
		 */
			if(adjustment === undefined){
				return {
					top:S[0].offsetTop,
					left:S[0].offsetLeft,
					width:S[0].offsetWidth,
					height:S[0].offsetHeight,
					parent:S[0].offsetParent
				};
			} else if(typeof adjustment == 'object'){
				if(index !== undefined){
					if("top" in adjustment){
						this[index].style.top = adjustment.top + "px";
					}
					if("left" in adjustment){
						this[index].style.left = adjustment.left + "px";
					}
				} else {
					if("top" in adjustment){
						for(var i=0; i<this.length; i++){
							this[i].style.top = adjustment.top + "px";
						}
					}
					if("left" in adjustment){
						for(var i=0; i<this.length; i++){
							this[i].style.left = adjustment.left + "px";
						}
					}
				}
				return S; /*Continue Developing !!!*/
			} else {
				throw Error("javaSnake: Enter Object Value In offset() Function !");
			}
		};
		S.each = function(func){

			if(func !== undefined){
				if(typeof func == 'function'){
					for(var i=0; i<S.length; i++){ //Foreach Element

						S[i]._______F______ = func;
						S[i]._______F______();
						S[i]._______F______ = undefined;

					}
					//for(var i=0; i<S.length; i++){ S[i].f = null }
				} else {

					throw Error("javaSnake: Enter Function Value In each Function !");

				}
			}
			return S; /*Continue Developing !!!*/
		};
		S.get = function(num){

			switch(typeof num){

				case 'number':

					if(num > (S.length-1)) return S[S.length-1];
					if(num < 0) return S[0];
					//else
					return S[num];

				break;
				case 'string':

					if(typeof Number(num) == 'number'){

						var temp = Number(num);

						if(temp > (S.length-1)) return S[S.length-1];
						if(temp < 0) return S[0];
						//else
						return S[temp];

					} else {

						throw Error("javaSnake: Put A String That Could Convert To Number\nIn The Argument Of get() Function !");

					}

				break;
				case 'undefined':

					return S[0];

				break;
				default:

					throw Error("javaSnake: Put Number ,String Or Undefined Value In The Argument Of get() Function !\nThat Contains A Number .");

				break;

			}

		};

		/*///////////////////////////
		/*	KeyBoard, Mouse, & DOM  /
		/*	Event Functions         /
		/*///////////////////////////



		//Mouse Events//
		S.onMouseDown = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "mousedown", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onClick = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "click", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onMouseUp = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "mouseup", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onDblClick = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "dblclick", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onMouseOver = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "mouseover", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onMouseMove = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "mousemove", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onMouseOut = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "mouseout", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};



		//DOM Events//
		S.onAbort = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "abort", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onBlur = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "blur", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onChange = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "change", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onActivate = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMActivate", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onAttributeNameChanged = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMAttributeNameChanged", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onAttributeModified = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMAttrModified", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onCharacterDataModified = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMCharacterDataModified", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onElementNameChanged = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMElementNameChanged", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onFocusIn = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMFocusIn", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onFocusOut = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMFocusOut", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onNodeInserted = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMNodeInserted", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onNodeInsertedIntoDocument = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMNodeInsertedIntoDocument", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onNodeRemoved = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMNodeRemoved", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onNodeRemovedFromDocument = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMNodeRemovedFromDocument", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onSubtreeModified = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "DOMSubtreeModified", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onError = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "error", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onFocus = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "focus", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onLoad = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "load", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onOffline = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "offline", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onOnline = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "online", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onReset = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "reset", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onResize = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "resize", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onScroll = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "scroll", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onSelect = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "select", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onSubmit = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "submit", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onTextInput = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "textInput", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onUnload = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "unload", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};



		//KeyBoard Events//
		S.onKeyDown = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "keydown", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onKeyUp = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "keyup", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};
		S.onKeyPress = function (func, useCapture){
			if(useCapture === undefined){ useCapture = false; }
			for(var i=0; i<this.length; i++){ window.jSnake.addEvent(func, "keypress", this[i], useCapture); }
			return S; /*Continue Developing !!!*/
		};

		//'on' Function For Multiple Or Single Events//
		S.on = function (events, func, useCapture){

			if(useCapture === undefined){ useCapture = false; }//Use Capture Default

			if(typeof events == 'string'){ //For Each Selected Element
				for(var i=0; i<this.length; i++){
					window.jSnake.addEvent(func, events, this[i], useCapture);
				}
			} else if(events.length){
				for(var i=0; i<this.length; i++){ //For Each Selected Element
					for(var j=0; j<events.length; j++){ //For Each Event
						window.jSnake.addEvent(func, events[j], this[i], useCapture);
					}
				}
			}
			return S; /*Continue Developing !!!*/	//Add More 'Continue Developping' For Functions That They Don't Return Anything !
		};



		/*///////////////////////////
		/*	Add, Remove, & Toggle   /
		/*	Class of Elements       /
		/*///////////////////////////

		//Add//
		S.addClass = function (CLASS){
			if(typeof CLASS == 'string'){

				var classes = CLASS.split(' ');

				for(var i=0; i<this.length; i++){//For Each Element
					for(var j=0; j<classes.length; j++){//For Each Taken ClassName

						this[i].classList.add(classes[j]);

					}
				}
			}
			return S; /*Continue Developing !!!*/
		};
		//Remove//
		S.removeClass = function (CLASS){
			if(typeof CLASS == 'string'){

				var classes = CLASS.split(' ');

				for(var i=0; i<this.length; i++){//For Each Element
					for(var j=0; j<classes.length; j++){//For Each Taken Class

						this[i].classList.remove(classes[j]);

					}
				}
			}
			return S; /*Continue Developing !!!*/
		};
		//Toggle//
		S.toggleClass = function (CLASS){
			if(typeof CLASS == 'string'){

				var classes = CLASS.split(' ');

				for(var i=0; i<this.length; i++){//For Each Element
					for(var j=0; j<classes.length; j++){//For Each Taken Class

						this[i].classList.toggle(classes[j]);

					}
				}
			}
			return S; /*Continue Developing !!!*/
		};

		/*///////////////////////////////
		/*	Selects Siblings Or Index	/
		/*	of The First Elements    	/
		/*///////////////////////////////

		//Siblinger//
		S.siblinger = function(){

			var elems = [];

			for(var g=0; g<arguments.length; g++){

				for(var h=0; h<S.length; h++){

					var id = arguments[g];

					if(typeof id == 'number'){ //Number Mode

						if(id > 0){ //Next Sibling

							var sibEl    = S[h],
								sib      = S[h],
								num      = 0,
								pushFlag = true;

							while(sib.nextSibling){

								if(num == id) break;

								sib = sib.nextSibling;

								if(sib.nodeName != "#text"){
									sibEl = sib;
									num++;
								}

							}

							for(var i=0; i<elems.length; i++) if(elems[i] == sibEl) pushFlag = false;

							if(pushFlag && sibEl != S[h]) elems.push(sibEl);

						} else if(id < 0){ //Previous Sibling

							var sibEl    = S[h],
								sib      = S[h],
								num      = 0,
								pushFlag = true;

							id *= -1; //Because It's A Negative Number

							while(sib.previousSibling){

								if(num == id) break;

								sib = sib.previousSibling;

								if(sib.nodeName != "#text"){
									sibEl = sib;
									num++;
								}

							}

							for(var i=0; i<elems.length; i++) if(elems[i] == sibEl) pushFlag = false;

							if(pushFlag && sibEl != S[h]) elems.push(sibEl);

						} else { //It Self

							var pushFlag = true;

							for(var i=0; i<elems.length; i++) if(elems[i] == S[h]) pushFlag = false;

							if(pushFlag) elems.push(S[h]);

						}

					} else if(typeof id == 'string'){ //String Mode

						var str = id.split(' '); //Make Selections Separate

						for(var k=0; k<str.length; k++){

							if(str[k][0] == '.'){ //Select Them By ClassName

								var els = [],
									sib = S[h].parentElement.childNodes;
								str[k] = str[k].slice(1,str[k].length); //Remove The Class Dot

								for(var i=0; i<sib.length; i++){

									if(sib[i] != S[h]){

										if(sib[i].nodeName != '#text'){

											if(sib[i].hasAttribute('class')){

												var cls = sib[i].getAttribute('class').split(' ');

												for(var j=0; j<cls.length; j++){

													if(str[k] == cls[j]){

														var pushFlag = true;

														//Check If It Exists In Selected Elements Array
														for(var l=0; l<elems.length; l++) if(elems[l] == sib[i]) pushFlag = false;

														if(pushFlag) elems.push(sib[i]);

													}

												}

											}

										}

									}

								}

							} else if(str[k][0] == '#'){ //Select Them By IdName

								var els = [],
									sib = S[h].parentElement.childNodes;
								str[k] = str[k].slice(1,str[k].length); //Remove The Id Sharp

								for(var i=0; i<sib.length; i++){

									if(sib[i] != S[h]){

										if(sib[i].nodeName != '#text'){

											if(sib[i].hasAttribute('id')){

												var sibId = sib[i].getAttribute('id');

												if(sibId == str[k]){

													var pushFlag = true;

													//Check If It Exists In Selected Elemes Array
													for(var l=0; l<elems.length; l++) if(elems[l] == sib[i]) pushFlag = false;

													if(pushFlag) elems.push(sib[i]);

												}

											}

										}

									}

								}

							} else {

								if(Number(str[k]).toString() != 'NaN'){ //It Can Be A Number

									var idNum = str[k];

									if(idNum > 0){ //Next Sibling

										var sibEl    = S[h],
											sib      = S[h],
											num      = 0,
											pushFlag = true;

										while(sib.nextSibling){

											if(num == idNum){ break; }

											sib = sib.nextSibling;

											if(sib.nodeName != "#text"){
												sibEl = sib;
												num++;
											}

										}

										for(var i=0; i<elems.length; i++) if(elems[i] == sibEl) pushFlag = false;

										if(pushFlag && sibEl != S[h]) elems.push(sibEl);

									} else if(idNum < 0){ //Previous Sibling

										var sibEl    = S[h],
											sib      = S[h],
											num      = 0,
											pushFlag = true;

										idNum *= -1; //Because It's A Negative Number

										while(sib.previousSibling){

											if(num == idNum){ break; }

											sib = sib.previousSibling;

											if(sib.nodeName != "#text"){
												sibEl = sib;
												num++;
											}

										}

										for(var i=0; i<elems.length; i++) if(elems[i] == sibEl) pushFlag = false;

										if(pushFlag && sibEl != S[h]) elems.push(sibEl);

									} else { //It Self

										var pushFlag = true;

										for(var i=0; i<elems.length; i++) if(elems[i] == S[h]) pushFlag = false;

										if(pushFlag) elems.push(S[h]);

									}

								} else { //It Can'T Be A Number; Therefore, You Should Select Them By Tag Name

									str[k] = str[k].toUpperCase() //Make It UpperCase Because Of Node Names Are Capital

									var sib = S[h].parentNode.childNodes;

									for(var i=0; i<sib.length; i++){

										if(S[h] != sib[i] && sib[i].nodeName == str[k]){

											var pushFlag = true;

											for(var j=0; j<elems.length; j++) if(elems[j] == sib[i]) pushFlag = false;

											if(pushFlag) elems.push(sib[i]);

										}

									}

								}

							}

						}

					} else { //Else If TypeOf Arguments Didn't Number/String

						throw Error("javaSnake: Put Number/String Value In Arguments Of siblinger() Function !");

					}

				}

			}

			S.splice(0,this.length);

			for(var i=0; i<elems.length; i++) S.push(elems[i]);

			return S;/*Continue Developing !*/

		}; //End Of Siblinger Function//
		S.prvSib = function(){

			var elems = [];

			for(var i=0; i<S.length; i++)
				if(S[i].previousSibling != undefined)
					if(S[i].previousSibling.nodeName != "#text")
						elems.push(S[i].previousSibling);
					else
						if(S[i].previousSibling.previousSibling != undefined)
							elems.push(S[i].previousSibling.previousSibling);

			S.splice(0,this.length);

			for(var i=0; i<elems.length; i++) S.push(elems[i]);

			return S;/*Continue Developing !*/

		};
		S.nxtSib = function(){

			var elems = [];

			for(var i=0; i<S.length; i++){
				if(S[i].nextSibling != undefined)
					if(S[i].nextSibling.nodeName != "#text")
						elems.push(S[i].nextSibling);
					else
						if(S[i].nextSibling.nextSibling != undefined)
							elems.push(S[i].nextSibling.nextSibling);
			}

			S.splice(0,this.length);

			for(var i=0; i<elems.length; i++) S.push(elems[i]);

			return S;/*Continue Developing !*/

		};
		S.child = function(num){

			if(typeof num == 'number'){

				var elems = [];

				for(var i=0; i<S.length; i++)
					if(S[i].childNodes[num].nodeName != "#text" && S[i].childNodes.length != 0)
						elems.push(S[i].childNodes[num]);
					else
						window.jSnake.warning("javaSnake: Some Of Child Nodes Was Not Selected, Because They Was 'textNode' !\nOR -> There Is Not Any ChildNodes !");

				S.splice(0,this.length);

				for(var i=0; i<elems.length; i++) S.push(elems[i]);

				return S;/*Continue Developing !*/

			} else if(typeof num == 'string' && typeof Number(num) == 'number'){

				var elems = [];

				for(var i=0; i<S.length; i++)
					if(S[i].childNode[Number(num)].nodeName != "#text" && S[i].childNodes.length != 0)
						elems.push(S[i].childNodes[Number(num)]);
					else
						window.jSnake.warning("javaSnake: Some Of Child Nodes Was Not Selected, Because They Was 'textNode' !\nOR -> There Is Not Any ChildNodes !");

				S.splice(0,this.length);

				for(var i=0; i<elems.length; i++) S.push(elems[i]);

				return S;/*Continue Developing !*/

			} else {

				throw Error("javaSnake: Put A Number Value In Argument Of child() Function !");

			}

		};
		S.parent = function(){

			var elems = [];

			for(var i=0; i<S.length; i++){

				var exists = false;

				for(var j=0; j<elems.length; j++){

					if(elems[j] == S[i].parentElement) exists = true;

				}

				if(!exists) elems.push(S[i].parentElement);

			}

			S.splice(0,this.length);

			for(var i=0; i<elems.length; i++) S.push(elems[i]);

			return S;/*Continue Developing !*/

		};
		S.fullS = function(){
		/*
		 * You Can Toggle Full Screen Using This Function
		 */
			if(
				document.fullscreenElement ||
				document.webkitFullscreenElement ||
				document.mozFullScreenElement ||
				document.msFullscreenElement
			  ) {
				if(document.exitFullscreen) {
					document.exitFullscreen();
				} else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if(document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else if(document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			  } else {
				if(this[0].requestFullscreen) {
					this[0].requestFullscreen();
				} else if(this[0].mozRequestFullScreen) {
					this[0].mozRequestFullScreen();
				} else if(this[0].webkitRequestFullscreen) {
					this[0].webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				} else if(this[0].msRequestFullscreen) {
					this[0].msRequestFullscreen();
				}
			}
			return S; /*Continue Developing !!!*/
		};
		S.indexer = function (index){
			if(typeof index == 'number'){ //In Number Mode

				if(this.length > 1){

					if(index >= this.length-1){

						S.splice(0,this.length-1);

					} else if(index <= 0){

						S.splice(1,this.length);

					} else {

						S.splice(index+1,(this.length-1)-index);
						S.splice(0,index);

					}
				}

			} else if(typeof index == 'string'){ //In String Mode

				if(this.length > 1){

					index = index.toLowerCase();

					switch (index){
						case "$odd":

							var temp = [];
							for(var i=0; i<S.length; i++){

								if(i == 0 || i%2 == 0){
									temp.push(S[i]);
								}

							}
							S.splice(0,this.length);
							for(var i=0; i<temp.length; i++){ S.push(temp[i]) }

						break;
						case "$even":

							var temp = [];
							for(var i=0; i<S.length; i++){

								if(i == 1 || i%2 != 0){
									temp.push(S[i]);
								}

							}
							S.splice(0,this.length);
							for(var i=0; i<temp.length; i++){ S.push(temp[i]) }

						break;
						case "$first":
							S.splice(1,this.length);
						break;
						case "$last":
							S.splice(0,this.length-1);
						break;
					}

				}

			}
			return S;
		};
		S.S = window.jSnake,
		S.pushElem = function(){

			for(var i=0; i<arguments.length; i++){

				var stack = arguments[i];

				if(typeof stack == 'string'){ //General String

					var temp = document.querySelectorAll(stack);
					for(var j=0; j<temp.length; j++){
						S.push(temp[j]);
					}

				} else if(typeof stack == 'object'){

					if(stack.ARRAY_TYPE == "Snake.js"){

						for(var j=0; j<stack.length; j++){

							S.push(stack[j]);

						}

					} else {

						S.push(stack);

					}

				}

			}

			return S; //Continue Developing
		};
		S.scrlTop = function(scrollSize){

			if(scrollSize === undefined){

				if(S[0] != window) return S[0].scrollTop;
				else return S[0].pageYOffset;

			} else if(typeof scrollSize == 'number'){

				for(var i=0; i<S.length; i++){

					S[i].scrollTop = scrollSize;

				}
				return S; //Continue Developing
			}

		};
		S.scrlLeft = function(scrollSize){

			if(scrollSize === undefined){

				if(S[0] != window) return S[0].scrollLeft;
				else return S[0].pageXOffset;

			} else if(typeof scrollSize == 'number'){

				for(var i=0; i<S.length; i++){

					S[i].scrollLeft = scrollSize;

				}
				return S; //Continue Developing
			}

		};
		S.scrlWidth = function(){

			if(S[0] != window) return S[0].scrollWidth;
			else return S[0].innerWidth;

		};
		S.scrlHeight = function(){

			if(S[0] != window) return S[0].scrollHeight;
			else return S[0].innerHeight;

		};
		S.onScrollArrives = function(func,before){

			if(before === undefined || typeof before != 'boolean') before = false;

			for(var i=0; i<S.length; i++){

				window.jSnake.onScrollArrives(S[i],func,before);

			}

			return S;/*Continue Developing !*/

		};
		S.onScrollArrivesOnce = function(func,before){

			if(before === undefined || typeof before != 'boolean') before = false;

			for(var i=0; i<S.length; i++){

				window.jSnake.onScrollArrivesOnce(S[i],func,before);

			}

			return S;/*Continue Developing !*/

		};
		S.scrlToX = function(num,speed,delay){

			for(var i=0; i<S.length; i++){

				if(S[i] != window && S[i] != document){

					window.jSnake.scrlToX_elem(S[i],num,speed,delay);

				} else {

					window.jSnake.scrlToX(num,speed,delay);

				}

			}

			return S;/*Continue Developing !*/

		};
		S.scrlToY = function(num,speed,delay){

			for(var i=0; i<S.length; i++){

				if(S[i] != window && S[i] != document){

					window.jSnake.scrlToY_elem(S[i],num,speed,delay);

				} else {

					window.jSnake.scrlToY(num,speed,delay);

				}

			}

			return S;/*Continue Developing !*/

		};
		S.scrlToXY = function(num,speed,delay){

			for(var i=0; i<S.length; i++){

				if(S[i] != window && S[i] != document){

					window.jSnake.scrlToX_elem(S[i],num,speed,delay);
					window.jSnake.scrlToY_elem(S[i],num,speed,delay);

				} else {

					window.jSnake.scrlToX(num,speed,delay);
					window.jSnake.scrlToY(num,speed,delay);

				}

			}

			return S;/*Continue Developing !*/

		};
		S.property = function(){

			var rtrn = null;
			for(var i=0; i<S.length; i++){
				for(var j=0; j<arguments.length; j++){
					var prop = arguments[j];
					switch(typeof prop){
						case 'string':

							if(typeof arguments[j+1] == 'string'){

								if(prop in S[i]){
									S[i][prop] = arguments[j+1];
								}
								j++;

							} else {
								if(prop in S[0]){
									rtrn = S[0][prop];
								}
							}

						break;
						case 'object':

							for(var p in prop){
								if(p in S[i]){ S[i][p] = prop[p]; }
							}

						break;
					}
				}
			}
			return rtrn != null? rtrn:S/*Continue Developing*/;

		};
		S.outerWidth = function(marginBool){

			var ouWt = 0;

			if(S[0] != window){

				ouWt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("border-width"))[0]) * 2;
				ouWt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-left"))[0]);
				ouWt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-right"))[0]);
				ouWt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("width"))[0]);

				if(marginBool !== undefined){
					if(typeof marginBool == 'boolean'){

						if(marginBool){
							ouWt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("margin-left"))[0]);
							ouWt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("margin-right"))[0]);
						}

					} else {

						throw Error("javaSnake: Put Boolean Value In The Argument Of outerWidth() Function !");

					}
				}

				return ouWt;

			} else {

				return window.outerWidth;

			}

		};
		S.outerHeight = function(marginBool){

			var ouHt = 0;

			if(S[0] != window){

				ouHt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("border-width"))[0]) * 2;
				ouHt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-top"))[0]);
				ouHt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-bottom"))[0]);
				ouHt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("height"))[0]);

				if(marginBool !== undefined){
					if(typeof marginBool == 'boolean'){

						if(marginBool){
							ouHt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("margin-top"))[0]);
							ouHt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("margin-bottom"))[0]);
						}

					} else {

						throw Error("javaSnake: Put Boolean Value In The Argument Of outerHeight() Function !");

					}
				}

				return ouHt;

			} else {

				return window.outerHeight;

			}

		};
		S.innerWidth = function(){

			var inWt = 0;

			if(S[0] != window){

				inWt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-left"))[0]);
				inWt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-right"))[0]);
				inWt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("width"))[0]);

				return inWt;

			} else {

				return window.innerWidth;

			}

		};
		S.innerHeight = function(){

			var inHt = 0;

			if(S[0] != window){

				inHt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-top"))[0]);
				inHt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("padding-bottom"))[0]);
				inHt += window.jSnake.isNumUndefined(window.jSnake.styleToNum(window.getComputedStyle(S[0],null).getPropertyValue("height"))[0]);

				return inHt;

			} else {

				return window.innerHeight;

			}

		};
		S.rev = function(){

			S = window.jSnake.rev(S);
			return S;

		};
		S.toggleAttr = function(attrName, val1, val2){

			if(typeof attrName == 'string'){

				if(val2 === undefined){//Toggle One Value

					for(var i=0; i<S.length; i++){//For Each Element

						if(S[i].getAttribute(attrName) == val1){

							S[i].setAttribute(attrName, "");

						} else {

							S[i].setAttribute(attrName, val1);

						}

					}

				} else {//Toggle Two Values

					for(var i=0; i<S.length; i++){//For Each Element

						if(S[i].getAttribute(attrName) == val1){

							S[i].setAttribute(attrName, val2);

						} else if(S[i].getAttribute(attrName) == val2){

							S[i].setAttribute(attrName, val1);

						} else {

							S[i].setAttribute(attrName, val1);

						}

					}

				}

			} else {//Non-String Value

				throw Error("javaSnake: Put String Value In The First Argument Of toggleAttr() Function !");

			}

			return S;/*Continue Developing !*/

		};
		S.realStyle = function(property, pseudoElt){

			return window.jSnake.realStyle(S[0],property,pseudoElt);

		};
		S.getElemBCR = function(){

		    return window.jSnake.getElemBCR(S[0]);

        };
		S.append = S.appendChild;
		S.TEST = function(){

			// You Can Also Test Your Functions Here To
			// Develop This Library !

		};
		//End Of Function Variables




		//////////////////////////////////////////////////////////////////////////////////////////
		//                                 LIST OF PROPERTIES                                   //
		//////////////////////////////////////////////////////////////////////////////////////////
		S.ARRAY_TYPE                     = "Snake.js";
		//////////////////////////////////////////////////////////////////////////////////////////
		//                                  LIST OF FUNCTIONS                                   //
		//////////////////////////////////////////////////////////////////////////////////////////
		// S.c$$                            = _c$$_;
		// /*** A High Futured CSS Controler ***/
		// S.css                            = _css_;
		// /*** A Light CSS Controler And Returner ***/
		// S.remove                         = _remove_;
		// /*** It Can Remove DOM Elements ***/
		// S.appendChild                    = _appendChild_;
		// /*** It Can Append Child Elements To Some Parent Elements ***/
		// S.before                         = _before_;
		// /*** It Can Insert Element Before Some DOM Elements ***/
		// S.after                          = _after_;
		// /*** It Can Insert Element After Some DOM Elements ***/
		// S.indexOfThese                   = _indexOfThese_;
		// /*** It Returns An Array Of Selected Elements Indexes ***/
		// S.html                           = _html_;
		// /*** It Gets Or Return Html Of The Selected Elements ***/
		// S.text                           = _text_;
		// /*** It Gets Or Return Text Of The Selected Elements ***/
		// S.val                            = _val_;
		// /*** It Gets Or Return Value Of The Selected Elements ***/
		// S.attr                           = _attr_;
		// /*** It Gets Or Return Attributes Of The Selected Elements ***/
		// S.offset                         = _offset_;
		// /*** It Gets Or Return Offsets Of The First Selected Elements ***/
		// S.each                           = _each_;
		// /*** It Does A Same Function For All Of Selected Elements ***/
		// S.get                            = _get_;
		// /*** It Can Return An Item Of Selected Elements ***/
		//////////////////////////////////
		//     |                  |     //
		//     |   Mouse Events   |     //
		//     v                  v     //
		//////////////////////////////////
		// S.onMouseDown                    = _onMouseDown_;
		// S.onClick                        = _onClick_;
		// S.onMouseUp                      = _onMouseUp_;
		// S.onDblClick                     = _onDblClick_;
		// S.onMouseOver                    = _onMouseOver_;
		// S.onMouseMove                    = _onMouseMove_;
		// S.onMouseOut                     = _onMouseOut_;
		//////////////////////////////////
		//     |                  |     //
		//     |    DOM Events    |     //
		//     v                  v     //
		//////////////////////////////////
		// S.onAbort                        = _onAbort_;
		// S.onBlur                         = _onBlur_;
		// S.onChange                       = _onChange_;
		// S.onActivate                     = _onActivate_;
		// S.onAttributeNameChanged         = _onAttributeNameChanged_;
		// S.onAttributeModified            = _onAttributeModified_;
		// S.onCharacterDataModified        = _onCharacterDataModified_;
		// S.onElementNameChanged           = _onElementNameChanged_;
		// S.onFocusIn                      = _onFocusIn_;
		// S.onFocusOut                     = _onFocusOut_;
		// S.onNodeInserted                 = _onNodeInserted_;
		// S.onNodeInsertedIntoDocument     = _onNodeInsertedIntoDocument_;
		// S.onNodeRemoved                  = _onNodeRemoved_;
		// S.onNodeRemovedFromDocument      = _onNodeRemovedFromDocument_;
		// S.onSubtreeModified              = _onSubtreeModified_;
		// S.onError                        = _onError_;
		// S.onFocus                        = _onFocus_;
		// S.onLoad                         = _onLoad_;
		// S.onOffline                      = _onOffline_;
		// S.onOnline                       = _onOnline_;
		// S.onReset                        = _onReset_;
		// S.onResize                       = _onResize_;
		// S.onScroll                       = _onScroll_;
		// S.onSelect                       = _onSelect_;
		// S.onSubmit                       = _onSubmit_;
		// S.onTextInput                    = _onTextInput_;
		// S.onUnload                       = _onUnload_;
		//////////////////////////////////
		//    |                    |    //
		//    |  #KeyBoard Events  |    //
		//    v                    v    //
		//////////////////////////////////
		// S.onKeyDown                      = _onKeyDown_;
		// S.onKeyUp                        = _onKeyUp_;
		// S.onKeyPress                     = _onKeyPress_;
		//////////////////////////////////
		// S.on                             = _on_;
		// /*** Custome Events That You Can Enter Them Like addEventListener Function ***/
		// S.addClass                       = _addClass_;
		// /*** It Can Add Classes To The Elements ***/
		// S.removeClass                    = _removeClass_;
		// /*** It Can Remove Classes Of The Elements ***/
		// S.toggleClass                    = _toggleClass_;
		// /*** It Can Toggle Classes Of The Elements ***/
		// S.siblinger                      = _siblinger_;
		// /*** It Can Return Siblings Of Matched Elements By TagName, ID, Class And The Number ***/
		// S.prvSib                         = _prvSib_;
		// /*** It Can Select Previous Siblings Of Matched Elements ***/
		// S.nxtSib                         = _nxtSib_;
		// /*** It Can Select Next Siblings Of Matched Elements ***/
		// S.child                          = _child_;
		// /*** It Can Select A Child Node By Number ***/
		// S.parent                         = _parent_;
		// /*** It Can Select A Parent Elements Of Matched Elements ***/
		// S.fullS                          = _fullS_;
		// /*** It Can Toggle FullScreen Of The First Element ***/
		// S.indexer                        = _indexer_;
		// /*** It Can Choose One Or Multiple Elements From Selected Elements ***/
		// S.S                              = _S_;
		// /*** It Can ReSelect Elements ***/
		// S.pushElem                       = _pushElem_;
		// /*** It Can Push Elements To The Range Of Selection By Objects, Strings, & Arrays ***/
		//////////////////////////////////
		//    |                    |    //
		//    |  ScrollProperties  |    //
		//    v                    v    //
		//////////////////////////////////
		// S.scrlTop                        = _scrlTop_;
		// S.scrlLeft                       = _scrlLeft_;
		// S.scrlWidth                      = _scrlWidth_;
		// S.scrlHeight                     = _scrlHeight_;
		// S.onScrollArrives                = _onScrollArrives_;
		// S.onScrollArrivesOnce            = _onScrollArrivesOnce_;
		// S.scrlToX                        = _scrlToX_;
		// S.scrlToY                        = _scrlToY_;
		// S.scrlToXY                       = _scrlToXY_;
		//////////////////////////////////
		// S.property                       = _property_;
		// S.outerWidth                     = _outerWidth_;
		// S.outerHeight                    = _outerHeight_;
		// S.innerWidth                     = _innerWidth_;
		// S.innerHeight                    = _innerHeight_;
		// S.rev                            = _rev_;
		// S.toggleAttr                     = _toggleAttr_;
		//////////////////////////////////
		// S.realStyle                      = _realStyle_;
		// S.TEST                           = _TEST_; //For Testing New Functions
		//////////////////////////////////////////////////////////////////////////////////////////
		//======================================================================================//
		//////////////////////////////////////////////////////////////////////////////////////////
		//Note That Ajax Functions Are In Ajax Mode.
		/*( It Means When You Didn't Put Any Ajax Object/Command In The 'SELECTOR'() Function,
			You Will Not Be Able To Access And Use Ajax Functions )*/

		window.jSnake.selected = S;

	return S;/*End Of javaSnake() Selector Function*/}
	/*
	 *	Pure/Inner Helping Functions
	 */
	function indexOfElement_(element){
	/*
	 *	Function For Getting Index Of An Element
	 */
		var indexNum = 0;
		var temp = null;
		if(element.previousSibling){
			temp = element.previousSibling;
			indexNum += 1;
			while(temp.previousSibling){
				temp = temp.previousSibling;
				indexNum += 1;
			}
		}
		return indexNum;
	}
	function readyAjax_(){
	/*
	 *	Function For Ready Ajax Object
	 */

		try {

			return new XMLHttpRequest();

		} catch(e) {

			try {

				return new ActiveXObject("Msxml2.XMLHTTP");

			} catch(e) {

				try {

					return new ActiveXObject("Microsoft.XMLHTTP");

				} catch(e) {

					//return "A newer browser is needed !";
					throw Error("A newer browser is needed !");

				}

			}

		}

	}//End Of Ajax Function
	function styleToJs_(property){
	/*
	 *	Function For Convert CSS Property Name To JavaScript Style Property Name
	 */
		property = property.toLowerCase();
		if(property != "float"){
			return property.replace(/[\-][a-z]/gm,function(match){ return match[1].toUpperCase(); });
		}
		return "cssFloat";
	}
	function jsToStyle_(property){
	/*
	 *	Function For Convert JavaScript Style Property Name To CSS Property Name
	 */
		if(property != "cssFloat"){
			return property.replace(/[A-Z]/gm,function(match){ return "-" + match.toLowerCase(); });
		}
		return "float";
	}

}());//End Of javaSnake In Function Mode

//javaSnake In Object Mode
window.jSnake.creator     = "SMRSAN";
window.jSnake.weblog      = "http://smrsan.blogfa.com/";
window.jSnake.website     = "http://www.javaSnake.com/";
window.jSnake.version     = "v1.0.0";
window.jSnake.firstPublishYear = "1395 | 2016";
window.jSnake.publishYear = "1396 | 2017";
window.jSnake.noConflict  = function(){ return window.jSnake; };
window.S                  = window.jSnake;
window.jSnake.jSnake      = window.jSnake;
window.jSnake.S           = window.jSnake;
window.jSnake.error       = function(message){ throw Error(message) };
window.jSnake.log         = function(message){ console.log(message) };
window.jSnake.warning     = function(message){ console.warn(message)};
window.jSnake.newArr      = function(){ return []; };
window.jSnake.newObj      = function(){ return {}; };
window.jSnake.write       = function(markup){ document.write(markup) }
window.jSnake.writeLine   = function(markup){ document.writeln(markup) }
window.jSnake.crtElem     = function(tagName){ return document.createElement(tagName) }
window.jSnake.alert       = function(message){ window.alert(message) };
window.jSnake.prompt      = function(message){ return window.prompt(message) };
window.jSnake.confirm     = function(message){ return window.confirm(message) };
window.jSnake.die         = function(){ window.jSnake = undefined;window.S = undefined };
window.jSnake.doc = document;
window.jSnake.win = window;
window.jSnake.addEvent    = function(eFunc, eType, element, useCapture){
	
	if(element === undefined){ element = window }
	if(eType   === undefined){ eType   = "load" }
	
	if(document.addEventListener){
		
		if(typeof eType == "load"){
			
			if(typeof window.onload == "function"){
				
				var existingOnload = window.onload;
				window.onload = function(){
					existingOnload();
					eFunc();
				}
				
			} else {
				
				window.onload = eFunc;
				
			}
			
		} else {
			
			element.addEventListener(eType, eFunc, useCapture);
			
		}
		
	} else if(document.attachEvent){ //Old IEs
		
		if(typeof eType == "load"){
			
			if(typeof window.onload == "function"){
				
				var existingOnload = window.onload;
				window.onload = function(){
					existingOnload();
					eFunc();
				}
				
			} else {
				
				window.onload = eFunc;
				
			}
			
		} else {
			
			element.attachEvent("on" + eType, eFunc, useCapture);
			
		}
		
	}
	
};
window.jSnake.removeEvent = function(eFunc, eType, element){
	
	if(element === undefined){ element = window }
	if(eType   === undefined){ eType   = "load" }
	
	if(document.removeEventListener){
		
		element.removeEventListener(eType, eFunc, false);
		
	} else if(document.detachEvent){ //Old IEs
		
		element.detachEvent("on" + eType, eFunc);
		
	}
	
};
window.jSnake.gelId     = function(id){
	
	if(typeof id == 'string'){
		
		return document.getElementById(id)
		
	}
	jSnake.error("javaSnake: Enter String Value In getElId() Function !");
	
};
window.jSnake.gelClass  = function(Class){
	
	if(typeof Class == 'string'){
		
		return document.getElementsByClassName(Class)
		
	}
	jSnake.error("javaSnake: Enter String Value In gelClass() Function !");
	
};
window.jSnake.gelTag  = function(tagName){
	
	if(typeof tagName == 'string'){
		
		return document.getElementsByTagName(tagName)
		
	}
	jSnake.error("javaSnake: Enter String Value In gelTag() Function !");
	
};
window.jSnake.gelTagNs  = function(nameSpace ,tagName){
	
	if(typeof tagName == 'string' && typeof nameSpace == 'string'){
		
		return document.getElementsByTagNameNS(nameSpace ,tagName)
		
	}
	jSnake.error("javaSnake: Enter String Value In gelTagNs() Function !");
	
};
window.jSnake.gelName  = function(name){
	
	if(typeof name == 'string'){
		
		return document.getElementsByName(name)
		
	}
	jSnake.error("javaSnake: Enter String Value In gelName() Function !");
	
};
window.jSnake.remove   = function(element){
	
	if(typeof element == 'object'){
		
		try {
			
			element.parentElement.removeChild(element);
			
		} catch(event) {
			
			jSnake.error("javaSnake: Enter DOMObject Value In remove() Function !");
			
		}
		
	} else {
		
		jSnake.error("javaSnake: Enter DOMObject Value In remove() Function !");
		
	}
	
};
window.jSnake.setCookie = function(cookObj){
	
	if(typeof cookObj == 'object'){
		
		var name    = "",   //
			value   = "",   //
			expires = "",   //Cookie Loaders
			path    = "",   //
			domain  = "",   //
			secure  = false;//
		
		for(var val in cookObj){
			switch(val){
				case "name":
					if(typeof cookObj[val] == 'string') name = cookObj[val].trim();
					else throw Error("javaSnake: Enter String Value For 'name' of setCookie() Function !");
				break;
				case "value":
					if(typeof cookObj[val] == 'string') value = cookObj[val];
					else throw Error("javaSnake: Enter String Value For 'value' of setCookie() Function !");
				break;
				case "expires":
					if(typeof cookObj[val] == 'string') expires = ";expires=" + cookObj[val];
					else throw Error("javaSnake: Enter String Value For 'expires' of setCookie() Function !");
				break;
				case "path":
					if(typeof cookObj[val] == 'string') path = ";path=" + cookObj[val];
					else throw Error("javaSnake: Enter String Value For 'path' of setCookie() Function !");
				break;
				case "domain":
					if(typeof cookObj[val] == 'string') domain = ";domain=" + cookObj[val];
					else throw Error("javaSnake: Enter String Value For 'domain' of setCookie() Function !");
				break;
				case "secure":
					if(typeof cookObj[val] == 'boolean') secure = !cookObj ? "":";secure";
					else throw Error("javaSnake: Enter Boolean Value For 'secure' of setCookie() Function !");
				break;
				default:
					throw Error("javaSnake: What The **** !\nWhat's This: " + val + "\nYour Mistake In setCookie() Function !!!");
				break;
			}
		}
		if(typeof secure == 'boolean') secure = "";
		if(name != "" && value != undefined){
			
			document.cookie = name + "=" + value + expires + path + domain + secure;
			
		} else {
			
			throw Error("javaSnake: There Isn't Any Name Or Value For setCookie() Function !");
			
		}
	} else {
		
		throw Error("javaSnake: Enter Object Value In setCookie() Function !");
		
	}
	
}
window.jSnake.getCookie = function(cookName){
	
	var cArray  = [] //Array
	,   cook    = {} //Object
	,   parts   = document.cookie.split(";");
	
	for(var i=0; i<parts.length; i++){
		
		var nameValue = parts[i].split("=");
		
		switch(nameValue[0]){
			case "expires":
				
				cook.expires = nameValue[1];
				
			break;
			case "path":
				
				cook.path = nameValue[1];
				
			break;
			case "domain":
				
				cook.domain = nameValue[1];
				
			break;
			case "secrue":
				
				cook.secure = true;
				
			break;
			default:
				
				if(cook.name){
					
					cArray.push(cook);  
					cook = {};//Reset cook For Insert New Cookie
					
				}
				cook.name  = nameValue[0].trim();//Do Not Use White Spaces !
				cook.value = nameValue[1];
				
			break;
		}
	}
	if(cook.name){ cArray.push(cook); }
	
	if(cookName === undefined){
		
		return cArray; //Return Cookie
		
	} else {
		
		if(typeof cookName == 'string'){
			
			for(var i=0; i<cArray.length; i++){
				
				if(cArray[i]["name"].trim() == cookName.trim()){
					
					return cArray[i]; //Cookie Was Found In The List !
					
				}
				
			}
			
		} else {
			
			throw Error("javaSnake: Enter String Value In getCookie() Function !");
			
		}
		
	}
	throw Error("javaSnake: The cookName That You Entered, Was Not Found !");
};
window.jSnake.remCookie = function(cookName){
	if(typeof cookName == 'string'){
		
		var date = new Date();
			
		date.setTime(date.getTime()-60);
		
		var expireDate = date.toGMTString();
		
		window.jSnake.setCookie({
			name    : cookName,
			value   : "",
			expires : expireDate
		});
		
	} else {
		
		throw Error("javaSnake: Enter String Value In remCookie() Function !");
		
	}
};
window.jSnake.addProp = function(name,func){
	
	if(typeof func == 'function'){
		
		if(typeof name == 'string'){
			
			if(name in window.jSnake){
				
				throw Error("javaSnake: This Function Name: " + name + "\nIs Already Exists In javaSnake Functions !");
				
			} else {
				
				window.jSnake[name] = func;
				
			}
			
		} else {
			
			throw Error("javaSnake: Put String Value In The First Argument Of addFunc() Function !");
			
		}
		
	} else {
		
		throw Error("javaSnake: Put Function Value In The Second Argument Of addFunc() Function !");
		
	}
	
};
window.jSnake.styleToNum = function(style,minus){
	
	minus = (minus === undefined)? true:minus;
	
	var m = minus?
		style.match(/[\-|\+]?\d+\.?\d*/gim)://Matches with calculating minus/plus
		style.match(/\d+\.?\d*/gim);//Matches without calculating minus/plus
	
	if(m !== null){
		for(var i=0; i<m.length; i++) m[i] = (typeof m[i] != "string")? 0:parseFloat(m[i]);
		return m;
	}
	return [0];
	
};
window.jSnake.arrCopy = function(arr){
	
	if((typeof arr == 'object' || typeof arr == 'array') && arr.length){
		
		var newArr = [];
		
		for(var i=0; i<arr.length; i++) newArr.push(arr[i]);
		
		return newArr;
		
	} else {
		
		throw Error("javaSnake: Put Array Value In arrCopy() Function !");
		
	}
	
};
window.jSnake.getAjax   = function(){
	
	var ajaxObj = null;
	
	try {
		ajaxObj = new XMLHttpRequest();
	} catch(e) {	
		try {
			ajaxObj = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				ajaxObj = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				ajaxObj = "A newer browser is needed !";
			}
		}
	}
	
	ajaxObj.set = function(obj){
		
		if(typeof obj == 'object'){
			
			for(var p in obj){
				
				var temp = p.toLowerCase();
				
				switch(temp){
					
					case 'type':
						
						if(typeof obj[p] == 'string'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							throw Error("javaSnake_ajax: Put String Value In 'type' Property !");
							
						}
						
					break;
					case 'url':
						
						if(typeof obj[p] == 'string'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							throw Error("javaSnake_ajax: Put String Value In 'url' Property !");
							
						}
						
					break;
					case 'sync':
						
						if(typeof obj[p] == 'boolean'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							throw Error("javaSnake_ajax: Put Boolean Value In 'sync' Property !");
							
						}
						
					break;
					case 'data':
						
						if(typeof obj[p] == 'string'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							throw Error("javaSnake_ajax: Put String Value In 'data' Property !");
							
						}
						
					break;
					case 'success':
						
						if(typeof obj[p] == 'function'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							throw Error("javaSnake_ajax: Put Function Value In 'success' Property !");
							
						}
						
					break;
					case 'fail':
						
						if(typeof obj[p] == 'function'){
							
							this["s_" + temp] = obj[p];
							
						} else {
							
							throw Error("javaSnake_ajax: Put Function Value In 'fail' Property !");
							
						}
						
					break;
					
				}
				
			} //End Of Loading Values
			
			if(this.s_sync === undefined) this.s_sync = false;
			if(this.s_data === undefined) this.s_data = null ;
			if(this.s_fail === undefined) this.s_fail = function(){};
			if(this.s_success === undefined) this.s_success = function(){};
			
			this.open(this.s_type,this.s_url,this.s_sync);
			this.send(this.s_data);
			
			if(this.s_sync){
				
				this.onreadystatechange = function(){
					if(this.readyState == 4){
						
						if(this.status == 200){
							
							this.s_success();
							
						} else {
							
							this.s_fail();
							
						}
						
					}
				};
				
			} else {
				
				if(this.status == 200){
					
					this.s_success();
					
				} else {
					
					this.s_fail();
					
				}
				
			}
			
			return this;
			
		} else {
			
			throw Error("javaSnake_ajax: Put Object Value In set() Function !");
			
		}
		
	};
	
	return ajaxObj;
};
window.jSnake.ajax = function(obj){
	
	if(typeof obj == 'object'){
		
		var ajaxObj = null;
		
		try {
			
			ajaxObj = new XMLHttpRequest();
			
		} catch(e) {
			
			try {
				
				ajaxObj = new ActiveXObject("Msxml2.XMLHTTP");
				
			} catch(e) {
				
				try {
					
					ajaxObj = new ActiveXObject("Microsoft.XMLHTTP");
					
				} catch(e) {
					
					ajaxObj = "A newer browser is needed !";
					
				}
				
			}
			
		}
		
		for(var p in obj){
			
			var temp = p.toLowerCase();
			
			switch(temp){
				
				case 'type':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						throw Error("javaSnake_ajax: Put String Value In 'type' Property !");
						
					}
					
				break;
				case 'url':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						throw Error("javaSnake_ajax: Put String Value In 'url' Property !");
						
					}
					
				break;
				case 'sync':
					
					if(typeof obj[p] == 'boolean'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						throw Error("javaSnake_ajax: Put Boolean Value In 'sync' Property !");
						
					}
					
				break;
				case 'data':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						throw Error("javaSnake_ajax: Put String Value In 'data' Property !");
						
					}
					
				break;
				case 'headprop':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						throw Error("javaSnake_ajax: Put String Value In 'HeadProp' Property !");
						
					}
					
				break;
				case 'headval':
					
					if(typeof obj[p] == 'string'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						throw Error("javaSnake_ajax: Put String Value In 'HeadVal' Property !");
						
					}
					
				break;
				case 'success':
					
					if(typeof obj[p] == 'function'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						throw Error("javaSnake_ajax: Put Function Value In 'success' Property !");
						
					}
					
				break;
				case 'fail':
					
					if(typeof obj[p] == 'function'){
						
						ajaxObj["s_" + temp] = obj[p];
						
					} else {
						
						throw Error("javaSnake_ajax: Put Function Value In 'fail' Property !");
						
					}
					
				break;
				//****************Develop It !****************
				//You Can Also Make Your Own Properties Here !
				
			}
			
		} //End Of Loading Values
		
		if(ajaxObj.s_sync === undefined) ajaxObj.s_sync = false;
		if(ajaxObj.s_data === undefined) ajaxObj.s_data = null ;
		if(ajaxObj.s_fail === undefined) ajaxObj.s_fail = function(){};
		if(ajaxObj.s_success === undefined) ajaxObj.s_success = function(){};
		
		ajaxObj.open( ajaxObj.s_type , ajaxObj.s_url , ajaxObj.s_sync );
		if(ajaxObj.s_headprop != null && ajaxObj.s_headval != null) ajaxObj.setRequestHeader(ajaxObj.headprop,ajaxObj.headval);
		ajaxObj.send(ajaxObj.s_data);
		
		if(ajaxObj.s_sync){
			
			ajaxObj.onreadystatechange = function(){
				
				if(this.readyState == 4){
					
					if(this.status == 200){
						
						this.s_success();
						
					} else {
						
						this.s_fail();
						
					}
					
				}
				
			};
			
		} else {
			
			if(ajaxObj.status == 200){
				
				ajaxObj.s_success();
				
			} else {
				
				ajaxObj.s_fail();
				
			}
			
		}
		
		return ajaxObj; //To Catch Request Object
		
	} else {
		
		throw Error("javaSnake_ajax: Put Object Value In ajax() Function !");
		
	}
	
}; //End Of ajax() Function !
window.jSnake.styleToJs = function (property){
/*
 *	Function For Convert CSS Property Name To JavaScript Style Property Name
 */
	property = property.toLowerCase();
	if(property != "float"){
		return property.replace(/[\-][a-z]/gm,function(match){ return match[1].toUpperCase(); });
	}
	return "cssFloat";
};
window.jSnake.jsToStyle = function (property){
/*
 *	Function For Convert JavaScript Style Property Name To CSS Property Name
 */
	if(property != "cssFloat"){
		return property.replace(/[A-Z]/gm,function(match){ return "-" + match; });
	}
	return "float";
};
window.jSnake.isNumUndefined = function(variable){ return variable !== undefined? variable:0; };
window.jSnake.isBoolUndefined = function(variable){ return variable !== undefined? variable:false; };
window.jSnake.isStrUndefined = function(variable){ return variable !== undefined? variable:""; };
window.jSnake.onScrollArrives = function(element,func,before){
	
	if(before === undefined) before = false;
	
	
	if(before){
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(window).innerHeight(),
			winScroll  = S(window).scrlTop();
		
		if(winScroll > (elemTop-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			
		}
		
	} else {
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(window).innerHeight(),
			winScroll  = S(window).scrlTop();
		
		if(winScroll > (elemTop+elemHeight-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			
		}
		
	}
	
	S(window)
	.onScroll(function(){
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(this).innerHeight(),
			winScroll  = S(this).scrlTop();
		
		if(before){
			
			if(winScroll > (elemTop-winHeight)){
				
				element.______FUNCTION_______ = func;
				element.______FUNCTION_______();
				element.______FUNCTION_______ = undefined;
				
			}
		} else {
			
			if(winScroll > (elemTop+elemHeight-winHeight)){
				
				element.______FUNCTION_______ = func;
				element.______FUNCTION_______();
				element.______FUNCTION_______ = undefined;
				
			}
		}

	});
	
};
window.jSnake.scrlToY = function(num,speed,delay){
	
	if(delay === undefined) delay = 1;
	
	//Calculate Speed
	if(typeof speed == 'string'){
		
		switch(speed.toLowerCase()){
			
			case '$slow': speed = 2; break;
			case '$medium': speed = 6; break;
			case '$fast': speed = 10; break;
			default: speed = 6; break;
			
		}
		
	} else if(speed === undefined){
		
		speed = 6;
		
	} else if(typeof speed != 'number'){
		
		throw Error("javaSnake: Put ['$slow'|'$medium'|'$fast'] Or #undefined Or Number Value\nIn The Second Argument Of scrlToY()");
		
	}
	
	//Falut Tulerance Of Speed
	if(speed < 0) speed *= -1;
	else if(speed == 0) speed = 6;
	
	var lastPosition = null;
	
	//Make Animation
	if(num > window.pageYOffset){
		
		function scrlAnim(){
			
			if(window.pageYOffset != lastPosition){
				if(num > window.pageYOffset){
					
					if((num - window.pageYOffset) >= speed){
						
						lastPosition = window.pageYOffset;
						window.scrollTo(window.pageXOffset,window.pageYOffset + speed);
						
					} else {
						
						lastPosition = window.pageYOffset;
						window.scrollTo(window.pageXOffset,window.pageYOffset + (num - window.pageYOffset));
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	} else if(num < window.pageYOffset){
		
		function scrlAnim(){
			
			if(window.pageYOffset != lastPosition){
				if(num < window.pageYOffset){
					
					if((window.pageYOffset - num) >= speed){
						
						lastPosition = window.pageYOffset;
						window.scrollTo(window.pageXOffset,window.pageYOffset - speed);
						
					} else {
						
						lastPosition = window.pageYOffset;
						window.scrollTo(window.pageXOffset,window.pageYOffset - (window.pageYOffset - num));
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	}
	
};
window.jSnake.scrlToX = function(num,speed,delay){
	
	if(delay === undefined) delay = 1;
	
	//Calculate Speed
	if(typeof speed == 'string'){
		
		switch(speed.toLowerCase()){
			
			case '$slow': speed = 2; break;
			case '$medium': speed = 6; break;
			case '$fast': speed = 10; break;
			default: speed = 6; break;
			
		}
		
	} else if(speed === undefined){
		
		speed = 6;
		
	} else if(typeof speed != 'number'){
		
		throw Error("javaSnake: Put ['$slow'|'$medium'|'$fast'] Or #undefined Or Number Value\nIn The Second Argument Of scrlToX()");
		
	}
	
	//Falut Tulerance Of Speed
	if(speed < 0) speed *= -1;
	else if(speed == 0) speed = 6;
	
	var lastPosition = null;
	
	//Make Animation
	if(num > window.pageXOffset){
		
		function scrlAnim(){
			
			if(window.pageXOffset != lastPosition){
				if(num > window.pageXOffset){
					
					if((num - window.pageXOffset) >= speed){
						
						lastPosition = window.pageXOffset;
						window.scrollTo(window.pageXOffset + speed,window.pageYOffset);
						
					} else {
						
						lastPosition = window.pageXOffset;
						window.scrollTo(window.pageXOffset + (num - window.pageXOffset),window.pageYOffset);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	} else if(num < window.pageXOffset){
		
		function scrlAnim(){
			
			if(window.pageXOffset != lastPosition){
				if(num < window.pageXOffset){
					
					if((window.pageXOffset - num) >= speed){
						
						lastPosition = window.pageXOffset;
						window.scrollTo(window.pageXOffset - speed,window.pageYOffset);
						
					} else {
						
						lastPosition = window.pageXOffset;
						window.scrollTo(window.pageXOffset - (window.pageXOffset - num),window.pageYOffset);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	}
	
};
window.jSnake.scrlToXY = function(num,speed,delay){
	
	window.jSnake.scrlToX(num,speed,delay);
	window.jSnake.scrlToY(num,speed,delay);
	
};
window.jSnake.scrlToX_elem = function(element,num,speed,delay){
	
	if(delay === undefined) delay = 1;
	
	//Calculate Speed
	if(typeof speed == 'string'){
		
		switch(speed.toLowerCase()){
			
			case '$slow': speed = 2; break;
			case '$medium': speed = 6; break;
			case '$fast': speed = 10; break;
			default: speed = 6; break;
			
		}
		
	} else if(speed === undefined){
		
		speed = 6;
		
	} else if(typeof speed != 'number'){
		
		throw Error("javaSnake: Put ['$slow'|'$medium'|'$fast'] Or #undefined Or Number Value\nIn The Third Argument Of scrlToX_elem()");
		
	}
	
	//Falut Tulerance Of Speed
	if(speed < 0) speed *= -1;
	else if(speed == 0) speed = 6;
	
	var lastPosition = null;
	
	//Make Animation
	if(num > element.scrollLeft){
		
		function scrlAnim(){
			
			if(element.scrollLeft != lastPosition){
				if(num > element.scrollLeft){
					
					if((num - element.scrollLeft) >= speed){
						
						lastPosition = element.scrollLeft;
						element.scrollLeft = element.scrollLeft + speed;
						
					} else {
						
						lastPosition = element.scrollLeft;
						element.scrollLeft = element.scrollLeft + (num - element.scrollLeft);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	} else if(num < element.scrollLeft){
		
		function scrlAnim(){
			
			if(element.scrollLeft != lastPosition){
				if(num < element.scrollLeft){
					
					if((element.scrollLeft - num) >= speed){
						
						lastPosition = element.scrollLeft;
						element.scrollLeft = element.scrollLeft - speed;
						
					} else {
						
						lastPosition = element.scrollLeft;
						element.scrollLeft = element.scrollLeft - (element.scrollLeft - num);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	}
	
};
window.jSnake.scrlToY_elem = function(element,num,speed,delay){
	
	if(delay === undefined) delay = 1;
	
	//Calculate Speed
	if(typeof speed == 'string'){
		
		switch(speed.toLowerCase()){
			
			case '$slow': speed = 2; break;
			case '$medium': speed = 6; break;
			case '$fast': speed = 10; break;
			default: speed = 6; break;
			
		}
		
	} else if(speed === undefined){
		
		speed = 6;
		
	} else if(typeof speed != 'number'){
		
		throw Error("javaSnake: Put ['$slow'|'$medium'|'$fast'] Or #undefined Or Number Value\nIn The Third Argument Of scrlToY_elem()");
		
	}
	
	//Falut Tulerance Of Speed
	if(speed < 0) speed *= -1;
	else if(speed == 0) speed = 6;
	
	var lastPosition = null;
	
	//Make Animation
	if(num > element.scrollTop){
		
		function scrlAnim(){
			
			if(element.scrollTop != lastPosition){
				if(num > element.scrollTop){
					
					if((num - element.scrollTop) >= speed){
						
						lastPosition = element.scrollTop;
						element.scrollTop = element.scrollTop + speed;
						
					} else {
						
						lastPosition = element.scrollTop;
						element.scrollTop = element.scrollTop + (num - element.scrollTop);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	} else if(num < element.scrollTop){
		
		function scrlAnim(){
			
			if(element.scrollTop != lastPosition){
				if(num < element.scrollTop){
					
					if((element.scrollTop - num) >= speed){
						
						lastPosition = element.scrollTop;
						element.scrollTop = element.scrollTop - speed;
						
					} else {
						
						lastPosition = element.scrollTop;
						element.scrollTop = element.scrollTop - (element.scrollTop - num);
						clearInterval(inter);
						
					}
					
				} else {
					
					clearInterval(inter);
					
				}
			} else {
				
				clearInterval(inter);
				
			}
			
		}
		
		var inter = setInterval(scrlAnim,delay);
		
		
	}
	
};
window.jSnake.scrlToXY_elem = function(element,num,speed,delay){
	
	window.jSnake.scrlToX_elem(element,num,speed,delay);
	window.jSnake.scrlToY_elem(element,num,speed,delay);
	
};
window.jSnake.rev = function(arr){
	
	try{
		
		if(arr.push){
			
			var rev = window.jSnake.arrCopy(arr);
			arr.splice(0,arr.length);
			for(var i=rev.length-1; i>=0; i--) arr.push(rev[i]);
			
		} else {
			
			var rev = arr;
			arr = "";
			for(var i=rev.length-1; i>=0; i--) arr.push(rev[i]);
			
		}
		
		return arr;
		
	}catch(e){
		
		throw Error("javaSnake: Put Array Or String Value In reverse() Function.");
		
	}
	
}
//A Function For Fire A Function Once, After Scroll Arrives
window.jSnake.onScrollArrivesOnce = function(element,func,before){
	
	if(before === undefined) before = false;
	
	var elemTop    = S(element).offset().top,
		elemHeight = S(element).outerHeight(),
		winHeight  = S(window).innerHeight(),
		winScroll  = S(window).scrlTop();
	
	var OSAfuncB = function(){
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(window).innerHeight(),
			winScroll  = S(window).scrlTop();
		
		if(winScroll > (elemTop-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			window.jSnake.removeEvent(OSAfuncB, "scroll", window);
			
		}

	};
	var OSAfuncNB = function(){
		
		var elemTop    = S(element).offset().top,
			elemHeight = S(element).outerHeight(),
			winHeight  = S(window).innerHeight(),
			winScroll  = S(window).scrlTop();
		
		if(winScroll > ((elemTop+elemHeight)-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			window.jSnake.removeEvent(OSAfuncNB, "scroll", window);
			
		}

	};
	
	if(before){
		
		if(winScroll > (elemTop-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			
		} else {
			
			window.jSnake.addEvent(OSAfuncB,"scroll", window);
			
		}
		
	} else {
		
		if(winScroll > ((elemTop+elemHeight)-winHeight)){
			
			element.______FUNCTION_______ = func;
			element.______FUNCTION_______();
			element.______FUNCTION_______ = undefined;
			
		} else {
			
			window.jSnake.addEvent(OSAfuncNB,"scroll", window);
			
		}
		
	}
	
};
window.jSnake.realStyle = function(element, property, pseudoElt){
	
	//if(pseudoElt === undefined) pseudoElt = null;

	if(window.getComputedStyle(element, pseudoElt)[property]){

	    return window.getComputedStyle(element, pseudoElt)[property];

    } else if(window.getComputedStyle(element, pseudoElt).getPropertyValue) {

        return window.getComputedStyle(element, pseudoElt).getPropertyValue(property);

    } else if(element.currentStyle){

        return element.currentStyle[property];

    } else {

        return element.style[property];

    }
	
};
window.jSnake.onLoadReloadVars = function(){
	
	var allElements = document.querySelectorAll("*"),
		reg1 = /[\{]{2,2}[a-z|_|\$][a-z|0-9|_|\$]+[\}]{2,2}/gim,//To Get {{VARIBALE-Name}}
		reg2 = /(^[\{]{2,})|([\}]{2,}$)/gi;//To Convert {{VARIABLE-NAME}} >> VARIABLE-NAME
	
	for(var g=0; g<allElements.length; g++){
		
		//Reload Attributes
		for(var i=0; i<allElements[g].attributes.length; i++){
			var attrTxt = allElements[g].attributes[i].value,
				m = attrTxt.match(reg1);
			if(m !== null && m !== undefined){
				for(var j=0; j<m.length; j++){
					var p = m[j].replace(reg2,"");
					if(p in window.jSnake.vars){
						attrTxt = attrTxt.replace(m[j],window.jSnake.vars[p]);
					}
				}
				allElements[g].attributes[i].value = attrTxt;
			}
		}
		
		//Reload innerHTMLs
		var html = allElements[g].innerHTML,
			m = html.match(reg1);
		if(m !== null && m !== undefined){
			for(var i=0; i<m.length; i++){
				var p = m[i].replace(reg2,"");
				if(p in window.jSnake.vars){
					html = html.replace(m[i],window.jSnake.vars[p]);
				}
			}
			allElements[g].innerHTML = html;
		}
		
	}
	
};
window.jSnake.onLoadUpdateVars = function(varName,varValue){
	
	window.jSnake.addEvent(function(){
	
		var whiteSpacesVarNameReg = /[\s]+/gim,
				  validVarNameReg = /^[a-z|_|\$]/i;
		
		if(typeof varName === "string"){
			
			//Remove White Spaces
			varName = varName.replace(whiteSpacesVarNameReg,"");
			//Chack if it's an invalid var name
			var validName = varName.search(validVarNameReg);
			
			if(validName !== -1){
				
				window.jSnake.vars[varName] = varValue;
				window.jSnake.onLoadReloadVars();
				
			} else {
				
				throw Error("javaSnake: Put A Valid Variable-Name (" + varName + ") In The First Argument Of updateVars() Function.");
				
			}
			
		} else if(typeof varName === "object"){
			
			for(var p in varName){
				
				//Remove White Spaces
				p = p.replace(whiteSpacesVarNameReg,"");
				//Chack if it's an invalid var name
				var validName = p.search(validVarNameReg);
				
				if(validName !== -1){
					
					window.jSnake.vars[p] = varName[p];
					window.jSnake.onLoadReloadVars();
					
				} else {
					
					throw Error("javaSnake: Put A Valid Variable-Name (" + p + ") In The First Argument Of updateVars() Function.");
					
				}
				
			}
			
		} else {
			
			throw Error("javaSnake: Put A String Or Object Value In The First Argument Of updateVars() Function.");
			
		}
	
	});
	
};
window.jSnake.randomURLCode = function(len){
	
	len = (typeof len !== "number")? 12:len;
	
	const CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$-+!.*'(),";
	
	var str = "",
		numArr,
		rand;
	
	for(var i=0; i<len; i++){
		numArr = new Uint8Array(1);
		window.crypto.getRandomValues(numArr);
		rand = Math.floor((73*numArr[0])/256);
		str += CHARS[rand];
	}
	
	return str;
	
};
window.jSnake.randomCode = function(len,pattern){
	
	len = (typeof len !== "number")? 12:len;
	pattern = (typeof pattern !== "string")? "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$":pattern;
	
	var str = "",
		numArr,
		rand;
	
	for(var i=0; i<len; i++){
		numArr = new Uint32Array(1);
		window.crypto.getRandomValues(numArr);
		rand = Math.floor((pattern.length*numArr[0])/4294967296);
		str += pattern[rand];
	}
	
	return str;
	
};
window.jSnake.cssUnitConvert = function(num,unit1,unit2){
	//Written Using https://jwilsson.com/unit-converter/ Website.
	switch(unit1.trim().toLowerCase()){
		case "ch":
			switch(unit2.trim().toLowerCase()){
				case "cm": num *= 0.21; break;
				case "em": num *= 0.5; break;
				case "ex": num *= 1.11; break;
				case "in": num *= 0.08; break;
				case "mm": num *= 2.11; break;
				case "pc": num *= 0.5; break;
				case "pt": num *= 5.98; break;
				case  "%": num *= 50; break;
				case "px": num *= 8; break;
			}
		break;
		case "cm":
			switch(unit2.trim().toLowerCase()){
				case "ch": num *= 4.74; break;
				case "em": num *= 2.37; break;
				case "ex": num *= 5.27; break;
				case "in": num *= 0.39; break;
				case "mm": num *= 10; break;
				case "pc": num *= 2.37; break;
				case "pt": num *= 28.35; break;
				case  "%": num *= 177.17; break;
				case "px": num *= 28.35; break;
			}
		break;
		case "em":
			switch(unit2.trim().toLowerCase()){
				case "ch": num *= 2; break;
				case "cm": num *= 0.42; break;
				case "ex": num *= 2.22; break;
				case "in": num *= 0.17; break;
				case "mm": num *= 4.22; break;
				case "pc": num *= 1; break;
				case "pt": num *= 11.96; break;
				case  "%": num *= 100; break;
				case "px": num *= 16; break;
			}
		break;
		case "ex":
			switch(unit2.trim().toLowerCase()){
				case "ch": num *= 0.9; break;
				case "cm": num *= 0.19; break;
				case "em": num *= 0.45; break;
				case "in": num *= 0.07; break;
				case "mm": num *= 1.9; break;
				case "pc": num *= 0.45; break;
				case "pt": num *= 5.38; break;
				case  "%": num *= 45; break;
				case "px": num *= 7.2; break;
			}
		break;
		case "in":
			switch(unit2.trim().toLowerCase()){
				case "ch": num *= 12.05; break;
				case "cm": num *= 2.54; break;
				case "em": num *= 6.02; break;
				case "ex": num *= 13.38; break;
				case "mm": num *= 25.4; break;
				case "pc": num *= 6.02; break;
				case "pt": num *= 67.37; break;
				case  "%": num *= 450; break;
				case "px": num *= 72; break;
			}
		break;
		case "mm":
			switch(unit2.trim().toLowerCase()){
				case "ch": num *= 0.47; break;
				case "cm": num *= 0.1; break;
				case "em": num *= 0.24; break;
				case "ex": num *= 0.53; break;
				case "in": num *= 0.04; break;
				case "pc": num *= 0.23; break;
				case "pt": num *= 2.83; break;
				case  "%": num *= 17.72; break;
				case "px": num *= 2.83; break;
			}
		break;
		case "pc":
			switch(unit2.trim().toLowerCase()){
				case "ch": num *= 2; break;
				case "cm": num *= 0.42; break;
				case "em": num *= 1; break;
				case "ex": num *= 2.22; break;
				case "in": num *= 0.17; break;
				case "mm": num *= 4.42; break;
				case "pt": num *= 11.96; break;
				case  "%": num *= 100; break;
				case "px": num *= 16; break;
			}
		break;
		case "pt":
			switch(unit2.trim().toLowerCase()){
				case "ch": num *= 0.17; break;
				case "cm": num *= 0.04; break;
				case "em": num *= 0.08; break;
				case "ex": num *= 0.19; break;
				case "in": num *= 0.01; break;
				case "mm": num *= 0.35; break;
				case "pc": num *= 0.08; break;
				case  "%": num *= 8.33; break;
				case "px": num *= 1.33; break;
			}
		break;
		case "%":
			switch(unit2.trim().toLowerCase()){
				case "ch": num *= 0.02; break;
				case "cm": num *= 0.01; break;
				case "em": num *= 0.01; break;
				case "ex": num *= 0.02; break;
				case "in": num *= 0; break;
				case "mm": num *= 0.06; break;
				case "pc": num *= 0.01; break;
				case "pt": num *= 0.12; break;
				case "px": num *= 0.16; break;
			}
		break;
		case "px":
			switch(unit2.trim().toLowerCase()){
				case "ch": num *= 0.13; break;
				case "cm": num *= 0.04; break;
				case "em": num *= 0.06; break;
				case "ex": num *= 0.14; break;
				case "in": num *= 0.01; break;
				case "mm": num *= 0.35; break;
				case "pc": num *= 0.06; break;
				case "pt": num *= 0.75; break;
				case  "%": num *= 6.25; break;
			}
		break;
	}
	return num;
};
/*
 *	( Animation ToolBox )
 */
window.jSnake.anim = {
	
	/*
	 * Thanks to -> http://javascript.info/tutorial/animation
	 */
	
	make:function(opts){
		
		opts.duration = Math.abs(opts.duration) || 1000;
		
		setTimeout(function(){
		
			//AnimTime variables
			var start = new Date(),
				end   = start + opts.duration;//Duration time default = 1s
				id = setInterval(frame, opts.frameRate || 10);
			
			return id;
			
			function frame(){
				
				//FrameTime variables
				var timePassed = new Date() - start,
					progress = timePassed / opts.duration;
					//progress value range: 0 to 1
					//HELP -> think like this 0 = 0% and 1 = 100%
				
				//Avoid value overflowing
				if(progress > 1) progress = 1;
				
				//delta = a funciton that returns the progress value between 0 to 1.
				//Note this function has several modes that defined after
				//make function.
				
				//Manage ease of animation
				opts.ease = (typeof opts.ease === "string")? opts.ease:"$inout";//easeInOut by default
				
				opts.ease.replace(/([\s]+(?=[\S]+))|([\s]+(?![\S]+))/gim,'');
				
				var delta;
				
				switch(opts.ease.toLowerCase()/*case-insensitive*/){
					
					default: //easeInOut by default
						
						if(progress < 0.5){
							
							delta = opts.delta(2*progress) / 2;
							
						} else {
							
							delta = (2 - opts.delta(2*(1-progress))) / 2;
							
						}
						
					break;
					case "$out":
						
						delta = 1 - opts.delta(1 - progress);
						
					break;
					case "$in":
						
						delta = opts.delta(progress);
						
					break;
					
				}
				
				opts.step(delta);
				
				//Check the ending
				if(progress == 1){
					clearInterval(id);
				}
				
			}
			
		}, opts.delay || 0);
		
	},
	//[START] Types of delta
	$linear: function(p){ return p; },
	$quad  : function(p){ return Math.pow(p, 2); },
	$circ  : function(p){ return 1 - Math.sin(Math.acos(p)); },
	$back  : function(p){ return Math.pow(p, 2) * ((1.5+1)*p-1.5); },
	$bounce: function(p){
		for(var i=0, j=1, result; true; i+=j, j/=2){
			if(p >= (7 - 4 * i) / 11){
				return -Math.pow((11 - 6 * i - 11 * p) / 4, 2) + Math.pow(j, 2);
			}
		}
	},
	$elastic: function(p){
		var x = 1.5; //By default
		return Math.pow(2, 10 * (p - 1)) * Math.cos(20*Math.PI*x/3*p);
	}
	/*
	 *	,$yourMode = You could develop here by entering your formulas
	 */
	//[END] Types of delta
	
};
window.jSnake.getViewportSize = function(){

    //Thanks to http://stackoverflow.com/users/227532/leo
    var viewPortWidth;
    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {

        viewPortWidth = window.innerWidth;
        viewPortHeight = window.innerHeight;

    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth != 'undefined'
            && document.documentElement.clientWidth != 0) {

        viewPortWidth = document.documentElement.clientWidth;
        viewPortHeight = document.documentElement.clientHeight;

    }
    // older versions of IE
    else {

        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;

    }
    return [viewPortWidth, viewPortHeight];

};
//Same as DOMElement.getBoundingClientRect() function
window.jSnake.getElemBCR = function(element){

    //Thanks to these (Q & A) guys !
    //http://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
    return element.getBoundingClientRect();

};
//Main Variables In javaSnake (Object Mode)
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

window.jSnake.selected = null;
window.jSnake.vars = {};

//End Of javaSnake In Object Mode
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
/*
 *	In The Name Of God
 *	javaSnake > JavaScript {For DOM Objects}
 *	By SMRSAN
 *	
 *	WebLog:
 *			http://smrsan.blogfa.com/
 *	WebSite:
 *			http://www.javaSnake.com/
 */

HTMLElement.prototype.c$$ = function (/*{Style Object} or "Style String"*/){
/*
 *	c$$ Function
 *	For Easier Style
 *	In  JavaScript
 */

	var props	= [],
		vals	 = [],
		returnProp = null;
	/*
	 *	Load Properties And Values
	 */
	for(var j=0; j<arguments.length; j++){ //ForEach Arg
		var style = arguments[j];
		if(typeof style == 'string'){
			
			var arr = style.split(/[\:|;]/g);
			for(var i=0; i<arr.length; i += 2) props.push(arr[i].replace(/ /g,""));
			for(var i=1; i<arr.length; i += 2) vals.push(arr[i]);
			
		} else if(typeof style == 'object'){
			for(var myStyleName in style){
				if(myStyleName in this.style){
					
					if(style[myStyleName].toLowerCase().trim() == "$get"){//Get Property Command
						returnProp = this.style[myStyleName];
						continue;
					}
					
					this.style[myStyleName] = style[myStyleName];
				}
			}
		}
	}
	/*
	 *	Do Styles On Element
	 */
	for(var j=0; j<props.length; j++){ //ForEach Style
		props[j] = props[j].toLowerCase();
		var p = S.styleToJs(props[j]);
		if(vals[j].toLowerCase().trim() == "$get"){//Get Property Command
			returnProp = this.style[p];
			continue;
		}
		if(p in this.style) this.style[p] = vals[j];
	}
	return returnProp;/*Properties Or Null*/
};
HTMLElement.prototype.css = function (){
/*
 *	Function For Set Some Style (Like jQuery Library)
 */
	for(var g=0; g<arguments.length; g++){
		
		if(typeof arguments[g] == 'object'){
			
			var styleObj = arguments[g];
				
			for(var myStyleName in styleObj){
				
				if(myStyleName in this.style){
					
					this.style[myStyleName] = styleObj[myStyleName];
					
				}
				
			}
			
		} else if(typeof arguments[g] == 'string'){
			
			if(typeof arguments[g+1] == 'string'){
				
				if(arguments[g] in this.style){
						
					this.style[arguments[g]] = arguments[g+1];
					
				}
				
			} else {
				
				if(arguments[g] in this.style){
					
					return this.style[arguments[g]];
					
				}
				
			}
			
		}
		
	}
};
/* MIT OpenSource License
 *
 * Copyright 2016-2017 javaSnake
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software
 * and associated documentation files (the Software),
 * to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the
 * following conditions:
 * The above copyright notice and this permission notice
 * shall be included in all copies or substantial portions
 * of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
 * KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
 * THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/