<script>
  /** @type {import("@prismicio/client").Content.NaamSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
<p>{slice.primary.name}</p>

</section>


<style>

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
  }

</style>