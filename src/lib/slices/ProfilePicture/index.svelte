<script>
    import { PrismicImage } from "@prismicio/svelte"

  /** @type {import("@prismicio/client").Content.ProfilePictureSlice} */
  export let slice
</script>

  <section data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>

<div class="profile-picture">
<PrismicImage field={slice.primary.profilepicture} width="600px" height="auto" />
</div>

</section>


<style>

  .profile-picture {
    display: flex;
    justify-content: center;
  }

</style>