<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  // {
  //   avatar: 'https://www.github.com/yyx990803.png',
  //   name: '尤雨溪',
  //   title: '作者',
  //   links: [
  //     { icon: 'github', link: 'https://github.com/yyx990803' },
  //     { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
  //   ]
  // },
  {
    avatar: '/img/one.jpg',
    name: '年年有鲨鱼',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/2432450223' },
      // { icon: 'twitter', link: 'https://twitter.com' }
    ]
  },
  {
    avatar: '/img/two.jpg',
    name: '覃-ajax-专员',
    title: '体验人员',
    // links: [
    //   { icon: 'github', link: 'https://github.com/yyx990803' },
    //   { icon: 'twitter', link: 'https://twitter.com' }
    // ]
  },
  {
    avatar: '/img/four.jpg',
    name: '每天睡不醒',
    title: '体验人员',
    // links: [
    //   { icon: 'github', link: 'https://github.com/yyx990803' },
    //   { icon: 'twitter', link: 'https://twitter.com' }
    // ]
  },
  {
    avatar: '/img/three.jpg',
    name: '北京-黑马king-亦菲',
    title: '边缘ob摸鱼人',
    links: [
      { icon: 'github', link: 'https://github.com/zhangjiexuan' },
      // { icon: 'twitter', link: 'https://twitter.com' }
    ]
  }
]
</script>

# 团队成员

男儿何不带键盘，前端后端都能干。

<VPTeamMembers size="small" :members="members" />