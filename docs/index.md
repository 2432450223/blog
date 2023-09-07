---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "年年有鲨余"
  text: "个人技术栈笔记"
  tagline: 程序人员写程序，又拿程序换酒钱。
  actions:
    - theme: brand
      text: Markdown
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples
  image-bg: ''
  image-filter: ''
  image : 
    src: /img/shark.svg
    alt: 'yyy'
    # siteTitle: 'VitePress-Fun',

features:
  - icon: 
      src: /img/1F54A.svg
    title: JS
    details: 作为前端的必修课，本笔记将会包括js

  - icon: 
      src: /img/1F41B.svg
    title: Python
    details: 爬虫的不二语言，本笔记还会记录利用python框架进行游戏开发的经验
  - icon : 
      src : /img/1F680.svg
    title: Vue
    details: 目前前端最火的框架
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  --vp-home-hero-image-background-image: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
  --vp-home-hero-image-filter: blur(56px);
}

</style>