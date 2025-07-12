(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};var i=class{get state(){return this._state}set state(e){this._state=e,this.update()}constructor(e,t){this.isMounted=!1,this._props=e??{},this._state=t??{},this.el=this.render()}get props(){return this._props}update(){let e=this.render();this.el.replaceWith(e),this.el=e,this.onUpdate()}mount(e){this.isMounted||(this.parentEl=e,this.parentEl.appendChild(this.el),this.isMounted=!0,this.componentDidMount())}unmount(){this.isMounted&&(this.componentWillUnmount(),this.el.remove(),this.isMounted=!1)}onUpdate(){}componentDidMount(){}componentWillUnmount(){}},a=class extends i{render(){let e=document.createElement(`main`);return e.className=`max-w-md mx-auto px-4 py-4`,e.innerHTML=`
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
            </filter>
          </defs>
          <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
          <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
          <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
        </svg>
        <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
      </div>
    `,e}};const o=new Set,s=e=>{let t=e,n=[];return{get value(){return t},setValue:e=>{t=typeof e==`function`?e(t):e,n.forEach(e=>e())},subscribe:e=>{n.push(e);let t=()=>{n=n.filter(t=>t!==e)};return o.add(t),t}}},c=(e,t)=>{let n=localStorage.getItem(e),r=n?JSON.parse(n):t,i=r,a=[];return{get value(){return i},setValue:t=>{typeof t==`function`?(i=t(i),localStorage.setItem(e,JSON.stringify(i))):(i=t,localStorage.setItem(e,JSON.stringify(i))),a.forEach(e=>e())},subscribe:e=>{a.push(e);let t=()=>{a=a.filter(t=>t!==e)};return o.add(t),t}}},l=s({isLoading:!1,data:[],error:null,page:1,limit:20});var u=class extends i{constructor(...e){super(...e),this.subscribeStoreList=[]}render(){let{isLoading:e,data:t}=l.value,n=document.createElement(`div`);return!e||t.length||(n.innerHTML=`
      <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
        <!-- 로딩 스켈레톤 4개 -->
        ${[,,,,].fill(0).map(()=>`
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
          <div class="aspect-square bg-gray-200"></div>
          <div class="p-3">
            <div class="h-4 bg-gray-200 rounded mb-2"></div>
            <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
            <div class="h-8 bg-gray-200 rounded"></div>
          </div>
        </div>
        `).join(``)}
      </div>
      <div class="text-center py-4">
        <div class="inline-flex items-center">
          <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
        </div>
      </div>
    `),n}componentDidMount(){this.subscribeStoreList.push(l.subscribe(()=>{this.update()}))}componentWillUnmount(){this.subscribeStoreList.forEach(e=>e())}};function d(){return`
    <main class="max-w-md mx-auto px-4 py-4">
      <!-- 검색 및 필터 -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
        <!-- 검색창 -->
        <div id="name-filter-space" class="mb-4"></div>
        <!-- 필터 옵션 -->
        <div class="space-y-3">
          <!-- 카테고리 필터 -->
          <div id="category-filter-space" class="space-y-2"></div>
          <!-- 기존 필터들 -->
          <div id="original-filter-space" class="flex gap-2 items-center justify-between"></div>
        </div>
      </div>
      <!-- 상품 목록 영역 -->
      <div class="mb-6">
        <div id="product-container"></div>
      </div>
    </main>
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `}var f=class e{static#_=this.instance=null;static getInstance(){return e.instance||=new e,e.instance}constructor(){this.handlers={}}dispatch(e,t){let n=t.target;if(!(n instanceof Element))return;let r=this.handlers[e];if(!r)return;let i=[...r.entries()].find(([e])=>n?.closest(`[event-id="${e}"]`));if(i){let[e,n]=i;n(t)}}register(e,t,n){let r=this.handlers[e];if(r){r.set(t,n);return}r=new Map,r.set(t,n),this.handlers[e]=r,document.body.addEventListener(e,this.dispatch.bind(this,e))}unregister(e,t){this.handlers[e]?.delete(t)}},p=class extends i{constructor(...e){super(...e),this.subscribeStoreList=[]}render(){let{type:e=`success`,message:t=``,duration:n=3e3}=this.props,r=`bg-green-600`,i=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    `;e===`info`&&(r=`bg-blue-600`,i=`
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      `),e===`error`&&(r=`bg-red-600`,i=`
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      `);let a=document.createElement(`div`);a.id=`toast-component`,a.className=`flex flex-col gap-2 items-center justify-center mx-auto`,a.style.width=`fit-content`;let o=document.createElement(`div`);o.className=`${r} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm`;let s=document.createElement(`div`);s.className=`flex-shrink-0`,s.innerHTML=i;let c=document.createElement(`p`);c.className=`text-sm font-medium`,c.textContent=t;let l=document.createElement(`button`);return l.className=`flex-shrink-0 ml-2 text-white hover:text-gray-200`,l.innerHTML=`
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    `,l.onclick=()=>{this.unmount()},o.appendChild(s),o.appendChild(c),o.appendChild(l),a.appendChild(o),a}};const m=s(null);let h=null;function g(e){let t=document.getElementById(`toast-component`);t&&t.remove(),h&&(clearTimeout(h),h=null),m.setValue(e);let n=new p({type:e.type,message:e.text}),r=document.createElement(`div`);r.style.position=`absolute`,r.style.left=`50%`,r.style.bottom=`32px`,r.style.transform=`translateX(-50%)`,r.style.zIndex=`9999`,document.body.appendChild(r),n.mount(r);let i=e.duration??3e3;h=setTimeout(()=>{m.setValue(null);let e=document.getElementById(`toast-component`);e&&(n.unmount(),e.remove())},i)}const _=c(`cart`,{productList:[],selectedProductIds:[]});function v(){return{addToCart:e=>{let t=l.value.data.flatMap(e=>e.products).find(t=>t.productId===e);t&&(_.setValue(e=>({...e,productList:[...e.productList,t]})),g({text:`장바구니에 추가되었습니다`,type:`success`}))},changeQuantity:(e,t)=>{_.setValue(n=>{let r=n.productList.filter(t=>t.productId===e).length;if(r+t<1)return n;let i=[...n.productList];if(t>0){let t=n.productList.find(t=>t.productId===e);t&&i.push(t)}else{let t=!1;i=i.filter(n=>!t&&n.productId===e?(t=!0,!1):!0)}return{...n,productList:i}})},deleteItem:e=>{_.setValue(t=>({...t,productList:t.productList.filter(t=>t.productId!==e),selectedProductIds:t.selectedProductIds.filter(t=>t!==e)}))},toggleSelect:(e,t)=>{_.setValue(n=>{let r=new Set(n.selectedProductIds);return t?r.add(e):r.delete(e),{...n,selectedProductIds:Array.from(r)}})},toggleSelectAll:()=>{_.setValue(e=>{let t=Array.from(new Set(e.productList.map(e=>e.productId))),n=t.every(t=>e.selectedProductIds.includes(t));return{...e,selectedProductIds:n?[]:t}})},deleteSelected:()=>{_.setValue(e=>{let t=new Set(e.selectedProductIds);return{...e,productList:e.productList.filter(e=>!t.has(e.productId)),selectedProductIds:[]}})},clearCart:()=>{_.setValue(e=>({...e,productList:[],selectedProductIds:[]}))},getQuantity:e=>_.value.productList.filter(t=>t.productId===e).length,isSelected:e=>_.value.selectedProductIds.includes(e)}}var y=class extends i{constructor(...e){super(...e),this.subscribeStoreList=[]}render(){let e=l.value.data,t=e.flatMap(e=>e.products),n=document.createElement(`div`);return l.value.isLoading&&!t.length||(n.innerHTML=`
      <div>
        <div class="mb-4 text-sm text-gray-600">
          총 <span class="font-medium text-gray-900">${l.value.data[0]?.pagination?.total}개</span>의 상품
        </div>
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          ${t.map(e=>`<div
                  class="block bg-white p-2 cursor-pointer rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
                  data-product-id="${e.productId}"
                  style="text-decoration: none; color: inherit;"
                  event-id="product-card"
                >
                  <!-- 상품 이미지 -->
                  <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
                    <img
                      src=${e.image}
                      alt="${e.title}"
                      class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  </div>
                  <!-- 상품 정보 -->
                  <div class="p-3">
                    <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">${e.title}</h3>
                    <p class="text-xs text-gray-500 mb-2">${e.brand?e.brand:e.mallName}</p>
                    <p class="text-lg font-bold text-gray-900">
                      ${e.lprice?`${Number(e.lprice).toLocaleString()}원`:`${Number(e.hprice).toLocaleString()}원`}
                    </p>
                  </div>
                  <!-- 장바구니 버튼 -->
                  <button
                    event-id="add-to-cart"
                    class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                       hover:bg-blue-700 transition-colors add-to-cart-btn"
                    data-product-id="${e.productId}"
                    type="button"
                  >
                    장바구니 담기
                  </button>
                </div>`).join(``)}
        </div>
      </div>
    `),n}componentDidMount(){this.subscribeStoreList.push(l.subscribe(()=>{this.update()})),f.getInstance().register(`click`,`add-to-cart`,e=>{let t=e.target.closest(`.add-to-cart-btn`);if(!t)return;let n=t.getAttribute(`data-product-id`);n&&v().addToCart(n)}),f.getInstance().register(`click`,`product-card`,e=>{let t=e.target,n=t.closest(`.product-card`)?.getAttribute(`data-product-id`);n&&(history.pushState({},``,`${U}/product/${n}`),window.dispatchEvent(new PopStateEvent(`popstate`)))})}componentWillUnmount(){f.getInstance().unregister(`click`,`add-to-cart`),this.subscribeStoreList.forEach(e=>e())}};const b=s(x());function x(){let e=new URLSearchParams(window.location.search),t={};for(let[n,r]of e.entries())t[n]=r;return t}function S(){let e=()=>{let e=x();b.setValue(e)};e(),window.addEventListener(`popstate`,e);let t=history.pushState,n=history.replaceState;history.pushState=function(...e){t.apply(this,e),window.dispatchEvent(new Event(`pushstate`)),window.dispatchEvent(new Event(`locationchange`))},history.replaceState=function(...e){n.apply(this,e),window.dispatchEvent(new Event(`replacestate`)),window.dispatchEvent(new Event(`locationchange`))},window.addEventListener(`pushstate`,e),window.addEventListener(`replacestate`,e),window.addEventListener(`locationchange`,e)}async function C(){let e=b.value,{limit:t=`20`,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e??{},o=e?.current??e?.page??`1`,s=new URLSearchParams({page:o,limit:t,...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function w(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function T(){let e=await fetch(`/api/categories`);return await e.json()}const E=()=>{let e=async()=>{let e=b.value,{limit:t=`20`,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e??{},o=l.value.data?.[0]?.filters;o&&(l.value.data[0].filters.category1!==r||l.value.data[0].filters.category2!==i||l.value.data[0].filters.search!==n||l.value.data[0].filters.sort!==a)?l.setValue(t=>({...t,data:[],limit:parseInt(e?.limit||`20`,10),isLoading:!0})):l.setValue(t=>({...t,limit:parseInt(e?.limit||`20`,10),isLoading:!0}));let s=await C();l.setValue(e=>e.data.some(e=>e.pagination.page===s.pagination.page&&e.pagination.limit===s.pagination.limit)?{...e,isLoading:!1}:{...e,isLoading:!1,data:e.data.concat([s])})};return e(),b.subscribe(e)},D=s({isLoading:!1,data:{}}),O=async()=>{D.setValue(e=>({...e,isLoading:!0}));let e=await T();D.setValue(t=>({isLoading:!1,data:e}))};var k=class extends i{constructor(...e){super(...e),this.unsubscribeList=[]}render(){let e=document.createElement(`section`);if(D.value.isLoading)return e.innerHTML=` <div class="flex items-center gap-2">
        <div class="flex flex-wrap gap-2" id="category1-area">카테고리 로딩 중...</div>
      </div>`,e;let t=b.value,{category1:n=``,category2:r=``}=t??{},i=D.value.data,a=Object.keys(i),o=n&&i[n]?Object.keys(i[n]):[],s=`<label class='text-sm text-gray-600'>카테고리:</label>`;s+=`<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>`,n&&(s+=`  <span class="text-xs text-gray-500">&gt;</span> 
       <button data-breadcrumb="category1" data-category1=${n} class="text-xs hover:text-blue-800 hover:underline">${n}</button>
`),r&&(s+=` <span class="text-xs text-gray-500">&gt;</span> <span class="text-xs text-gray-600 cursor-default">${r}</span>`);let c=``;return c=n?o.map(e=>`<button
          class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50${e===r?` bg-blue-50 text-blue-700 border-blue-400 font-bold`:``}"
          data-category2="${e}"
        >${e}</button>`).join(``):a.map(e=>`<button
          class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50${e===n?` bg-blue-50 text-blue-700 border-blue-400 font-bold`:``}"
          data-category1="${e}"
        >${e}</button>`).join(``),e.innerHTML=`
      <div class="flex items-center gap-2 mb-2">${s}</div>
      <div class="flex flex-wrap gap-2">${c}</div>
    `,e.addEventListener(`click`,e=>{let t=e.target,n=new URLSearchParams(window.location.search);t.dataset.breadcrumb===`reset`&&(l.setValue(e=>({...e,isLoading:!0,data:[]})),n.delete(`category1`),n.delete(`category2`)),t.dataset.category1&&(l.setValue(e=>({...e,isLoading:!0,data:[]})),n.set(`category1`,t.dataset.category1??``),n.delete(`category2`)),t.dataset.category2&&(l.setValue(e=>({...e,isLoading:!0,data:[]})),n.set(`category2`,t.dataset.category2??``));let r=window.location.pathname+(n.toString()?`?${n.toString()}`:``);window.history.replaceState({},``,r)}),e}componentDidMount(){O(),this.unsubscribeList.push(D.subscribe(()=>{this.update()})),this.unsubscribeList.push(b.subscribe(()=>{this.update()}))}componentWillUnmount(){this.unsubscribeList.forEach(e=>e()),this.unsubscribeList=[]}};function A(e,t){let n=0;return function(...r){let i=Date.now();i-n>=t&&(n=i,e(...r))}}var j=class extends i{constructor(...e){super(...e),this.unsubscribeList=[],this.observer=null,this.goNextPage=A(()=>{if(l.value.isLoading)return;let e=new URLSearchParams(window.location.search),t=parseInt(e.get(`page`)||`1`,10);e.set(`page`,(t+1).toString()),window.history.replaceState({},``,`?${e.toString()}`)},300)}render(){let{isLoading:e,data:t}=l.value,n=b.value,{page:r=`1`,limit:i=`20`}=n??{},a=t.find(e=>e.pagination.page===parseInt(r,10)&&e.pagination.limit===parseInt(i,10)),o=document.createElement(`div`);return a?.pagination.hasNext||e?(o.innerHTML=` <div id="observer-target" class="text-center py-4">
        <div class="inline-flex items-center">
          <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
        </div>
      </div>`,this.registerObserver(o)):o.innerHTML=`<div class="text-center py-4 text-sm text-gray-500">모든 상품을 확인했습니다</div>`,o}registerObserver(e){this.observer&&(this.observer.disconnect(),this.observer=null),this.observer=new IntersectionObserver((t,n)=>{t.forEach(t=>{t.isIntersecting&&(this.goNextPage(),n.unobserve(e))})}),this.observer.observe(e)}componentDidMount(){this.unsubscribeList.push(l.subscribe(()=>{this.update()}))}componentWillUnmount(){this.unsubscribeList.forEach(e=>e()),this.observer&&(this.observer.disconnect(),this.observer=null)}},M=class extends i{constructor(...e){super(...e),this.unsubscribeList=[]}render(){let e=document.createElement(`section`),t=b.value,{limit:n=`20`,sort:r=`price_asc`}=t??{};return e.innerHTML=`
      <div class="flex gap-2 items-center justify-between">
        <!-- 페이지당 상품 수 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select id="limit-select"
                  class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="10" ${n===`10`?`selected`:``}>10개</option>
            <option value="20" ${n===`20`?`selected`:``}>20개</option>
            <option value="50" ${n===`50`?`selected`:``}>50개</option>
            <option value="100" ${n===`100`?`selected`:``}>100개</option>
          </select>
        </div>
        <!-- 정렬 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">정렬:</label>
          <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                       focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="price_asc" ${r===`price_asc`?`selected`:``}>가격 낮은순</option>
            <option value="price_desc" ${r===`price_desc`?`selected`:``}>가격 높은순</option>
            <option value="name_asc" ${r===`name_asc`?`selected`:``}>이름순</option>
            <option value="name_desc" ${r===`name_desc`?`selected`:``}>이름 역순</option>
          </select>
        </div>
      </div>
    `,e.addEventListener(`change`,e=>{let t=e.target,n=new URLSearchParams(window.location.search);t.id===`limit-select`&&(l.setValue(e=>({...e,isLoading:!0,data:[]})),n.set(`limit`,t.value)),t.id===`sort-select`&&(l.setValue(e=>({...e,isLoading:!0,data:[]})),n.set(`sort`,t.value));let r=window.location.pathname+(n.toString()?`?${n.toString()}`:``);window.history.replaceState({},``,r)}),e}componentDidMount(){this.unsubscribeList.push(b.subscribe(()=>{this.update()}))}componentWillUnmount(){this.unsubscribeList.forEach(e=>e()),this.unsubscribeList=[]}},N=class extends i{constructor(...e){super(...e),this.unsubscribeList=[]}render(){let e=document.createElement(`div`);e.className=`relative`;let t=b.value,n=t?.search||``;e.innerHTML=`
      <input
        type="text"
        id="search-input"
        placeholder="상품명을 검색해보세요..."
        value="${n}"
        class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    `;let r=e.querySelector(`#search-input`);return r instanceof HTMLInputElement&&r.addEventListener(`keydown`,e=>{if(e.key===`Enter`){let e=new URLSearchParams(window.location.search);e.set(`search`,r.value),e.set(`page`,`1`),l.setValue(e=>({...e,isLoading:!0,data:[]}));let t=window.location.pathname+(e.toString()?`?${e.toString()}`:``);window.history.replaceState({},``,t)}}),e}componentDidMount(){this.unsubscribeList.push(b.subscribe(()=>{this.update()}))}componentWillUnmount(){this.unsubscribeList.forEach(e=>e()),this.unsubscribeList=[]}},P=class extends i{constructor(...e){super(...e),this.상품_리스트_컴포넌트=new y,this.로딩_컴포넌트=new u,this.상품목록_하단_섹션=new j,this.카테고리_필터_섹션=new k,this.개수_정렬_필터_섹션=new M,this.상품명_검색_필터=new N}render(){let e=document.createElement(`div`);return e.innerHTML=d(),e}componentDidMount(){E();let e=document.getElementById(`product-container`),t=document.getElementById(`category-filter-space`),n=document.getElementById(`original-filter-space`),r=document.getElementById(`name-filter-space`);e&&(this.상품_리스트_컴포넌트.mount(e),this.로딩_컴포넌트.mount(e),this.상품목록_하단_섹션.mount(e)),t&&this.카테고리_필터_섹션.mount(t),n&&this.개수_정렬_필터_섹션.mount(n),r&&this.상품명_검색_필터.mount(r)}componentWillUnmount(){this.상품_리스트_컴포넌트.unmount(),this.로딩_컴포넌트.unmount(),this.상품목록_하단_섹션.unmount(),this.카테고리_필터_섹션.unmount(),this.개수_정렬_필터_섹션.unmount(),this.상품명_검색_필터.unmount()}};const F=s({isLoading:!1,data:null,error:null});async function I(){let e=window.location.pathname.match(/product\/(\d+)/),t=e?e[1]:null;if(t){F.setValue(e=>({...e,isLoading:!0,error:null}));try{let e=await w(t);F.setValue(t=>({...t,isLoading:!1,data:e}))}catch(e){F.setValue(t=>({...t,isLoading:!1,error:e}))}}}var L=class extends i{constructor(){super({},{products:[]})}async fetchRelatedProducts(){let e=F.value.data;if(!e)return;let t={category1:e.category1,category2:e.category2,limit:20},n=await fetch(`/api/products?category1=${t.category1}&category2=${t.category2}&limit=${t.limit}`),r=await n.json();if(r&&r.products){let t=r.products.filter(t=>t.productId!==e.productId);this.state={products:t}}}render(){let{products:e}=this.state,t=document.createElement(`div`);return e.length===0?t:(t.className=`bg-white rounded-lg shadow-sm`,t.innerHTML=`
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${e.length===0?`<div class='text-gray-400 col-span-2 text-center'>관련 상품이 없습니다.</div>`:e.map(e=>`

                  
              <a href="/product/${e.productId}"  data-link
                  data-product-id="${e.productId}" class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
                <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                  <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
                </div>
                <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                <p class="text-sm font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</p>
              </a>

            `).join(``)}
        </div>
      </div>
    `,t)}componentDidMount(){this.fetchRelatedProducts(),F.subscribe(()=>{this.fetchRelatedProducts()})}},R=class extends i{constructor(...e){super(...e),this.subscribeStoreList=[]}render(){let e=document.createElement(`div`);return F.value.isLoading&&(e.innerHTML=`
      <div class="py-20 bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600">상품 정보를 불러오는 중...</p>
        </div>
      </div>
    `),e}componentDidMount(){this.subscribeStoreList.push(()=>{F.subscribe(()=>{this.update()})})}},z=class extends i{constructor(){super({},{cartCount:1,product:null})}render(){let{product:e,cartCount:t}=this.state;if(!e)return document.createElement(`div`);let n=document.createElement(`div`);return n.innerHTML=`
      <!-- 브레드크럼 -->
      <nav class="mb-4">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
            <a href="/?category1=${e.category1}" data-link="" class="hover:text-blue-600 transition-colors"> ${e.category1}</a>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
            <a href="/?category1=${e.category1}&category2=${e.category2}" data-link="" class="hover:text-blue-600 transition-colors"> ${e.category2}</a>
        </div>
      </nav>
      <!-- 상품 상세 정보 -->
      <div class="bg-white rounded-lg shadow-sm mb-6">
        <!-- 상품 이미지 -->
        <div class="p-4">
          <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img src="${e.images?.[0]||e.image}" alt="${e.title}" class="w-full h-full object-cover product-detail-image">
          </div>
          <!-- 상품 정보 -->
          <div>
            <p class="text-sm text-gray-600 mb-1">${e.brand?e.brand+` | `:``}${e.brand}</p>
            <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
            <!-- 평점 및 리뷰 -->
            <div class="flex items-center mb-3">
              <div class="flex items-center">
                ${`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`.repeat(Math.round(e.rating))}
                ${`<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`.repeat(5-Math.round(e.rating))}
              </div>
              <span class="ml-2 text-sm text-gray-600">${e.rating.toFixed(1)} (${e.reviewCount}개 리뷰)</span>
            </div>
            <!-- 가격 -->
            <div class="mb-4">
              <span class="text-2xl font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</span>
              ${e.hprice&&e.hprice!==e.lprice?`<span class="ml-2 text-sm line-through text-gray-400">${Number(e.hprice).toLocaleString()}원</span>`:``}
            </div>
            <!-- 재고 -->
            <div class="text-sm text-gray-600 mb-4">
              재고 ${e.stock}개
            </div>
            <!-- 설명 -->
            <div class="text-sm text-gray-700 leading-relaxed mb-6">
              ${e.description}
            </div>
          </div>
        </div>
        <!-- 수량 선택 및 액션 -->
        <div class="border-t border-gray-200 p-4">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-gray-900">수량</span>
            <div class="flex items-center">
              <button id="quantity-decrease" event-id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <input type="number" id="quantity-input" event-id="quantity-input"  value=${t} min="1" max="${e.stock}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <button id="quantity-increase" event-id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- 액션 버튼 -->
          <button id="add-to-cart-btn"  event-id="add-to-cart" data-product-id="${e.productId}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
            장바구니 담기
          </button>
        </div>
      </div>
      <!-- 상품 목록으로 이동 -->
      <div class="mb-6">
        <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors go-to-product-list">
          상품 목록으로 돌아가기
        </button>
      </div>
    `,n}componentDidMount(){F.subscribe(()=>{this.state={...this.state,product:F.value.data}}),this.state={...this.state,product:F.value.data},f.getInstance().register(`click`,`add-to-cart`,e=>{let{product:t,cartCount:n}=this.state;if(!t)return;let r=e.target.closest(`button[event-id='add-to-cart']`),i=r?.getAttribute(`data-product-id`);if(!i)return;let a=v();for(let e=0;e<n;e++)a.addToCart(i)}),f.getInstance().register(`click`,`quantity-decrease`,()=>{this.state={...this.state,cartCount:Math.max(1,this.state.cartCount-1)}}),f.getInstance().register(`click`,`quantity-increase`,()=>{let{product:e,cartCount:t}=this.state;this.state={...this.state,cartCount:Math.min(t+1,e?.stock??1)}}),f.getInstance().register(`change`,`quantity-input`,e=>{let{product:t}=this.state,n=e.target,r=parseInt(n.value,10);this.state={...this.state,cartCount:Math.max(1,Math.min(isNaN(r)?1:r,t?.stock??1))}})}componentWillUnmount(){f.getInstance().unregister(`click`,`add-to-cart`),f.getInstance().unregister(`click`,`quantity-decrease`),f.getInstance().unregister(`click`,`quantity-increase`),f.getInstance().unregister(`change`,`quantity-input`)}},B=class extends i{constructor(e){super(e,{cartCount:1}),this.RelatedProductList=new L,this.ProductDetailLoading=new R,this.ProductDetailContent=new z,this.subscribeStoreList=[]}render(){let e=document.createElement(`div`);return e.innerHTML=`
      <main class="max-w-md mx-auto px-4 py-4" >
      <div id="product-detail-main"></div>
        <div id="related-product-container"></div></main>
    
      <footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>
    `,e}componentDidMount(){I();let e=document.getElementById(`product-detail-main`);e&&(this.ProductDetailContent.mount(e),this.ProductDetailLoading.mount(e));let t=document.getElementById(`related-product-container`);t&&this.RelatedProductList.mount(t)}componentWillUnmount(){this.ProductDetailContent.unmount(),this.ProductDetailLoading.unmount(),this.RelatedProductList.unmount(),this.subscribeStoreList.forEach(e=>e())}},V=class extends i{constructor(...e){super(...e),this.subscribeStoreList=[]}render(){let e=new Set(_.value.productList.map(e=>e.productId)).size,t=document.createElement(`header`);return t.className=`bg-white shadow-sm sticky top-0 z-40`,t.innerHTML=`
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            ${this.props.canGoBack?`  <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>`:``}
            <h1 class="text-xl font-bold text-gray-900">
              <a href=${window.location.pathname} data-link=${window.location.pathname}>${this.props.title}</a>
            </h1>
          </div>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button
              id="cart-icon-btn"
              event-id="cart-btn"
              class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <div>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                  ></path>
                </svg>
              </div>
              ${e>0?` <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                ${e}
                    </span>`:``}
              <!-- 필요시 뱃지 추가 -->
            </button>
          </div>
        </div>
      </div>
    `,t}componentDidMount(){_.subscribe(()=>{this.update()}),f.getInstance().register(`click`,`cart-btn`,e=>{let t=new URLSearchParams(window.location.search);t.set(`cart`,`true`);let n=window.location.pathname+(t.toString()?`?${t.toString()}`:``);window.history.replaceState({},``,n)})}componentWillUnmount(){f.getInstance().unregister(`click`,`cart-btn`),this.subscribeStoreList.forEach(e=>e())}},H=class extends i{constructor(...e){super(...e),this.subscribeStoreList=[],this.handleEsc=e=>{e.key===`Escape`&&this.closeModal()}}render(){let e=document.createElement(`div`),t=b.value?.cart===`true`;return t?(e.className=`fixed inset-0 z-50 overflow-y-auto cart-modal cart-modal-overlay`,e.innerHTML=this.isCartEmpty()?this.renderEmptyCart():this.renderCartWithItems(),e):e}isCartEmpty(){return _.value.productList.length===0}renderEmptyCart(){return`
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              장바구니
              <span class="text-sm font-normal text-gray-600 ml-1">(0)</span>
            </h2>
            <button event-id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            <div class="flex-1 flex items-center justify-center p-8">
              <div class="text-center">
                <div class="text-gray-400 mb-4">
                  <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                <p class="text-gray-600">원하는 상품을 담아보세요!</p>
              </div>
            </div>
          </div>
          <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
            <div class="flex justify-between items-center mb-4">
              <span class="text-lg font-bold text-gray-900">총 금액</span>
              <span class="text-xl font-bold text-blue-600">0원</span>
            </div>
            <div class="space-y-2">
              <div class="flex gap-2">
                <button event-id="clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm" disabled>전체 비우기</button>
                <button class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm" disabled>구매하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}renderCartWithItems(){let e=v(),t=new Map;_.value.productList.forEach(e=>{t.has(e.productId)?t.get(e.productId).quantity++:t.set(e.productId,{product:e,quantity:1})});let n=Array.from(t.values()),r=_.value.productList.length,i=_.value.selectedProductIds?.length||0,a=this.getTotalPrice(),o=_.value.productList.filter(t=>e.isSelected(t.productId)).reduce((e,t)=>e+Number(t.lprice||t.hprice),0);return`
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
          <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 class="text-lg font-bold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              장바구니
              <span class="text-sm font-normal text-gray-600 ml-1">(${r})</span>
            </h2>
            <button event-id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col max-h-[calc(90vh-120px)]">
            <div class="p-4 border-b border-gray-200 bg-gray-50">
              <label class="flex items-center text-sm text-gray-700">
                <input type="checkbox" event-id="select-all-btn" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" ${i===r?`checked`:``}>
                전체선택 (${r}개)
              </label>
            </div>
            <div class="flex-1 overflow-y-auto">
              <div class="p-4 space-y-4">
                ${n.map(({product:t,quantity:n})=>{let r=e.isSelected(t.productId);return`
                      <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${t.productId}">
                        <label class="flex items-center mr-3">
                          <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" data-product-id="${t.productId}" ${r?`checked`:``}>
                        </label>
                        <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                          <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${t.productId}">
                        </div>
                        <div class="flex-1 min-w-0">
                          <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${t.productId}">${t.title}</h4>
                          <p class="text-sm text-gray-600 mt-1">${Number(t.lprice||t.hprice).toLocaleString()}원</p>
                          <div class="flex items-center mt-2">
                            <button event-id="qty-dec" class="quantity-decrease-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${t.productId}">
                              <svg  class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                              </svg>
                            </button>
                            <input type="number" value="${n}" min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled data-product-id="${t.productId}">
                            <button event-id="qty-inc" class="quantity-increase-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${t.productId}">
                              <svg  class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div class="text-right ml-3">
                          <p class="text-sm font-medium text-gray-900">${(Number(t.lprice||t.hprice)*n).toLocaleString()}원</p>
                          <button event-id="delete-item-btn" class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${t.productId}">삭제</button>
                        </div>
                      </div>
                    `}).join(``)}
              </div>
            </div>
          </div>
          <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
            <div class="flex justify-between items-center mb-3 text-sm">
              <span class="text-gray-600">선택한 상품 (${i}개)</span>
              <span class="font-medium">${o.toLocaleString()}원</span>
            </div>
            <div class="flex justify-between items-center mb-4">
              <span class="text-lg font-bold text-gray-900">총 금액</span>
              <span class="text-xl font-bold text-blue-600">${a.toLocaleString()}원</span>
            </div>
            <div class="space-y-2">
              <button event-id="delete-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm" ${i===0?`disabled`:``}>
                선택한 상품 삭제 (${i}개)
              </button>
              <div class="flex gap-2">
                <button event-id="clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm">전체 비우기</button>
                <button class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">구매하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}getTotalPrice(){return _.value.productList.reduce((e,t)=>e+Number(t.lprice||t.hprice),0)}componentDidMount(){b.subscribe(()=>{this.update()}),this.subscribeStoreList.push(_.subscribe(()=>{this.update()}));let e=v();f.getInstance().register(`click`,`cart-modal-close-btn`,()=>this.closeModal()),f.getInstance().register(`click`,`qty-inc`,t=>{let n=t.target.closest(`button[event-id='qty-inc']`),r=n?.getAttribute(`data-product-id`);r&&e.changeQuantity(r,1)}),f.getInstance().register(`click`,`qty-dec`,t=>{let n=t.target.closest(`button[event-id='qty-dec']`),r=n?.getAttribute(`data-product-id`);r&&e.changeQuantity(r,-1)}),f.getInstance().register(`click`,`delete-item-btn`,t=>{let n=t.target.getAttribute(`data-product-id`);n&&e.deleteItem(n)}),f.getInstance().register(`click`,`select-all-btn`,()=>{e.toggleSelectAll()}),f.getInstance().register(`click`,`delete-selected-btn`,()=>{e.deleteSelected()}),f.getInstance().register(`click`,`clear-cart-btn`,()=>{e.clearCart()}),this.el.addEventListener(`change`,t=>{let n=t.target;if(n.classList.contains(`cart-item-checkbox`)){let t=n.getAttribute(`data-product-id`);t&&e.toggleSelect(t,n.checked)}}),this.el.addEventListener(`click`,e=>{e.target===this.el&&this.closeModal()}),window.addEventListener(`keydown`,this.handleEsc)}componentWillUnmount(){this.subscribeStoreList.forEach(e=>e()),window.removeEventListener(`keydown`,this.handleEsc),f.getInstance().unregister(`click`,`cart-modal-close-btn`),f.getInstance().unregister(`click`,`qty-inc`),f.getInstance().unregister(`click`,`qty-dec`),f.getInstance().unregister(`click`,`delete-item-btn`),f.getInstance().unregister(`click`,`select-all-btn`),f.getInstance().unregister(`click`,`delete-selected-btn`),f.getInstance().unregister(`click`,`clear-cart-btn`)}closeModal(){let e=new URLSearchParams(window.location.search);e.delete(`cart`),window.history.replaceState({},``,`${window.location.pathname}?${e.toString()}`)}};const U=`/front_6th_chapter1-1`;let W=[];const G=[{path:U+`/`,component:P,title:`쇼핑몰`},{path:U+`/product/:productID`,component:B,title:`상품 상세`,canGoBack:!0},{path:`*`,component:a}];function K(e){for(let t of G){if(t.path===`*`)continue;let n=t.path.replace(/:([^/]+)/g,`[^/]+`),r=RegExp(`^`+n+`$`,`i`);if(r.test(e))return t}return G.find(e=>e.path===`*`)}function q(){return document.getElementById(`root`)||document.body}function J(){W&&(W.map(e=>{e.unmount()}),W=[]);let e=K(window.location.pathname);if(!e?.component)return;let t=q();t&&(W.push(new V({title:e.title,canGoBack:e.canGoBack})),W.push(new e.component),W.forEach(e=>{e.mount(t)}))}function Y(){let e=new H;e.mount(document.body),document.body.addEventListener(`click`,e=>{let t=e.target?.closest(`a[data-link]`);if(t&&t instanceof HTMLAnchorElement&&t.href){if(e.target.closest(`[event-id]`)){e.preventDefault();return}if(t.host!==location.host)return;e.preventDefault(),t.getAttribute(`href`)!==location.pathname&&(history.pushState({},``,U+t.getAttribute(`href`)),J())}}),window.addEventListener(`popstate`,J),J()}const X=()=>{Y(),S()},Z=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-B1ua0W-q.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));Z().then(X);