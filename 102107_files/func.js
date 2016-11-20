//______________________________________________________________________________
//
// Project: IBS 
// File: func.js
// Version: %version: 3 %
//______________________________________________________________________________
//
// created by: kriega
// creation date: Thu Mar  3 11:14:45 2005
// changed by: %derived_by: somenr %
// change date: %date_modified: Wed Nov  7 09:41:55 NFT 2007 %
//______________________________________________________________________________
//
// copyright: (c) BMW AG 2005, all rights reserved
//______________________________________________________________________________

	function reverter() {
		// instead of "reload" recall the last state
    	controllerHRef = window.location.href;
    	parpos = controllerHRef.indexOf("?");
    	if ( parpos >= 0) controllerHRef = controllerHRef.substring( 0, parpos);
    	window.location.href = controllerHRef + "?event=_revert";
	}

    function showIt(laypass) {
		// IE Code
 		if (browser == 'msie')
 			document.all[laypass].style.visibility="visible";

		// Netscape 4.x Code
		if (browser == 'ne' && ver < 5)
			document.layers[laypass].visibility="show";

		// Netscape 6.x Code
		if (browser == 'ne' && ver >= 5)
			document.getElementById(laypass).style.visibility = "visible";
	}

	function hideIt(laypass) {
		// IE Code
 		if (browser == 'msie')
			document.all[laypass].style.visibility="hidden";

		// Netscape 4.x Code
		if (browser == 'ne' && ver < 5)
		    document.layers[laypass].visibility="hide";

		// Netscape 6.x Code
		if (browser == 'ne' && ver >= 5)
			document.getElementById(laypass).style.visibility = "hidden";
	}

	function doreset(){
		document.forms[0].reset();
	}

	function doImplementationFailed() {
          alert("noch nicht implementiert.");
	}
	
	function menuSubmit() {
		document.forms[0].action = menuSubmit.arguments[0];
		document.forms[0].target.value = menuSubmit.arguments[2];
		
		commonSubmit(menuSubmit.arguments[1], menuSubmit.arguments[3], menuSubmit.arguments[4], menuSubmit.arguments[5]);
	}

		
	function revertIfNecessaryAndReset()
	{
	 var erg=revertIfNecessary();
	 submitCounter--;
	 return erg;
	}
	
	function revertIfNecessary()
	{
	   var reverted=0;
	   submitCounter++;
	   //Special case -1; submitted, but next submit(blocked) does not bring an alert message 
	   if ( submitCounter != 1 && submitCounter!=-1 ){
	    	// The problem: Just ignoring this additional submit() does NOT work: as soon
	    	// as the browser receives an event (like a click) it STOPS rendering the
	    	// page that has been requested by the first submit(). Therefore the answer
	    	// to the first request never appears on the screen.
	    	// As a solution we send a _revert-event. Another solution would be to
	    	// disable (after the very first submit() - all form elements generating 
	    	// events for the browser - in this case we would never arrive here.
	    	//
	    	// document.forms[0].event.value = "_revert";
	    	// document.forms[0].submit(); // problems when switching to another DM
	    	if(submitCounter>0) alert( pleaseWaitUntilReadyMsg);
	    	// do not submit() to avoid subtle token problems
	    	reverter();
	    	reverted=1;
	    }
	   return reverted; 
	}
		
		
	function commonSubmit() {
		
		if (document.forms[0].event) {
			document.forms[0].event.value = commonSubmit.arguments[0];
		}
		if (document.forms[0].param1) {
			document.forms[0].param1.value = commonSubmit.arguments[1];
		}
		if (document.forms[0].param2) {
			document.forms[0].param2.value = commonSubmit.arguments[2];
		}
	    if (document.forms[0].param3) {
		    document.forms[0].param3.value = commonSubmit.arguments[3];		
	    }
	    if(revertIfNecessary()==0) document.forms[0].submit();
	   
	}
		
	function commonSubmit4Popups(event) {
		
		document.forms[0].event.value = event;
	    document.forms[0].submit();
	   
	}
		
	function submitSM() {
		document.forms[0].target.value=submitSM.arguments[1];
		commonSubmit(submitSM.arguments[0], submitSM.arguments[2], submitSM.arguments[3], submitSM.arguments[4]);
	}

	
	/** Markus Warnking: Helferunktion f?r den Sprung in OBB-Detaildaten**/
	function submitASSOBB(){
		document.content.ereignis.value = submitASS.arguments[0];
		document.content.event.value = submitASS.arguments[1];
		document.content.target.value = submitASS.arguments[2];
		document.content.destobb.value = submitASS.arguments[3];
		document.content.submit();
	}

	function setSelectedTabIndex(){
		document.content.selectedtabindex.value = setSelectedTabIndex.arguments[0];
	}

	function submitOBB(){
		commonSubmit(submitOBB.arguments[0], submitOBB.arguments[1], submitOBB.arguments[2], submitOBB.arguments[3]);
	}

	function submitPAParam2(){
	    document.forms[0].event.value = submitPA.arguments[0];
	    document.forms[0].target.value = submitPA.arguments[1];
	    document.forms[0].param2.value = submitPA.arguments[2];
	    document.forms[0].submit();
	}
/*
		function submitRSS() {
			document.forms[0].target.value=submitRSS.arguments[1];
			commonSubmit(submitRSS.arguments[0], submitRSS.arguments[2], submitRSS.arguments[3], submitRSS.arguments[4]);
		}
*/
	function newGeschaeftsbereich() {
	  	document.forms[0].event.value="changeGeschaeftsbereich";
        document.forms[0].addinfo.value="changeGeschaeftsbereich";
	  	commonSubmit("changeGeschaeftsbereich");
	}

	/*
	?ffnet Menu Node und zeigt alle Nachfolger
	author: Andreas Caternberg
	*/
	function setMenuOpen(){
		document.forms[0].menuOpenNodeId.value = setMenuOpen.arguments[0];
		document.forms[0].menuCloseNodeId.value = "";
		document.forms[0].menuNodeId.value = setMenuOpen.arguments[1];
		//document.forms[0].submit();
	}

	/*
	Schliesst Menu Node
	author: Andreas Caternberg
	*/
	function setMenuClose(){
		document.forms[0].menuCloseNodeId.value = setMenuClose.arguments[0];
		document.forms[0].menuOpenNodeId.value = "";
		document.forms[0].menuNodeId.value = setMenuClose.arguments[1];
		//document.forms[0].submit();
	}


	/*
		Trimming text inputs
	*/
	function trim(control) {
		var x = eval("document.forms[0]." + control);
		if (x) {
			while('' + x.value.charAt(0) == ' ') {
				x.value = x.value.substring(1, x.value.length);
			}
			return (x.value != "");
		}
		return false;
	}

	/*
		(De)select/(Un)check radioboxes/checkboxes when input text content change
	*/
	function doDependencySelect() {
		// arguments[0] = checkbox name / radiobutton name
		// arguments[1..n] = input text
		var checkBoxRadio = eval("document.forms[0]." + doDependencySelect.arguments[0]);
		if (checkBoxRadio) {
			var checked = false;
			for (var i = 1; i < doDependencySelect.arguments.length; i++) {
				checked = checked || trim(doDependencySelect.arguments[i]);
			}
			if (checkBoxRadio.type == "checkbox") {
				checkBoxRadio.checked = checked;
			} else if (checkBoxRadio.length && checkBoxRadio[0].type == "radio") {
				for (var j = 0; j < checkBoxRadio.length; j++) {
					checkBoxRadio[j].checked = false;
					if (checkBoxRadio[j].value == "0") {
						checkBoxRadio[j].checked = checked;
					} else {
						checkBoxRadio[j].checked = !checked;
					}
				}
			}
		}
	}

	/*
		Clear input text content when radioboxes/checkboxes (de)selected/(Un)checked
	*/
	function doDependencyDeselect() {
		var checkBoxRadio = eval("document.forms[0]." + doDependencyDeselect.arguments[0]);
		if (checkBoxRadio) {
			var checked = false;
			if (checkBoxRadio.type == "checkbox") {
				checked = checkBoxRadio.checked;
			} else if (checkBoxRadio.length && checkBoxRadio[0].type == "radio") {
				for (var j = 0; j < checkBoxRadio.length; j++) {
					checked = checkBoxRadio[j].checked && checkBoxRadio[j].value == "0";
					if (checked) {
						break;
					}
				}
			}

			if (!checked) {
				for (var i = 1; i < doDependencyDeselect.arguments.length; i++) {
					var x = eval("document.forms[0]." + doDependencyDeselect.arguments[i]);
					if (x) {
						x.value = "";
					}
				}
			}
		}
	}

	if (navigator && navigator.appName == "Netscape") {
		document.captureEvents(Event.KEYPRESS);
	}
		
	/**
	Pre-condition.
	   "box" is a combobox with multiple selction on.
	   The box is selected at least at index "idx" 
	Post-condition.
		"box" is selected at index "idx" only.
	author: Michael E. Klews
	*/
	function SelectAtIdxOnly(box, idx)
	{
		if (box.selectedIndex == idx) {
			box.selectedIndex = idx;
		}
	}
	
	/**
	*
	* Fuegt der Url den Parameter BMW_UTCJ2EE_TOKEN mit dem entsprechenden Wert aus
	* document.forms[0].BMW_UTCJ2EE_TOKEN hinzu. Vorher  wird entweder ein & oder in ? 
	* eingef?gt. Bitte nur benutzern, wenn wirklich ein hidden-field-token gesetzt ist.
	* 
	*/
	//@a.bock 20112003 crs werden vor dem zusammenbauen der url entfernt
	
	function addTokenToUrl(url)
	{
		var menuIds= "&menuOpenNodeId=" +document.forms[0].menuOpenNodeId.value + "&menuNodeId="+document.forms[0].menuNodeId.value;
		var delim="?"
		var newUrl="";
		var tokenString = document.forms[0].BMW_UTCJ2EE_TOKEN.value;
		//alert("tokenString orig.: " + tokenString);
		tokenString = tokenString.replace(/\n/gi,"" );
		//alert("tokenString new: " + tokenString);
		if (url.indexOf("?")>-1) delim="&";
		newUrl=url+delim+"BMW_UTCJ2EE_TOKEN"+"="+tokenString+menuIds;
		window.location=newUrl;
	}
	