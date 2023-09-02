
const url="https://test-data-gules.vercel.app/data.json";
fetch(url).then(object => object.json()).then((object)=>{
    questionrender(object);
});
var totalquestions=0;
var quesdone=0;
function questionrender(object){
    object.data.forEach((quest)=>{
        const parent =document.querySelector('.accordian');
        const onecat =document.createElement('div');
        onecat.classList.add('rendered');
        const label=document.createElement('div');
        label.classList.add('label');
        label.innerHTML=`<h2>${quest.title}</h2>`
        const questions =document.createElement('div');
        questions.classList.add('question');
        var s=1;
        sing=document.createElement('table');
        sing.classList.add('mat');
        quest.ques.forEach((onequestion)=>{
            single=document.createElement('tr');
            let ytl=onequestion.yt_link;
            let cnl=onequestion.p1_link;
            let ytlimg="youtube.png";
            let cnlimg="codingninjas.png";
            if(!ytl){
                ytlimg="";
                ytl="#";
            }
            if(!cnl){
                cnlimg="";
                cnl="#";
            }
            single.innerHTML=`<td class="maint">${s}</td>`+`<td>${onequestion.title}</td>`+`<td><a class="yt" href="${ytl}" target="_blank"><img src="${ytlimg}"></a></td>`+`<td><a class="cn" href="${cnl}" target="_blank"><img src="${cnlimg}"></a></td>`;
            button=document.createElement('button');
            button.classList.add('buttonc');
            button.innerHTML=`<img id="comp" src="completed1.png">`;
            single.appendChild(button);
            button.addEventListener('click',function(event){
                event.stopImmediatePropagation();
                let val=this.parentNode.classList.contains('done');
                if(val){
                    quesdone--;
                    this.parentNode.classList.remove('done');
                }
                else{
                    quesdone++;
                    this.parentNode.classList.add('done');
                }
                updateProgress();
            })
            s++;
            totalquestions++;
            sing.appendChild(single);
        });
        questions.appendChild(sing);
        onecat.appendChild(label);
        onecat.appendChild(questions);
        parent.appendChild(onecat);
        
        onecat.addEventListener('click', function () {
            this.classList.toggle('active');
        })  
        
        updateProgress();
    });
}
function updateProgress() {
    const fillTextElements = document.getElementsByClassName('filltext');
    const fillElements = document.getElementsByClassName('fill');
    
    // Loop through elements and update content/attributes
    for (let i = 0; i < fillTextElements.length; i++) {
      fillTextElements[i].innerHTML = `${quesdone}/${totalquestions}`;
    }
    
    for (let i = 0; i < fillElements.length; i++) {
      fillElements[i].setAttribute('style', `width:${(quesdone / totalquestions) * 100}%`);
    }
  }
  
document.querySelector('.toggle').addEventListener('click',function(e){
    this.classList.toggle('activer');
    document.querySelector('#home').classList.toggle('change');
    document.querySelector('header').classList.toggle('change');
    document.querySelector('.search').classList.toggle('change');
    e.stopPropagation();
});


