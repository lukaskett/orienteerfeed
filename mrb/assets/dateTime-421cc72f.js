import{r as m,t as c,A as o}from"./useDataProvider-386edcea.js";import{u as p}from"./CompetitionView-605400e4.js";import{d as M,c as i,o as u,a as l,b as d,t as s,u as g,a5 as S}from"./index-886848bc.js";function y(e,t){return m(2,arguments),c(e).getTime()-c(t).getTime()}var f={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}},D="trunc";function b(e){return e?f[e]:f[D]}function A(e,t,n){m(2,arguments);var a=y(e,t)/1e3;return b(n==null?void 0:n.roundingMethod)(a)}const _={key:0},F=M({__name:"CategoryTableHeader",props:{category:null,athletesCount:null},setup(e){const t=e;p();const n={M:"bg-male",F:"bg-female",X:"bg-neutral"},a=i(()=>n[t.category.gender]||n.X),h=i(()=>{const r=[];return t.category.length&&r.push(`${t.category.length} m`),t.category.climb&&r.push(`↑${t.category.climb} m`),t.category.controls&&r.push(`${t.category.controls} k`),r.join(" / ")});return(r,k)=>(u(),l("h2",{class:S([g(a),"sticky flex justify-between gap-2.5 top-0 rounded-lg text-white text-4xl font-bold z-2"])},[d("span",null,s(t.category.name),1),(u(),l("span",_,s(g(h)),1)),d("span",null,s(t.athletesCount.finished)+" / "+s(t.athletesCount.full),1)],2))}}),I=e=>C[e],C={[o.Ok]:"OK",[o.Mispunch]:"DISK",[o.Disqualified]:"DISK",[o.DidNotFinish]:"DNF",[o.Running]:"...",[o.NotStarted]:"-",[o.OverMaxTime]:"DISK",[o.DidNotStart]:"DNS",[o.NotCompeting]:"MS"},T=e=>{const t=Math.floor(e/60),n=e-t*60;return{minutes:t,seconds:n}},O=e=>{const{minutes:t,seconds:n}=T(e);return`${t}:${n<10?"0":""}${n}`};export{F as _,O as a,A as d,I as f};