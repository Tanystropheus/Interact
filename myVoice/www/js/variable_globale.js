//  Tableau Globale:
var all_elem = [];
var all_elem_stat = [];
var all_phrase = [];
// var	the_curseur;

//	Pour les onglet
var indice;
var indice_prev;


//paper.install(window);
// var tool1, tool2, tool_diag;



function elem_stat()
{
    this.elemId = 0;
    this.nb_use = 0;
    this.lst_senstenceId = [];
}

function myVoiceSentence(sentenceId, listElemId, time) {
	this.sentenceId = sentenceId;
	this.listElemId = listElemId;
	this.time = time;
};


//	viteuf utiliser mais je crois que ca n'es plus le cas
// function myVoiceGlobaleSentence(globaLsentenceId, listElemId) {
// 	this.global_sentenceId = globaLsentenceId;
// 	this.list_time = [];
// 	this.nb_use = 0;
// 	this.list_elemId = listElemId;
// 	this.updatedb = function(){
// 		alert("db update func not yet created");
// 	};
// };







//  recupere les image dans la page HTML et genere des phrase
function    aleatoire()
{
    get_image(all_elem);
    senario_1(30);          // nombre de journer simuler
}


//	si l'id de la sentence est le meme qu'un precedent, on ecrase l'encienne phrase
function 	add_one_sentence(sentence)
{
	all_phrase[sentence['sentenceId']] = sentence;
	actual_elem_stat(sentence);
}

//	La meme mais avec un tableau 
function	add_mutiple_sentence(sentence_tab)
{
	for (var x in sentence_tab)
	{
		all_phrase[sentence_tab[x]['sentenceId']] = sentence_tab[x];
		actual_elem_stat(sentence_tab[x]);
	}
}

function	add_one_elem(elem)
{
	all_elem[elem['elemid']] = elem;
}

function	add_multiple_elem(elem_tab)
{
	for (var x in elem_tab)
	{
		all_elem[elem_tab[x]['elemid']] = elem_tab[x];
	}
}







//	Pour actualiser les stat
function actual_elem_stat(sentence)
{
    var indice = 0;
    for (var x in sentence['listElemId'])
    {
        indice = parseInt(sentence['listElemId'][x]);
        if (all_elem_stat[indice] == undefined)
        {
            // console.log("OUI:"+x);
            all_elem_stat[indice] = new elem_stat();
            all_elem_stat[indice]['nb_use'] = 0;
        }

        all_elem_stat[indice]['elemId'] = indice;
        all_elem_stat[indice]['lst_senstenceId'][all_elem_stat[indice]['nb_use']] = sentence['sentenceId'];
        all_elem_stat[indice]['nb_use']++;
    }
}

//	pour recupere les image a partir d'un objet html
function get_image(lst_elem)
{
     var lst_img = document.getElementsByClassName('img_stat');
    
    for(var x = 0; x < lst_img.length; x++)
    {
        lst_elem[lst_img.item(x).id] = new myVoiceElem(lst_img.item(x).id, lst_img.item(x).src, lst_img.item(x).width, 0, x, x, lst_img.item(x).alt, true);
        // all_elem_stat[x] = new elem_stat();

    }
}