<script>
import storyBridgeVue from '../storyBridge.vue'
import { getStory } from '~/scripts/utils/getStory'
export default {
  mixins: [storyBridgeVue],

  asyncData(context) {
    return getStory(context.app, '/index/', context.app.i18n.locale)
  },

  computed: {
    firstScreen() {
      return this.story.content.first_screen[0]
    },
    secondScreen() {
      return this.story.content.second_screen[0]
    },
  },
}
</script>