<script>
import { getStory } from '~/scripts/utils/getStory'
export default {
  asyncData(context) {
    return getStory(context.app, '/home/', context.app.i18n.locale)
  },
}
</script>