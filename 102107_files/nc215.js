//______________________________________________________________________________
//
// Project: IBS 
// File: nc215.js
// Version: %version: 2.1.1 %
//______________________________________________________________________________
//
// created by: kriega
// creation date: Thu Mar  3 11:14:54 2005
// changed by: %derived_by: eichsteh %
// change date: %date_modified: Fri Jan 22 17:24:42 NFT 2010 %
//______________________________________________________________________________
//
// copyright: (c) BMW AG 2005, all rights reserved
//______________________________________________________________________________

// 2.1.3 : 01.12.2000 / rollout nicht mehr bgcolor -> gBack ! Resize neu abgestimmt!
// Spezialversion Intranet Homepage. NICHT fuer andere Projekte verwenden.
// Special Version for Intranet Homepage. DO NOT USER FOR OTHER PROJECTS.

var node = new Array(0);
var gPNodes="root|0|";
var gMDepth=0;

function Node (par_Nr, name, text, hRef, target, lStyle, space, cOver, cClick) {

        this.name = name;
        this.text = text;
        this.hRef = hRef;
        this.target = target;
        this.lStyle = lStyle;
        this.space = space;
        this.cOver = cOver;
        this.cClick = cClick;
        this.parNr = par_Nr;

        this.children = new Array ();
        this.nChildren = 0;
        this.isOpen = false;

        this.id = node.length;
        this.hierar = 0;
        this.clicked = false;

        // Methoden:

        this.addChild = nodeAddChild;
        this.draw = nodeDraw;
        this.drawIE = drawIE;
        this.drawNC = drawNC;
        this.drawElse = drawElse;

        var brS = gHgt.indexOf(lStyle);

        if (brS >= 0) {
                var brE = gHgt.indexOf(",", brS);

                if (brE < 0)
                        brE = gHgt.length;

                var brN = Number(gHgt.substring(brS + 2, brE)); }
        else
                var brN = gHeight;

        var brC = text.match(/<br>/gi);

        if (brC)
                this.height = (brC.length + 1) * brN;
        else
                this.height = brN;
}

function rootNode (name, hRef) {
        node[0] = new Node(0, name, name, hRef, "_self", "z", 0, 0, 0, 0, 0, 0, 0, 0, 0);
}

function newNode(parent, name, text, hRef, target, lStyle, space, cOver, cClick) {

        gPos = gPNodes.indexOf(parent.toLowerCase());
        x    = node.length;

        if (gPos < 0) {

                pFound = false;

                for (nn = 0; nn < x; nn++) {
                        if (node[nn].name == parent) {
                                node[x] = node[nn].addChild(addNode = new Node(nn, name, text, hRef, target, lStyle, space, cOver, cClick, 0, 0, 0, 0, 0, 0));
                                gPNodes += parent + "|" + nn + "|";
                                pFound = true;
                                nn = x;
                        }
                }

                if (!pFound) {
                        node[x] = node[0].addChild(addNode = new Node(0, parent, parent, "", "", lStyle, space, cOver, cClick, 0, 0, 0, 0, 0, 0));

                        node[x + 1] = node[x].addChild(addNode = new Node(x+1, name, text, hRef, target, lStyle, space, cOver, cClick, 0, 0, 0, 0, 0, 0));
                        gPNodes += parent + "|" + (x + 1) + "|";
                }
        }
        else {
                nOp = gPNodes.indexOf("|", gPos + 1);
                nTp = gPNodes.indexOf("|", nOp + 1);

                maNr = Number(gPNodes.substring(nOp + 1, nTp));

                x = node.length;

                node[x] = node[maNr].addChild(addNode = new Node(maNr, name, text, hRef, target, lStyle, space, cOver, cClick, 0, 0, 0, 0, 0, 0));
        }
}

function nodeAddChild(childNode) {
        this.children[this.nChildren] = childNode;
        this.nChildren++;
        childNode.hierar = this.hierar + 1;
        if (childNode.hierar > gMDepth)
                gMDepth = childNode.hierar;
        return childNode;
}

function sText (text) {
        sT=text;
         
        while (sT.indexOf("-<br>") > 0) sT = sT.replace("-<br>", "");
        while (sT.indexOf("<br>")  > 0) sT = sT.replace("<br>", " ");
        while (sT.indexOf("<hr>")  > 0) sT = sT.replace("<hr>", "");

        window.status = sT;
        return true;
}
function nodeOver (id) {
        var tC = gOver[node[id].cOver];

        if (node[id].text.length==0)
                return;

        if (docAll) document.all["node" + id].style.backgroundColor = tC;
        else if (docLayers) {
                if (tC.length==0) tC = document.bgColor;
                document.layers[id].bgColor = tC;
        }
        else {
        	document.getElementById("node" + id).style.backgroundColor = tC;
        }
}



function showKids(id) {

        var cHeight = 0;

        for (i = 0; i < node[id].nChildren; i++) {
                cHeight += (node[id].children[i].space + node[id].children[i].height);
        }

        if (docAll) var pTop = parseInt(document.all["node" + id].style.top);
        else if (docLayers) var pTop = document.layers[id].top;
        else var pTop = parseInt(document.getElementById("node" + id).style.top);

        for (i = node.length -1; i > 0; i--) {

                if (docAll) {
                        topVal = parseInt(document.all["node" + i].style.top);

                        if (topVal > pTop) document.all["node" + i].style.top = topVal + cHeight + "px";
                }
                else if (docLayers) {
                        if (document.layers[i].top > pTop) document.layers[i].top += cHeight;
                }
                else {
                		topVal = parseInt(document.getElementById("node" + i).style.top);

                        if (topVal > pTop) document.getElementById("node" + i).style.top = topVal + cHeight + "px";
                }
        }

        if (docAll) var cTop = parseInt(document.all["node" + id].style.top) + node[id].height + node[id].children[0].space;
        else if (docLayers) var cTop = document.layers[id].top + node[id].height + node[id].children[0].space;
        else var cTop = parseInt(document.getElementById("node" + id).style.top) + node[id].height + node[id].children[0].space;

        for (i = 0; i < node[id].nChildren; i++) {

                if (docAll) {
                        document.all["node" + node[id].children[i].id].style.top = (cTop + "px");
                        document.all["node" + node[id].children[i].id].style.visibility = 'visible';
                }

                else if (docLayers) {
                        document.layers[node[id].children[i].id].top=cTop;
                        document.layers[node[id].children[i].id].visibility='show';
                }
                else {
                		document.getElementById("node" + node[id].children[i].id).style.top = (cTop + "px");
                        document.getElementById("node" + node[id].children[i].id).style.visibility = 'visible';
                }

                cTop += node[id].children[i].height;

                if (i < node[id].nChildren - 1) cTop += node[id].children[i + 1].space;
        }

        node[id].isOpen = true;
}

function hideKids(id) {

        var i = 0;
        var cHeight = 0;

        for (i = 0; i < node[id].nChildren; i++) {

                if (node[id].children[i].pHeight > 0)
                        cHeight += (node[id].children[i].space + node[id].children[i].pHeight);
                else
                        cHeight += (node[id].children[i].space + node[id].children[i].height);

                if (docAll) document.all["node" + node[id].children[i].id].style.visibility='hidden';
                else if (docLayers) document.layers[node[id].children[i].id].visibility='hide';
                else document.getElementById("node" + node[id].children[i].id).style.visibility='hidden';

                if ((node[id].children[i].nChildren > 0) && node[id].children[i].isOpen) {
                        cHeight += hideKids(node[id].children[i].id);
        		}       
        }

        node[id].isOpen = false;

        return cHeight;
}

function hideChildrenOf(id) {

        var kidsHeight = hideKids(id);

        if (docAll) {
                var topTxt = "";
                var topVal = 0;

                topTxt = document.all["node" + id].style.top;
                var pTop = Number(topTxt.substr(0, topTxt.length - 2));

                for (i = node.length -1; i > 0; i--) {

                        topTxt = document.all["node" + i].style.top;
                        topVal = Number(topTxt.substr(0, topTxt.length - 2))

                        if ((topVal > pTop) && (document.all["node" + i].style.visibility == 'visible')) {
                                document.all["node" + i].style.top = topVal - kidsHeight;
                        }
                }
        }

        else if (docLayers) {
                var pTop = document.layers[id].top;

                for (i = node.length -1; i > 0; i--) {
                        if (document.layers[i].top > pTop) {
                                document.layers[i].top -= kidsHeight;
						}        		
				}        
		}
		
		else {
				var topTxt = "";
                var topVal = 0;

                topTxt = document.getElementById("node" + id).style.top;
                var pTop = Number(topTxt.substr(0, topTxt.length - 2));

                for (i = node.length -1; i > 0; i--) {

                        topTxt = document.getElementById("node" + i).style.top;
                        topVal = Number(topTxt.substr(0, topTxt.length - 2))

                        if ((topVal > pTop) && (document.getElementById("node" + i).style.visibility == 'visible')) {
                                document.getElementById("node" + i).style.top = topVal - kidsHeight;
                        }
                }
		}
}

function nodeSwitch(id) {

        if (gMultOp == 0) {
                for (mo = 1; mo < node.length; mo++) {
                        if ((mo != id) && (node[mo].hierar == node[id].hierar) && (node[mo].isOpen))
                                hideChildrenOf(mo);
        }        }

        if (node[id].nChildren > 0) {

                if (!node[id].isOpen) {
                        showKids(id);
                } else {
                        hideChildrenOf(id);
}        }        }

function nodeRef(id) {

        if ((node[id].hRef.length > 0) && (node[id].target.length == 0)) {
                window.location.href = node[id].hRef;
        }

        if ((node[id].target.length > 0) && (node[id].hRef.length > 0)) {

                var nf = -1;

          /*
                for (tt = 0; tt < top.frames.length; tt++) {
                        if (top.frames[tt].name.toLowerCase() == node[id].target.toLowerCase()) {
                                nf = tt;
                                break;
                        }
                }

                if (nf > -1) {
                        top.frames[nf].location.href = node[id].hRef;
                        return;
                }
         */
                if (node[id].target.toLowerCase() == "_parent") {
                        parent.location.href = node[id].hRef;
                        return;
                }

                if (node[id].target.toLowerCase() == "_top") {
                        top.location.href = node[id].hRef;
                        return;
                }

                if (node[id].target.toLowerCase() == "_self") {
                         var tmp =  node[id].hRef;
                         if(tmp.indexOf("javascript:")>=0){
                             //tmp= node[id].hRef.substring(11,node[id].hRef.length);
                             //alert("EVAL:"+ tmp);
                             //document.location = "test.html";
                            //alert("DOC: "+ document.location.href);
                            // document.location = tmp;
                         // document.forms[0].submit();
                           //alert("submit()");
                          //document.forms[0].submit();

                            // eval(tmp);
                            // alert("submit()");
                         // return false;
                             //  eval('tmp');

                         }  else{
                                document.location = tmp;
                           }
                        return;
                }

                if (node[id].target.toLowerCase() == "_blank") {
                        window.open(node[id].hRef, 'window');
                        return;
                }
        }
}

function nodeClick(id) {

        if ((node[id].text=="") || (node[id].pHeight==0))
                return;

        if (node[id].hRef.length==0)
                return;

        node[gClickd].clicked = false;

        if (gClickd>0) {
                nodeOut(gClickd);
                gClickd = id;
        }

        // top.clicked = gClickd;

        node[gClickd].clicked = true;
        nodeOver(id);
}

function clickNO(id) {

        if (!node[id].isOpen) nodeSwitch(id);

        nodeSwitch(id);
        nodeClick(id);

        // top.Nodes = node;
        // top.clicked = gClickd;
}

function clickIT(id) {
        nodeRef(id);
        clickNO(id);
}

function clickNC(et) {
        clickIT(Number(this.id.substr(4,9)));
}

function drawIE(l, t, w, h) {

        var wIE = "<nobr>";

        if (this.hRef.length > 0){
                wIE += "<a href=\"" + this.hRef + "\" onclick=\"clickNO(" + this.id + ");\""
        }else{
                wIE += "<a href=\"javascript:void(0);\" onclick=\"clickNO(" + this.id + ");\"";
        }
        if (this.target.length > 0)
                wIE += "target=\"" + this.target + "\" ";

        wIE += "onMouseOver=\"nodeOver(" + this.id + "); sText(\'" + this.text + "\'); return true;\" ";
        wIE += "onMouseOut=\"nodeOut(" + this.id + "); sText(\'\'); return true;\">";

        wIE += "<div id=\"node" + this.id + "\" ";
        // wIE += "style=\"cursor:hand; position:absolute; top:" + t + "px; left:" + l + "px; width:" + w + "px; height:" + h + "px; visibility:hidden";
        wIE += "style=\"cursor:hand; position:absolute; top:" + t + "px; left:" + l + "px; width:" + w + "px; height:" + h + "px";
        if ((this.lStyle.length == 2) && (this.lStyle.charAt(1) == "1")) {
        	wIE += "; visibility: visible; border-top:1px solid rgb(51, 102, 153); border-left:1px solid rgb(51, 102, 153); border-bottom:1px solid rgb(51, 102, 153)";
				} else {
					wIE += "; visibility:hidden";
				}
				
        if (gClik[this.cClick] && this.clicked) {
                wIE += "; background-color:" + gClik[this.cClick];
        }

        wIE += "\"><font class=\"" + this.lStyle + "\">" + this.text + "</font>";

        wIE += "</div></a></nobr>";
				// alert(wIE);
        document.writeln(wIE);
}

function drawNC(l, t, w, h) {

        var wNC = "<layer id=\"node" + this.id + "\" top=" + t + " left=" + l + " width=" + w + " height=" + h + " ";
        wNC += "visibility=hide ";
        wNC += "onMouseOver=\"nodeOver(" + this.id + "); sText ('" + this.text + "'); return true;\" ";
        wNC += "onMouseOut=\"nodeOut(" + this.id + "); sText (''); return true;\"";

        if (gClik[this.cClick] && this.clicked)
                wNC += " bgcolor=\"" + gClik[this.cClick] + "\"";

        wNC += "><nobr>";
        if (this.hRef.length > 0 ){
                       wNC += "<a href=\"" + this.hRef + "\" ";
                     //wNC += "<a href=\"javascript:void(0);\" ";
                   //alert(this.hRef);
              }else{
                      wNC += "<a href=\"javascript:void(0);\" ";
       }
        //wNC += "<a href=\"javascript:void(0);\" ";

        wNC += "onClick=\"clickIT(" + this.id + ")\" ";
        wNC += "onMouseOver=\"nodeOver(" + this.id + "); sText('" + this.text + "'); return true;\">";
        wNC += "<font class=\"" + this.lStyle + "\">" + this.text + "</font>";

        wNC += "</a></nobr>";
        wNC += "</layer>";
        // alert(wNC);
        document.writeln(wNC);

        document.layers[document.layers.length - 1].captureEvents(Event.CLICK);
        document.layers[document.layers.length - 1].onclick = clickNC;
}

function drawElse(l, t, w, h) {

		//alert("drawElse invoked");
        var wElse = "<nobr>";

        if (this.hRef.length > 0){
                wElse+= "<a href=\"" + this.hRef + "\" onclick=\"clickNO(" + this.id + ");\""
        }else{
                wElse+= "<a href=\"javascript:void(0);\" onclick=\"clickNO(" + this.id + ");\"";
        }
        if (this.target.length > 0)
                wElse+= "target=\"" + this.target + "\" ";

        wElse+= "onMouseOver=\"nodeOver(" + this.id + "); sText(\'" + this.text + "\'); return true;\" ";
        wElse+= "onMouseOut=\"nodeOut(" + this.id + "); sText(\'\'); return true;\">";

        wElse+= "<div id=\"node" + this.id + "\" ";
        //wElse+= "style=\"cursor:hand; position:absolute; top:" + t + "px; left:" + l + "px; width:" + w + "px; height:" + h + "px; visibility:hidden";
        wElse+= "style=\"cursor:hand; position:absolute; top:" + t + "px; left:" + l + "px; width:" + w + "px; height:" + h + "px";
        if ((this.lStyle.length == 2) && (this.lStyle.charAt(1) == "1")) {
        	wElse += "; visibility: visible; border-top:1px solid rgb(51, 102, 153); border-left:1px solid rgb(51, 102, 153); border-bottom:1px solid rgb(51, 102, 153)";
				} else {
					wElse += "; visibility:hidden";
				}

        if (gClik[this.cClick] && this.clicked) {
                wElse+= "; background-color:" + gClik[this.cClick];
        }

        wElse+= "\"><font class=\"" + this.lStyle + "\">" + this.text + "</font>";

        wElse+= "</div></a></nobr>";

        document.writeln(wElse);
}

function nodeDraw() {

        var links = gLeft + (this.hierar - 1) * gInd;
        var oben  = gTop + this.height + this.space;
        var breit = gWidth - links;
        var hoch  = this.height;

        if (docAll) this.drawIE(links, oben, breit, hoch);
        else if (docLayers) this.drawNC(links, oben, breit, hoch);
        //else alert("nodeDraw invoked");
        else this.drawElse(links, oben, breit, hoch);

        return true;
}

function Resize(evt) {
         reverter();
/*
        top.frames[0].location.reload();
        top.frames[1].location.reload();
        top.frames[2].location.reload();
        */
}

function initNodes() {

        if (docLayers) {
                if (document.layers.length==0) {
                        document.writeln("<layer id='null'></layer>");
        		}
        }

        var i = 0;

        for (i = 1; i < node.length; i++)
                node[i].draw();

        var nCntr, oben, obsp = 0;
        var nhgt  = gTop;

        for (i = 1; i < node.length; i++) {

                if (node[i].hierar == 1) {

                        nCntr++;

                        obsp += node[i].space;
                        oben = nhgt + obsp;

                        if (docAll) {
                                document.all["node" + i].style.top = oben;
                                document.all["node" + i].style.visibility = "visible";
                        }
                        else if (docLayers) {
                                document.layers[i].top = oben;
                                document.layers[i].visibility = "show";
                        }
                        else {
                        		document.getElementById("node" + i).style.top = oben;
                        		document.getElementById("node" + i).style.visibility = "visible";
                        }
                        
                        
                        nhgt += node[i].height;
                }
        }
       // top.onResize=top.frames[1].Resize;
}

function ancestor(id) {
        if (node[id].parNr==0)
                return id;

        myNode=node[id];

        while (myNode.parNr!=0) {
                myNode=node[myNode.parNr];
        }

        return myNode.id;
}

function ext_checkView(cNr) {

        if (node[cNr].parNr==0)
                return false;

        if (!node[node[cNr].parNr].isOpen) {
                var test = ext_checkView(node[cNr].parNr);
                showKids(node[cNr].parNr); }

        return true;
}

function ext_off() {
        if (gClickd!=0) {
                node[gClickd].clicked = false;
                nodeOut(gClickd);
                // top.clicked=0;
                gClickd=0;
        }
}

function ext_nav(eName) {
        var eFound=0;
        for (f = 1; f < node.length; f++)
        {
                if (eName == node[f].name) {
                                eFound = f;
                                f = node.length;
                }
        }

        if (eFound > 0) {
                var test = ext_checkView(eFound);

                if (gMultOp==0) {
                        var parOfAll = ancestor(eFound);

                        for (i=1; i < node.length; i++) {
                                if (node[i].parNr==0) {
                                        if (node[i].isOpen && node[i].id!=parOfAll)
                                                hideChildrenOf(i);
                }        }        }

                nodeClick(eFound);

                if ((gContOp == 1) && (!node[eFound].isOpen))
                                nodeSwitch(eFound);

               // parent.frames[0].focus();
		}        
}
