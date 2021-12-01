<script>
import storyBridgeVue from '../storyBridge.vue'
import { getStory } from '~/scripts/utils/getStory'
export default {
  mixins: [storyBridgeVue],

  asyncData(context) {
    return getStory(context.app, '/texts/', context.app.i18n.locale)
  },

  computed: {
    texts() {
      return this.story.content.texts_items
    },
  },
  methods: {
    breakLine(string) {
      return string.replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
  },
}
</script>