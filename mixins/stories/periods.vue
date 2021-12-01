<script>
import storyBridgeVue from '../storyBridge.vue'
import { getStory } from '~/scripts/utils/getStory'
export default {
  mixins: [storyBridgeVue],

  asyncData(context) {
    return getStory(context.app, '/periods/', context.app.i18n.locale)
  },

  computed: {
    periods() {
      return this.story.content.periods
    },
  },
}
</script>