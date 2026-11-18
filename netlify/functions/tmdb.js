
<div id="moviespk">
<style>
#moviespk{background:#080c17;color:#fff;font-family:Arial,sans-serif;margin:0;padding:0;min-height:100vh}
#moviespk *{box-sizing:border-box}
#moviespk .topbar{background:#101827;padding:17px 5%;display:flex;align-items:center;justify-content:space-between;gap:15px;flex-wrap:wrap;border-bottom:1px solid #27334a}
#moviespk .brand{font-size:25px;font-weight:900;color:#ffc247}
#moviespk nav{display:flex;gap:18px;flex-wrap:wrap}
#moviespk nav a{color:#eee;text-decoration:none;font-size:14px}
#moviespk input{background:#1b263a;color:white;border:1px solid #35435c;padding:13px 16px;border-radius:25px;outline:none;width:230px}
#moviespk .hero{padding:85px 7%;min-height:390px;display:flex;align-items:center;background:linear-gradient(90deg,#080c17 5%,#080c17dd 55%,#080c1740),url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600') center/cover}
#moviespk .hero-content{max-width:600px}
#moviespk .hero h1{font-size:clamp(34px,5vw,55px);margin:0 0 18px;line-height:1.1}
#moviespk .hero p{color:#d2d5df;line-height:1.8;margin-bottom:25px}
#moviespk .gold{background:#ffc247;color:#10131c;border:0;padding:13px 20px;border-radius:7px;font-weight:bold;cursor:pointer}
#moviespk .section{padding:35px 5%}
#moviespk .heading{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:20px}
#moviespk h2{font-size:23px;margin:0}
#moviespk .tabs{display:flex;gap:9px;flex-wrap:wrap;margin-bottom:22px}
#moviespk .tabs button,#moviespk .secondary{background:#202c41;color:#fff;border:0;padding:10px 15px;border-radius:7px;cursor:pointer}
#moviespk .tabs button.active{background:#ffc247;color:#10131c}
#moviespk .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:18px}
#moviespk .movie{background:#141d2d;border-radius:11px;overflow:hidden;cursor:pointer;position:relative;transition:.2s}
#moviespk .movie:hover{transform:translateY(-5px)}
#moviespk .movie img{display:block;width:100%;aspect-ratio:2/3;object-fit:cover;background:#202c41}
#moviespk .movie-info{padding:12px}
#moviespk .movie-info h3{font-size:15px;margin:0 0 9px}
#moviespk .meta{font-size:12px;color:#b5bdcc}
#moviespk .rating{color:#ffc247}
#moviespk .heart{position:absolute;right:9px;top:9px;border:0;border-radius:50%;width:35px;height:35px;background:#111c;color:#fff;font-size:20px;cursor:pointer}
#moviespk .status{padding:30px;text-align:center;color:#bdc5d3}
#moviespk .modal{display:none;position:fixed;inset:0;background:#000e;z-index:999999;overflow:auto;padding:20px;align-items:center;justify-content:center}
#moviespk .modal-box{background:#141e30;border:1px solid #34415a;border-radius:13px;max-width:760px;width:100%;padding:25px;position:relative}
#moviespk .close{position:absolute;right:15px;top:10px;background:none;border:0;color:#fff;font-size:28px;cursor:pointer}
#moviespk .details-layout{display:flex;gap:22px;margin-top:22px}
#moviespk .details-layout img{width:180px;height:max-content;border-radius:9px}
#moviespk .description{color:#d0d5df;line-height:1.8;font-size:14px}
#moviespk .actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}
#moviespk .trailer{width:100%;aspect-ratio:16/9;border:0;margin-top:20px}
#moviespk footer{background:#101827;text-align:center;padding:35px 15px;color:#b5bdcc;line-height:2}
#moviespk footer strong{color:#ffc247}
#moviespk footer a{color:#ffc247;text-decoration:none;margin:7px}
@media(max-width:600px){
#moviespk .topbar{justify-content:center}
#moviespk nav{width:100%;justify-content:space-around}
#moviespk .hero{padding:55px 6%;min-height:330px}
#moviespk .section{padding:27px 4%}
#moviespk .grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
#moviespk .details-layout{flex-direction:column}
#moviespk .details-layout img{width:145px}
}
</style>

<header class="topbar">
 <div class="brand">🎬 MOVIES PK</div>
 <nav>
  <a href="#mp-home">Home</a>
  <a href="#mp-movies">Movies</a>
  <a href="#mp-tv">TV Shows</a>
  <a href="#mp-fav">Watchlist</a>
 </nav>
 <input id="mp-search" type="search" placeholder="Search movies...">
</header>

<div class="hero" id="mp-home">
 <div class="hero-content">
  <h1>Your World of Cinema</h1>
  <p>Discover trending movies, exciting TV shows, amazing stories and official trailers. Find your next favourite movie!</p>
  <button class="gold" onclick="document.getElementById('mp-movies').scrollIntoView({behavior:'smooth'})">Explore Movies →</button>
 </div>
</div>

<section class="section" id="mp-movies">
 <div class="heading"><h2>🔥 Discover Movies</h2></div>
 <div class="tabs" id="mp-movie-tabs">
  <button class="active" data-path="trending/movie/week">Trending</button>
  <button data-path="movie/popular">Popular</button>
  <button data-path="movie/top_rated">Top Rated</button>
  <button data-path="movie/now_playing">Now Playing</button>
  <button data-path="movie/upcoming">Upcoming</button>
 </div>
 <div class="grid" id="mp-movie-grid"><div class="status">Loading movies...</div></div>
</section>

<section class="section" id="mp-tv">
 <div class="heading"><h2>📺 Popular TV Shows</h2></div>
 <div class="tabs" id="mp-tv-tabs">
  <button class="active" data-path="tv/popular">Popular</button>
  <button data-path="tv/top_rated">Top Rated</button>
  <button data-path="tv/airing_today">Airing Today</button>
 </div>
 <div class="grid" id="mp-tv-grid"><div class="status">Loading shows...</div></div>
</section>

<section class="section" id="mp-fav">
 <div class="heading"><h2>❤️ My Watchlist</h2></div>
 <div class="grid" id="mp-fav-grid"><div class="status">Your watchlist is empty.</div></div>
</section>

<div class="modal" id="mp-modal">
 <div class="modal-box">
  <button class="close" id="mp-close">×</button>
  <div id="mp-detail-content"></div>
 </div>
</div>

<footer>
 <strong style="font-size:25px">MOVIES PK</strong>
 <p>Your destination for movie discovery.</p>
 <p><a href="#mp-home">Home</a><a href="#mp-movies">Movies</a><a href="#mp-tv">TV Shows</a></p>
 <p>Movie information and images provided by TMDB.</p>
 <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
 <p>© 2026 Movies PK</p>
</footer>
</div>

<script>
(function(){
"use strict";

/* Replace this with your deployed Cloudflare Worker URL */
const API_BASE="PASTE_YOUR_WORKER_URL_HERE";

const root=document.getElementById("moviespk");
if(!root)return;

const imageBase="https://image.tmdb.org/t/p/w500";
const placeholder="https://placehold.co/400x600/141e30/ffffff?text=No+Poster";
let movieItems=[];
let tvItems=[];
let searchTimer=null;

const $=id=>document.getElementById(id);

async function api(path){
 if(API_BASE==="PASTE_YOUR_WORKER_URL_HERE"){
  throw new Error("Please add your Worker URL first.");
 }
 const response=await fetch(API_BASE+"?path="+encodeURIComponent(path));
 if(!response.ok)throw new Error("API request failed");
 return response.json();
}

function safe(value){
 return String(value??"").replace(/[&<>"']/g,c=>({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
 }[c]));
}

function getFavs(){
 try{return JSON.parse(localStorage.getItem("moviespk_watchlist")||"[]")}
 catch(e){return []}
}

function saveFavs(items){
 localStorage.setItem("moviespk_watchlist",JSON.stringify(items));
}

function card(item,type){
 const title=item.title||item.name||"Untitled";
 const poster=item.poster_path?imageBase+item.poster_path:placeholder;
 const fav=getFavs().some(x=>x.id===item.id&&x.type===type);

 return `<article class="movie" data-id="${Number(item.id)}" data-type="${type}">
  <button class="heart" data-fav="${Number(item.id)}" data-type="${type}" aria-label="Add to watchlist">${fav?"♥":"♡"}</button>
  <img loading="lazy" src="${poster}" alt="${safe(title)}" onerror="this.onerror=null;this.src='${placeholder}'">
  <div class="movie-info">
   <h3>${safe(title)}</h3>
   <div class="meta">${safe((item.release_date||item.first_air_date||"").slice(0,4))} · <span class="rating">★ ${Number(item.vote_average||0).toFixed(1)}</span></div>
  </div>
 </article>`;
}

function showCards(grid,items,type){
 grid.innerHTML=items.length?items.map(item=>card(item,type)).join(""):'<div class="status">No results found.</div>';
}

async function loadMovies(path){
 $("mp-movie-grid").innerHTML='<div class="status">Loading movies...</div>';
 try{
  const data=await api(path);
  movieItems=data.results||[];
  showCards($("mp-movie-grid"),movieItems,"movie");
 }catch(e){
  $("mp-movie-grid").innerHTML='<div class="status">Unable to load movies. Check your Worker URL and API setup.</div>';
 }
}

async function loadTV(path){
 $("mp-tv-grid").innerHTML='<div class="status">Loading shows...</div>';
 try{
  const data=await api(path);
  tvItems=data.results||[];
  showCards($("mp-tv-grid"),tvItems,"tv");
 }catch(e){
  $("mp-tv-grid").innerHTML='<div class="status">Unable to load TV shows.</div>';
 }
}

async function openDetails(id,type){
 $("mp-modal").style.display="flex";
 $("mp-detail-content").innerHTML='<div class="status">Loading details...</div>';

 try{
  const item=await api(type+"/"+id);
  const videoData=await api(type+"/"+id+"/videos");
  const videos=videoData.results||[];
  const trailer=videos.find(v=>v.site==="YouTube"&&v.type==="Trailer"&&v.official)
    ||videos.find(v=>v.site==="YouTube"&&v.type==="Trailer");

  const title=item.title||item.name||"Movie";
  const poster=item.poster_path?imageBase+item.poster_path:placeholder;
  const date=item.release_date||item.first_air_date||"Not available";
  const genres=(item.genres||[]).map(g=>g.name).join(", ")||"Not available";
  const watchUrl="https://www.justwatch.com/search?q="+encodeURIComponent(title);

  $("mp-detail-content").innerHTML=`
   <h2>${safe(title)}</h2>
   <div class="details-layout">
    <img src="${poster}" alt="${safe(title)}">
    <div>
     <p class="rating">★ ${Number(item.vote_average||0).toFixed(1)} / 10</p>
     <p class="description">Release: ${safe(date)}</p>
     <p class="description">Genres: ${safe(genres)}</p>
     <p class="description">${safe(item.overview||"Description not available.")}</p>
     <div class="actions">
      <button class="gold" id="mp-save-detail">♡ Save to Watchlist</button>
      <a class="secondary" style="text-decoration:none" href="${watchUrl}" target="_blank" rel="noopener">Official Watch / Download Options</a>
     </div>
    </div>
   </div>
   ${trailer?`<h3 style="margin-top:24px">Official Trailer</h3><iframe class="trailer" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(trailer.key)}" title="Official trailer" allowfullscreen loading="lazy"></iframe>`:"<p class='description' style='margin-top:20px'>No official trailer available.</p>"}
  `;

  $("mp-save-detail").onclick=()=>toggleFav(id,type);

 }catch(e){
  $("mp-detail-content").innerHTML='<div class="status">Could not load details. Please try again.</div>';
 }
}

function toggleFav(id,type){
 let list=getFavs();
 const index=list.findIndex(x=>x.id===id&&x.type===type);
 if(index>=0)list.splice(index,1);
 else list.push({id,type});
 saveFavs(list);
 renderFavs();

 root.querySelectorAll(".heart").forEach(button=>{
  if(Number(button.dataset.fav)===id&&button.dataset.type===type){
   button.textContent=index>=0?"♡":"♥";
  }
 });
}

async function renderFavs(){
 const grid=$("mp-fav-grid");
 const list=getFavs();
 if(!list.length){
  grid.innerHTML='<div class="status">Your watchlist is empty. Tap ♡ on a movie to save it.</div>';
  return;
 }
 grid.innerHTML='<div class="status">Loading your watchlist...</div>';
 const results=await Promise.all(list.map(async item=>{
  try{return {...await api(item.type+"/"+item.id),_type:item.type}}
  catch(e){return null}
 }));
 showCards(grid,results.filter(Boolean), "movie");
 grid.querySelectorAll(".movie").forEach(el=>{
  const id=Number(el.dataset.id);
  const item=results.find(x=>x&&x.id===id);
  if(item)el.dataset.type=item._type;
 });
}

async function searchMovies(query){
 const grid=$("mp-movie-grid");
 grid.innerHTML='<div class="status">Searching...</div>';
 try{
  const data=await api("search/multi?query="+encodeURIComponent(query));
  const results=(data.results||[]).filter(x=>x.media_type==="movie"||x.media_type==="tv");
  grid.innerHTML=results.map(x=>card(x,x.media_type)).join("")||'<div class="status">No movies or shows found.</div>';
 }catch(e){
  grid.innerHTML='<div class="status">Search failed. Please try again.</div>';
 }
}

$("mp-search").addEventListener("input",e=>{
 clearTimeout(searchTimer);
 const q=e.target.value.trim();
 if(!q){loadMovies("trending/movie/week");return}
 searchTimer=setTimeout(()=>searchMovies(q),450);
});

$("mp-movie-tabs").addEventListener("click",e=>{
 const btn=e.target.closest("button[data-path]");
 if(!btn)return;
 $("mp-movie-tabs").querySelectorAll("button").forEach(b=>b.classList.remove("active"));
 btn.classList.add("active");
 $("mp-search").value="";
 loadMovies(btn.dataset.path);
});

$("mp-tv-tabs").addEventListener("click",e=>{
 const btn=e.target.closest("button[data-path]");
 if(!btn)return;
 $("mp-tv-tabs").querySelectorAll("button").forEach(b=>b.classList.remove("active"));
 btn.classList.add("active");
 loadTV(btn.dataset.path);
});

root.addEventListener("click",e=>{
 const fav=e.target.closest("button[data-fav]");
 if(fav){
  e.stopPropagation();
  toggleFav(Number(fav.dataset.fav),fav.dataset.type);
  return;
 }
 const movie=e.target.closest(".movie");
 if(movie)openDetails(Number(movie.dataset.id),movie.dataset.type);
});

$("mp-close").addEventListener("click",()=>$("mp-modal").style.display="none");
$("mp-modal").addEventListener("click",e=>{
 if(e.target===$("mp-modal"))$("mp-modal").style.display="none";
});

loadMovies("trending/movie/week");
loadTV("tv/popular");
renderFavs();

})();
</script>
</div>
  
