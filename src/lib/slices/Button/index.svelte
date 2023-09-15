<script>
  /** @type {import("@prismicio/client").Content.ButtonSlice} */
  export let slice;

  console.log(slice)
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <a href={slice.primary.button.url} class="button">Github</a>
</section>

<style>
  
  .button {
    width: 200px;
    height: 50px;
    background-color: black;
    display: block;
    color: red;
    font-size: 40px;
    text-align: center;
  }

  section {
    display: flex;
    justify-content: center;
  }



</style>
