import{_ as e,o as a,c as s,Q as t}from"./chunks/framework.bf7c2cc3.js";const _=JSON.parse('{"title":"npm 常用指令","description":"","frontmatter":{},"headers":[],"relativePath":"npm.md","filePath":"npm.md","lastUpdated":1694075692000}'),n={name:"npm.md"},p=t('<h1 id="npm-常用指令" tabindex="-1">npm 常用指令 <a class="header-anchor" href="#npm-常用指令" aria-label="Permalink to &quot;npm 常用指令&quot;">​</a></h1><h2 id="查看npm镜像" tabindex="-1">查看npm镜像 <a class="header-anchor" href="#查看npm镜像" aria-label="Permalink to &quot;查看npm镜像&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm config get registry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm config get registry</span></span></code></pre></div><h2 id="切换npm镜像" tabindex="-1">切换npm镜像 <a class="header-anchor" href="#切换npm镜像" aria-label="Permalink to &quot;切换npm镜像&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>切换镜像后将影响npm包的上传</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm config set registry 镜像地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm config set registry 镜像地址</span></span></code></pre></div><ul><li>原镜像：<a href="https://registry.npmjs.org" target="_blank" rel="noreferrer">https://registry.npmjs.org</a></li><li>淘宝镜像：<a href="https://registry.npm.taobao.org/" target="_blank" rel="noreferrer">https://registry.npm.taobao.org/</a></li></ul>',7),r=[p];function o(i,l,c,d,m,h){return a(),s("div",null,r)}const u=e(n,[["render",o]]);export{_ as __pageData,u as default};