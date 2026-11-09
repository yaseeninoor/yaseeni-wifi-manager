const demoUsers=[
{id:1,name:"Sample User 001",room:"Room 01",username:"USER001",expiresAt:"2026-12-01",status:"Active"},
{id:2,name:"Sample User 002",room:"Room 02",username:"USER002",expiresAt:"2026-10-01",status:"Expired"},
{id:3,name:"Sample User 003",room:"Room 03",username:"USER003",expiresAt:"2026-12-15",status:"Active"},
{id:4,name:"Sample User 004",room:"Room 04",username:"USER004",expiresAt:"2026-12-01",status:"Disabled"}
];
let users=[...demoUsers];const $=s=>document.querySelector(s);
function render(){const q=$("#search").value.toLowerCase();const shown=users.filter(u=>[u.name,u.room,u.username].some(v=>v.toLowerCase().includes(q)));$("#users").innerHTML=shown.map(u=>{const cls=u.status.toLowerCase();return `<tr><td>${escapeHtml(u.name)}</td><td>${u.room}</td><td>${escapeHtml(u.username)}</td><td>${u.expiresAt}</td><td><span class="pill ${cls}">${u.status}</span></td><td><button class="small-btn" data-id="${u.id}">${u.status==="Disabled"?"Enable demo":"Disable demo"}</button></td></tr>`}).join("");$("#totalUsers").textContent=users.length;$("#activeUsers").textContent=users.filter(u=>u.status==="Active").length;$("#expiredUsers").textContent=users.filter(u=>u.status==="Expired").length;$("#disabledUsers").textContent=users.filter(u=>u.status==="Disabled").length;}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
$("#search").addEventListener("input",render);$("#users").addEventListener("click",e=>{const id=Number(e.target.dataset.id);if(!id)return;const u=users.find(x=>x.id===id);u.status=u.status==="Disabled"?"Active":"Disabled";render();});
$("#addUser").onclick=()=>$("#userDialog").showModal();$("#closeDialog").onclick=$("#cancel").onclick=()=>$("#userDialog").close();
$("#userForm").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.target);users.push({id:Math.max(0,...users.map(u=>u.id))+1,name:d.get("name"),room:d.get("room"),username:d.get("username"),expiresAt:d.get("expiresAt"),status:"Active"});e.target.reset();$("#userDialog").close();render();});
render();