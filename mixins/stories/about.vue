<script>
import storyBridgeVue from '../storyBridge.vue'
import { getStory } from '~/scripts/utils/getStory'
export default {
  mixins: [storyBridgeVue],

  asyncData(context) {
    return getStory(context.app, '/about/', context.app.i18n.locale)
  },

  computed: {
    bioScreens() {
      return this.story.content.biography_screens[0]
    },
    footer() {
      return this.story.content.biography_footer[0]
    },
  },
  methods: {
    breakLine(string) {
      return string.replace(/(?:\r\n|\r|\n)/g, '</br>')
    },
    replaceSpace(string) {
      let strings = string.split(' ')
      if (strings.length === 3) {
        strings = [strings[0], [strings[1], strings[2]].join('')]
      }
      strings = strings.map(str => `<p>${str}</p>`)
      return strings.join(' ')
    },
  },
}
</script>