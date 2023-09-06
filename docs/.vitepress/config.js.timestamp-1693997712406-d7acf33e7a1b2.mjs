// docs/.vitepress/config.js
import { defineConfig } from "file:///C:/Users/Administrator/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  title: "\u{1F988}",
  description: "A VitePress Site",
  lastUpdated: true,
  // 使用默认的显示方式
  // lastUpdated: '最后更新于 {YYYY}-{MM}-{DD}', // 自定义显示方式
  themeConfig: {
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dataStyle: "full",
        timeStyle: "medium"
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "npm", link: "/npm" },
      { text: "node.js", link: "/node.js" },
      { text: "Members", link: "/members" }
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      },
      {
        text: "npm",
        items: [
          { text: "npm\u5E38\u7528\u6307\u4EE4", link: "/npm" }
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: "node.js",
        items: [
          { text: "\u539F\u751Fnode.js", link: "/node.js" }
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: "\u56E2\u961F\u6210\u5458",
        items: [
          { text: "\u56E2\u961F\u6210\u5458", link: "/members" }
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],
    footer: {
      message: "\u4EC5\u4F9B\u5B66\u4E60\u4EA4\u6D41\uFF0C\u5207\u52FF\u8FDB\u884C\u5546\u52A1\u7528\u9014\u3002",
      copyright: "Copyright \xA9 2023-present Yu"
    }
  },
  markdown: {
    compilerOptions: {
      isCustomElement: (tag) => tag === "LastUpdated"
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcRGVza3RvcFxcXFxibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXGJsb2dcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL2Jsb2cvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6IFwiXHVEODNFXHVERDg4XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgVml0ZVByZXNzIFNpdGVcIixcbiAgbGFzdFVwZGF0ZWQ6dHJ1ZSxcbiAvLyBcdTRGN0ZcdTc1MjhcdTlFRDhcdThCQTRcdTc2ODRcdTY2M0VcdTc5M0FcdTY1QjlcdTVGMEZcbiAgLy8gbGFzdFVwZGF0ZWQ6ICdcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcdTRFOEUge1lZWVl9LXtNTX0te0REfScsIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjYzRVx1NzkzQVx1NjVCOVx1NUYwRlxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxhc3RVcGRhdGVkOiB7XG4gICAgICB0ZXh0OidVcGRhdGVkIGF0JyxcbiAgICAgIGZvcm1hdE9wdGlvbnM6e1xuICAgICAgICBkYXRhU3R5bGU6J2Z1bGwnLFxuICAgICAgICB0aW1lU3R5bGU6J21lZGl1bSdcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHsgdGV4dDogJ0V4YW1wbGVzJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfSxcbiAgICAgIHsgdGV4dDogJ25wbScsIGxpbms6ICcvbnBtJyB9LFxuICAgICAgeyB0ZXh0OiAnbm9kZS5qcycsIGxpbms6ICcvbm9kZS5qcycgfSxcbiAgICAgIHsgdGV4dDogJ01lbWJlcnMnLCBsaW5rOiAnL21lbWJlcnMnIH0sXG4gICAgXSxcblxuICAgIHNpZGViYXI6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0V4YW1wbGVzJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdNYXJrZG93biBFeGFtcGxlcycsIGxpbms6ICcvbWFya2Rvd24tZXhhbXBsZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUnVudGltZSBBUEkgRXhhbXBsZXMnLCBsaW5rOiAnL2FwaS1leGFtcGxlcycgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnbnBtJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICducG1cdTVFMzhcdTc1MjhcdTYzMDdcdTRFRTQnLCBsaW5rOiAnL25wbScgfSxcbiAgICAgICAgICAvLyB7IHRleHQ6ICdSdW50aW1lIEFQSSBFeGFtcGxlcycsIGxpbms6ICcvYXBpLWV4YW1wbGVzJyB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdub2RlLmpzJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdcdTUzOUZcdTc1MUZub2RlLmpzJywgbGluazogJy9ub2RlLmpzJyB9LFxuICAgICAgICAgIC8vIHsgdGV4dDogJ1J1bnRpbWUgQVBJIEV4YW1wbGVzJywgbGluazogJy9hcGktZXhhbXBsZXMnIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NTZFMlx1OTYxRlx1NjIxMFx1NTQ1OCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1NkUyXHU5NjFGXHU2MjEwXHU1NDU4JywgbGluazogJy9tZW1iZXJzJyB9LFxuICAgICAgICAgIC8vIHsgdGV4dDogJ1J1bnRpbWUgQVBJIEV4YW1wbGVzJywgbGluazogJy9hcGktZXhhbXBsZXMnIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG5cbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MnIH1cbiAgICBdLFxuXG4gICAgZm9vdGVyOntcbiAgICAgIG1lc3NhZ2U6J1x1NEVDNVx1NEY5Qlx1NUI2Nlx1NEU2MFx1NEVBNFx1NkQ0MVx1RkYwQ1x1NTIwN1x1NTJGRlx1OEZEQlx1ODg0Q1x1NTU0Nlx1NTJBMVx1NzUyOFx1OTAxNFx1MzAwMicsXG4gICAgICBjb3B5cmlnaHQ6J0NvcHlyaWdodCBcdTAwQTkgMjAyMy1wcmVzZW50IFl1J1xuICAgIH1cbiAgfSxcbiAgbWFya2Rvd246e1xuICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiB0YWcgPT09ICdMYXN0VXBkYXRlZCdcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStVLFNBQVMsb0JBQW9CO0FBRzVXLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLGFBQVk7QUFBQTtBQUFBO0FBQUEsRUFHWixhQUFhO0FBQUEsSUFDWCxhQUFhO0FBQUEsTUFDWCxNQUFLO0FBQUEsTUFDTCxlQUFjO0FBQUEsUUFDWixXQUFVO0FBQUEsUUFDVixXQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsS0FBSztBQUFBLE1BQ0gsRUFBRSxNQUFNLFFBQVEsTUFBTSxJQUFJO0FBQUEsTUFDMUIsRUFBRSxNQUFNLFlBQVksTUFBTSxxQkFBcUI7QUFBQSxNQUMvQyxFQUFFLE1BQU0sT0FBTyxNQUFNLE9BQU87QUFBQSxNQUM1QixFQUFFLE1BQU0sV0FBVyxNQUFNLFdBQVc7QUFBQSxNQUNwQyxFQUFFLE1BQU0sV0FBVyxNQUFNLFdBQVc7QUFBQSxJQUN0QztBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxxQkFBcUIsTUFBTSxxQkFBcUI7QUFBQSxVQUN4RCxFQUFFLE1BQU0sd0JBQXdCLE1BQU0sZ0JBQWdCO0FBQUEsUUFDeEQ7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLCtCQUFXLE1BQU0sT0FBTztBQUFBO0FBQUEsUUFFbEM7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLHVCQUFhLE1BQU0sV0FBVztBQUFBO0FBQUEsUUFFeEM7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLDRCQUFRLE1BQU0sV0FBVztBQUFBO0FBQUEsUUFFbkM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUEsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxxQ0FBcUM7QUFBQSxJQUMvRDtBQUFBLElBRUEsUUFBTztBQUFBLE1BQ0wsU0FBUTtBQUFBLE1BQ1IsV0FBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFTO0FBQUEsSUFDUCxpQkFBaUI7QUFBQSxNQUNmLGlCQUFpQixDQUFDLFFBQVEsUUFBUTtBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
