<script>
  export let comp_ref;
  let myself_ref;

  $:if(comp_ref) myself_ref = comp_ref;
  $:if(comp_ref) console.log(comp_ref)
  console.log(myself_ref);
</script>
<h1> A component </h1>
{myself_ref}
