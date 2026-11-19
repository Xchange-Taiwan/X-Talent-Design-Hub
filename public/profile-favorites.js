// Shared by the mentor directory, public profile and saved mentors in this Hub tab.
(() => {
 const key='xt-hub-favorite-mentors';
 const ids={zahra:'1',alex:'2',sarah:'3',emily:'emily',jamie:'jamie'};
 function read(scenario){
  if(['empty-favorites','guest','login'].includes(scenario))return [];
  if(scenario==='one')return ['3'];
  if(scenario==='saved')return ['1','2','3'];
  try{
   const value=JSON.parse(sessionStorage.getItem(key));
   if(Array.isArray(value))return value.filter(id=>typeof id==='string');
  }catch{}
  return ['2','3'];
 }
 function save(ids){sessionStorage.setItem(key,JSON.stringify(ids));return ids;}
 const recommended=[
  {id:'emily',key:'emily',name:'Emily Chen',job_title:'UI/UX 設計師',company:'Design Matters',average:9,completed:24,experience:'3–5 年',bio:'一起整理作品集敘事與設計流程。',tags:['作品集檢視','職涯規劃'],skills:['UX Research','Figma']},
  {id:'jamie',key:'user',name:'Jamie Lin',job_title:'Lead Product Designer',company:'Product Studio',average:9.4,completed:360,experience:'10 年以上',bio:'一起練習設計面試與跨團隊合作。',tags:['模擬面試','職涯規劃'],skills:['UI Design','產品策略']}
 ];
 window.hubFavorites={ids,read,save,recommended};
})();
