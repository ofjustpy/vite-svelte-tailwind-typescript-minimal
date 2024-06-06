<script>
  import HtmlComponent from './HtmlComponent.svelte';
   let comp_ref;

</script>

<HtmlComponent bind:this={comp_ref} {comp_ref}></HtmlComponent>


