<!--
 * @Description: 视频
 * @Version: 1
 * @Autor: Liang Zhong Wei
 * @Date: 2020-09-02 15:03:03
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-09-03 14:16:16
-->
<template>
  <div>
    <div data-vjs-player>
      <video ref="videoNode" class="video-js vjs-default-skin">抱歉，您的浏览器不支持</video>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js'
// 播放器中文，不能使用.js文件
import videozhCN from 'video.js/dist/lang/zh-CN.json'
// 样式文件注意要加上
import 'video.js/dist/video-js.css'
// 如果要播放RTMP要使用flash 需要先npm i videojs-flash
import 'videojs-flash'
export default {
  data () {
    return {
      player: null
    }
  },
  // 初始化播放器
  mounted () {
    let options = {
      autoplay: true, // 自动播放
      language: 'zh-CN',
      controls: this.controls, // 控制条
      preload: 'auto', // 自动加载
      errorDisplay: true, // 错误展示
      fluid: true, // 跟随外层容器变化大小，跟随的是外层宽度
      width: '500px',
      height: '500px',
      // controlBar: false,  // 设为false不渲染控制条DOM元素，只设置controls为false虽然不展示，但是存在
      // textTrackDisplay: false,  // 不渲染字幕相关DOM
      userActions: {
        hotkeys: true // 是否支持热键
      },
      notSupportedMessage: '此视频暂无法播放，请稍后再试',
      // techOrder: ['h5', 'flash'], // 定义Video.js技术首选的顺序
      sources: [
        {
          // src: '视频或者直播地址',
          src: '../../assets/video/test.mp4',
          type: 'video/mp4'
          // type: 'rtmp/flv',
        }
      ]
    }
    this.player = videojs(
      this.$refs.videoNode,
      options,
      function onPlayerReady () {
        videojs.log(`Your player is ready!`)
      }
    )
    videojs.addLanguage('zh-CN', videozhCN)
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}

</script>
