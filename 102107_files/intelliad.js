/**
 * Send click pixel
 *
 * Valid conversion types:
 * - 'sa' for sale
 * - 'le' for lead
 * - 'si' for signup
 * - 'pa' for pageview
 * - 'do' for download
 *
 * Note: Links should always open in a new window (target=_blank)
 *
 * @param integer  cId     Client ID [mandatory]
 * @param string   cvType  Conversion Type (i.e. 'le', 'sa', 'do', 'si')  [mandatory]
 * @param float    cvValue Conversion Value (i.e. '2.5') [mandatory]
 * @param object   opts    Additional Info [optional] Refer to manual for valid options and parameters
 */
function iapixel(cvType, cvValue, opts) {
		cId = '5313633333236323131303';
    if (cId && cvType && cvValue) {
        var merge = function(d,s){ for(var p in s){ if(d.hasOwnProperty(p)){ d[p]=s[p]; } } return d; };
        var options = merge({
            currency: 'EUR',  // conversion currency code(ACCORDING ISO 4271 i.e. 'EUR' or 'USD') [optional]
            orderId: '', // orderId [optional]
            custom1: '', // custom value 1 [optional]
            custom2: '', // custom value 2 [optional]
            custom3: '', // custom value 3 [optional]
            custom4: ''  // custom value 4 [optional]
        }, opts || {});
        var varMap = {
            currency: 'vv', orderId: 'po',
            custom1: 'c1', custom2: 'c2', custom3: 'c3', custom4: 'c4'
        };
        var proto = (document.location.toString().indexOf('https://') != -1) ? 'https' : 'http';
        var uri = 't23.intelliad.de/tc.php';
        var url = '?cl='+encodeURIComponent(cId)+'&v='+encodeURIComponent(cvValue)+'&vz='+encodeURIComponent(cvType)+'&';
        for(var v in varMap){ if(varMap.hasOwnProperty(v)){ url+= varMap[v]+'='+encodeURIComponent(options[v])+'&'; }}
        var imgsrc = proto+'://'+uri+url+'&rand='+Math.floor(Math.random()*11111139435231);
        var img = new Image(); img.setAttribute('width', 1); img.setAttribute('height', 1); img.src = imgsrc;
        document.getElementsByTagName('body')[0].appendChild(img);
    }
    return true;
}

var ia_tp="t23.intelliad.de/tc2.js";
var ia_v="0.0"; // conversion value (i.e. "2.5") [mandatory]
var ia_vz="pa"; // conversion type (possible values: sale -> "sa", lead -> "le", signup -> "si", pageview -> "pa", download -> "do") [mandatory]
var ia_vv="EUR"; // conversion currency code(ACCORDING ISO 4271 i.e. "EUR" or "USD") [optional,if not given "EUR" is used as default]
var ia_po=""; // orderId [optional] 
var ia_c1=""; // custom value 1 [optional]
var ia_c2=""; // custom value 2 [optional]
var ia_c3=""; // custom value 3 [optional]
var ia_c4=""; // custom value 4 [optional]
var ia_pi=""; // productIds (if more than 1 seperate with | e.g. "12356|56899") [optional]

var ia_cl="5313633333236323131303";
var ia_rand = Math.floor(Math.random()*11111139435231);

var ia_link=ia_tp+'?cl='+ia_cl+'&v='+ia_v+'&vz='+ia_vz+'&vv='+ia_vv+'&po='+ia_po+'&c1='+ia_c1+'&c2='+ia_c2+'&c3='+ia_c3+'&c4='+ia_c4+'&pi='+ia_pi+'&rand='+ia_rand;

// Commented to avoid pa conversion on every page
//document.write('<sc'+'ript src="'+'http'+(document.location.protocol=='https:'?'s':'')+'://'+ia_link+'"></sc'+'ript>');


// SEO part
var ia_tc = ""; // optional Kampagne
var ia_sc = ""; // optional AdGroup

document.write('<sc'+'ript src="'+'http'+(document.location.protocol=='https:'?'s':'')+'://t13.intelliad.de/cl/5313633333236323131303.js"></sc'+'ript>');

