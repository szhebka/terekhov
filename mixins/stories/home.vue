<script>
import storyBridgeVue from '../storyBridge.vue'
import { getStory } from '~/scripts/utils/getStory'
export default {
  mixins: [storyBridgeVue],

  asyncData(context) {
    return getStory(context.app, '/index/', context.app.i18n.locale)
  },

  computed: {
    home1() {
      return this.story.content.first_screen[0]
    },
    home2() {
      return this.story.content.second_screen[0]
    },
    home3() {
      return this.story.content.third_screen[0]
    },
    home4() {
      return this.story.content.fourth_screen[0]
    },
    home5() {
      return this.story.content.fifth_screen[0]
    },
    home6() {
      return this.story.content.sixth_screen[0]
    },
    expo() {
      return this.story.content.seventh_exposure_screen[0]
    },
    stages() {
      return this.story.content.stages[0].stage_images
    },
    bio() {
      return this.story.content.home_eighth_screen[0]
    },
  },
  methods: {
    breakLine(string) {
      return string.replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
  },
}
</script>