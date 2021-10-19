<script>
export default {
  async mounted() {
    await this.initAnchor()
  },
  beforeDestroy() {
    this.anchorScroll && this.anchorScroll.destroy()
  },
  methods: {
    async initAnchor() {
      const { anchorScroll } = await import('~/scripts/utils/anchorScroll')

      this.anchorScroll = anchorScroll('[data-href]')
    },
  },
}
</script>